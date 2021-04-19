import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonTitle,
  IonBackButton,
} from "@ionic/react";
import React from "react";
import "./Tutorial.css";

const Tutorial: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol className="backbutton">
                <IonBackButton />
              </IonCol>
              <IonCol>
                <IonTitle class="ion-no-padding">Tutorial</IonTitle>
              </IonCol>
              <IonCol />
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h3>
          Once you open the app, a slideshow will start automatically.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          Slide to unlock the screen.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          Select the slideshow you want to play next.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          If you want music or recordings to accompany your slideshow, you can
          choose them here.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          You can set the duration between each slide. The younger the baby, the
          better is to have longer intervals.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          You can set the rotation animation speed. For newborns, we recommend
          to leave it at 0.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          In the support page you can find everything you need to learn more
          about it the app.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          You can come back to "Tutorial" anytime to check how the app works.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          In "The Science" we introduce the scientific findings associated with
          using this type of material.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          The "Cosmic Baby Book" section offers more information on the book
          series this app is based on.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          You can also learn more about the author and her background.
          <br />
          <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/amazon_best_seller.png"
              }
              alt="Amazon Best Seller"
            />
          </a>
          <br />
          Finally, don't forget to subscribe to our mailing list to receive the
          latest updates!
        </h3>
        <h2>We hope you and your baby will enjoy this app!</h2>
      </IonContent>
    </IonPage>
  );
};

export default Tutorial;
