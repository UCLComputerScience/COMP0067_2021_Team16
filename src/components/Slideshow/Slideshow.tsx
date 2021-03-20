import "./Slideshow.css";
import { IonGrid, IonRow, IonSlides, IonSlide, IonImg } from "@ionic/react";
import axios from "axios";
import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import Copyright from "../Copyright/Copyright";
import {Settings_Context} from "../../contexts/Settings_Context";

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

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: true,
};

const Slideshow: React.FC = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    sendGetRequest().then((data) => setItems(data));
  }, []);

  return (
    <IonSlides pager={false} options={slideOpts}>
      {items.map((item, i) => (
        <IonSlide key={i}>
          <IonGrid>
            <IonRow className="titlerow">
              <TitleBar name={item.image_name} />
            </IonRow>
            <IonRow className="imagerow">
              <IonImg key={i} src={item.image_url} className="spinner rotate" />
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
