import "./Slideshow.css";
import { IonGrid, IonRow, IonSlides, IonSlide, IonImg, useIonViewWillEnter, IonHeader } from "@ionic/react";
import axios from "axios";
import React,{useState, useEffect} from "react";
import TitleBar from "../TitleBar/TitleBar";
import Copyright from "../Copyright/Copyright";

// const settings_object = Settings_Context();

const sendGetRequest = () => {
  return axios({
    url: "https://0067team16app.azurewebsites.net/images/all",
    method: "GET",
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

//const Settings = Settings_Context();

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: {
    delay: parseFloat(localStorage.getItem("slide_duration")),
    disableOnInteraction: false
  },
  spaceBetween: 100,
  loop: true,
  preloadImages: true
};

const Slideshow: React.FC = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {sendGetRequest().then((data) => setItems(data)).catch(e => console.log("data failed to load :",e))}, []);

  useIonViewWillEnter(()=>{
    console.log("Entering the slideshow page");
    slideOpts.autoplay.delay = parseFloat(localStorage.getItem("slide_duration"));
  });

  function speed_settings(e){
    console.log("switched to new slide.");
    e.currentTarget.style.animation = "rotate " + 160000/parseFloat(localStorage.getItem("animation_speed")) + "s linear infinite";
  }

  return (
    <IonSlides pager={false} options={slideOpts} className="background">
      {items.map((item, i) => (
        <IonSlide key={i} className="slide">
          <IonGrid>
            <IonRow className="titlerow">
              <TitleBar name={item.image_name} />
            </IonRow>
            <IonRow className="imagerow">
              <IonImg key={i} src={item.image_url} className="spinner rotate" onIonImgWillLoad = {(e) => speed_settings(e)} onIonError={()=>console.log("image failed to load")}/>
            </IonRow>
            <IonRow className="copyrightrow">
              <Copyright />
            </IonRow>
          </IonGrid>
        </IonSlide>
      ))}
    </IonSlides>
  );
};

export default Slideshow;
