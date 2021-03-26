import "./Slideshow.css";
import { IonGrid, IonRow, IonSlides, IonSlide, IonImg, useIonViewWillEnter, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,IonCardContent } from "@ionic/react";
import axios from "axios";
import React,{useState, useEffect} from "react";
import TitleBar from "../TitleBar/TitleBar";
import Copyright from "../Copyright/Copyright";
import {Selected_Slideshow_Context,Default_Slideshow_Context} from "../../contexts/Slideshow_Context";

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

  let default_slideshow = Default_Slideshow_Context();

  async function get_online_slides(id:string) {
    try{
      const base_url = "https://0067team16app.azurewebsites.net/slideshows/";
      const url = base_url + id;
      let response = await axios.get(url);
      console.log(response);
      return response.data
    }
    catch(e){
      console.log("Error getting slides: ", e);
      return [];
    }   
  }

  async function load_default_slides(){
    let slideshow_id:string;
    let selected_slideshow = JSON.parse(localStorage.getItem("selected_slideshow"));
    if (selected_slideshow){
      slideshow_id = selected_slideshow.default_id;
      localStorage.removeItem("selected_slideshow");
      console.log("opening the last selected slideshow: ",selected_slideshow);
    }
    else{
      slideshow_id = default_slideshow.default_id;
      console.log("opening the deafault slideshow: ", slideshow_id)
    }
    let slides = await get_online_slides(slideshow_id.toString());
    setItems(slides);
  }

  useIonViewWillEnter(()=>{
    console.log("Entering the slideshow page");
    setItems([]);
    slideOpts.autoplay.delay = parseFloat(localStorage.getItem("slide_duration"));
    load_default_slides();
  });

  function speed_settings(e){
    e.currentTarget.style.animation = "rotate " + 160000/parseFloat(localStorage.getItem("animation_speed")) + "s linear infinite";
    if (e.currentTarget.src.slice(-4) == ".gif"){
      e.currentTarget.style.animation = "none";
    }
  }

  if(items.length > 0){
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
  )
}
  else{
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Loading your Slideshow.</IonCardTitle>
          <IonCardSubtitle>Please be patient!</IonCardSubtitle>  
        </IonCardHeader>
        <IonCardContent>
            If your content is taking too long please ensure you are connected to the internet.
        </IonCardContent>
      </IonCard>
    )
}
};

export default Slideshow;
