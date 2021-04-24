import { IonPage, IonContent } from "@ionic/react";
import React from "react";
import "./Tutorial.css";
import TitleBar from "../../../components/TitleBar/TitleBar";

const Tutorial: React.FC = () => {
  return (
    <IonPage>
      <TitleBar name="Tutorial" />
      <IonContent>
        <h3>
          Once you open the app, a slideshow will start automatically.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/1.png"}
            alt="Tutorial Image 1"
            className = "tutimg"
          />
          <br />
          Slide to unlock the screen.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/2.png"}
            alt="Tutorial Image 2"
            className = "tutimg"
          />
          <br />
          Select the slideshow you want to play next.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/3.png"}
            alt="Tutorial Image 3"
            className = "tutimg"
          />
          <br />
          If you want music or recordings to accompany your slideshow, you can
          choose them here.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/4.png"}
            alt="Tutorial Image 4"
            className = "tutimg"
          />
          <br />
          You can set the duration between each slide. The younger the baby, the
          better is to have longer intervals.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/5.png"}
            alt="Tutorial Image 5"
            className = "tutimg"
          />
          <br />
          You can set the rotation animation speed. For newborns, we recommend
          to leave it at 0.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/6.png"}
            alt="Tutorial Image 6"
            className = "tutimg"
          />
          <br />
          In the support page you can find everything you need to learn more
          about it the app.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/7.png"}
            alt="Tutorial Image 7"
            className = "tutimg"
          />
          <br />
          You can come back to "Tutorial" anytime to check how the app works.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/8.png"}
            alt="Tutorial Image 8"
            className = "tutimg"
          />
          <br />
          In "The Science" we introduce the scientific findings associated with
          using this type of material.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/9.png"}
            alt="Tutorial Image 9"
            className = "tutimg"
          />
          <br />
          The "Cosmic Baby Book" section offers more information on the book
          series this app is based on.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/10.png"}
            alt="Tutorial Image 10"
            className = "tutimg"
          />
          <br />
          You can also learn more about the author and her background.
          <br />
          <img
            src={process.env.PUBLIC_URL + "assets/images/11.png"}
            alt="Tutorial Image 11"
            className = "tutimg"
          />
          <br />
          Finally, don't forget to subscribe to our mailing list to receive the
          latest updates!
          <img
            src={process.env.PUBLIC_URL + "assets/images/12.png"}
            alt="Tutorial Image 12"
            className = "tutimg"
          />
          <br />
        </h3>
        <h2>We hope you and your baby will enjoy this app!</h2>
      </IonContent>
    </IonPage>
  );
};

export default Tutorial;
