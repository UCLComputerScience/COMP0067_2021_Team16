import "./Slideshow.css";
import {
  IonGrid,
  IonRow,
  IonSlides,
  IonSlide,
  IonImg,
  useIonViewWillEnter,
  useIonViewWillLeave,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import axios from "axios";
import React, { useState } from "react";
import Copyright from "../Copyright/Copyright";
import { DefaultSlideshowContext } from "../../contexts/SlideshowContext";

//default slide options
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: {
    delay: parseFloat(localStorage.getItem("slide_duration")),
    disableOnInteraction: false,
  },
  spaceBetween: 100,
  loop: true,
  preloadImages: true,
};

let current_recording: HTMLAudioElement;

//get response from API
async function get_online_slides(id: string) {
  try {
    const base_url = "https://0067team16app.azurewebsites.net/slideshows/";
    const url = base_url + id;
    let response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log("Error getting slides: ", e);
    return [];
  }
}

//change animation on image load
function speed_settings(e) {
  if (localStorage.getItem("animation_speed") === "0") {
    e.currentTarget.style.animation = "none";
  } else {
    e.currentTarget.style.animation =
      "rotate " +
      160000 / parseFloat(localStorage.getItem("animation_speed")) +
      "s linear infinite";
  }
  if (e.currentTarget.src.slice(-4) === ".gif") {
    e.currentTarget.style.animation = "none";
  }
}

//need this function because the ionic component does not return a straightforward number for the index
async function calculate_index(slides) {
  const Slideshow = document.getElementById("Slideshow_main");
  let index = (await Slideshow.getActiveIndex()) - 1;
  if (index >= slides.length) {
    index = index % slides.length;
  } else if (index < 0) {
    index = slides.length + (index % slides.length);
  } else {
    index = index;
  }
  return index;
}

//load in sound recording of current slide
async function load_recording(items) {
  //get the audio option from settings
  const audio_setting = localStorage.getItem("audio_option");

  //only play recording if the right settings in place
  if (["Recording only", "Music and Recordings"].includes(audio_setting)) {
    //pause any currently playing recording
    if (current_recording) {
      current_recording.pause();
    }
    //Find the current index
    let index = await calculate_index(items);

    if (index === items.length) {
      index = 0;
    }
    const recording = items[index].image_audio_url;
    if (recording) {
      const audio = new Audio(recording);
      current_recording = audio;
      current_recording.play();
    }
  }
}

// shuffle function to randomise the slides in a slideshow
function shuffle(random_slides) {
  var currentIndex = random_slides.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = random_slides[currentIndex];
    random_slides[currentIndex] = random_slides[randomIndex];
    random_slides[randomIndex] = temporaryValue;
  }
  return random_slides;
}

//loads in a selected slideshow, or a default slideshow if none is selected.
async function load_default_slides(default_slideshow, setItems) {
  let slideshow_id: string;
  let selected_slideshow = JSON.parse(
    localStorage.getItem("selected_slideshow")
  );
  if (selected_slideshow) {
    slideshow_id = selected_slideshow.default_id;
    localStorage.removeItem("selected_slideshow");
    console.log("opening the last selected slideshow: ", selected_slideshow);
  } else {
    slideshow_id = default_slideshow.default_id;
    console.log("opening the default slideshow: ", slideshow_id);
  }
  let slides = await get_online_slides(slideshow_id.toString());

  if (localStorage.getItem("shuffle") === "true") {
    slides = shuffle(slides);
  }

  setItems(slides);
}

const Slideshow: React.FC = () => {
  const [items, setItems] = useState([]);

  let default_slideshow = DefaultSlideshowContext();

  useIonViewWillEnter(() => {
    setItems([]);
    slideOpts.autoplay.delay = parseFloat(
      localStorage.getItem("slide_duration")
    );
    load_default_slides(default_slideshow, setItems);
    if (current_recording) {
      current_recording.pause();
    }
  });

  useIonViewWillLeave(() => {
    if (current_recording) {
      current_recording.pause();
    }
  });

  if (items.length > 0) {
    return (
      <ion-view can-swipe-back="false">
        <IonSlides
          id="Slideshow_main"
          pager={false}
          options={slideOpts}
          className="background"
          onIonSlideDidChange={() => load_recording(items)}
        >
          {items.map((item, i) => (
            <IonSlide key={i} className="slide">
              <IonGrid>
                <IonRow className="titlerow">
                  <h1>{item.image_name}</h1>
                </IonRow>
                <IonRow className="imagerow">
                  <IonImg
                    key={i}
                    src={item.image_url}
                    className="spinner rotate"
                    onIonImgWillLoad={(e) => speed_settings(e)}
                    onIonError={() => console.log("image failed to load")}
                  />
                </IonRow>
                <IonRow className="copyrightrow">
                  <Copyright />
                </IonRow>
              </IonGrid>
            </IonSlide>
          ))}
        </IonSlides>
      </ion-view>
    );
  } else {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="loading-slideshow-title">
            Loading your Slideshow.
          </IonCardTitle>
          <IonCardSubtitle className="loading-slideshow-subtitle">Please be patient!</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className="loading-slideshow-card-title">
          If your content is taking too long please ensure you are connected to
          the internet.
        </IonCardContent>
      </IonCard>
    );
  }
};

export default Slideshow;
