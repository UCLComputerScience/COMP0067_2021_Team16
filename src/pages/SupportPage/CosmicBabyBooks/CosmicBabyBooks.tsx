import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonBackButton,
  IonText,
  IonContent,
} from "@ionic/react";
import React from "react";
import "./CosmicBabyBooks.css";

const CosmicBabyBooks: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonBackButton />
                </IonCol>
                <IonCol size="8">
                  <IonTitle class="ion-no-padding">Cosmic Baby Books</IonTitle>
                </IonCol>
                <IonCol />
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonText>
          <h4>
            This app is based on the Best Sellers and most gifted books for
            newborns and infants on Amazon UK. <br /> Books are sold in Europe,
            US, Canada, Australia, Japan and India. Images and book concepts are
            created and hand drawn by Dr Iya Whiteley. Iya was inspired by her
            own children to introduce newborn babies to our beautiful Earth.{" "}
            <br />
            Images represent the intricate beauty of our natural world, our
            human scientific, architectural and technological achievements and
            translated them into intricate mathematical design in babies'
            perceptual language, suitable from birth to 100 years old. <br />{" "}
            Grandparents love reading these books too!
          </h4>
        </IonText>
        <IonGrid className="grid">
          <IonRow>
            <IonCol>
              <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/amazon.png"}
                  alt="Buy it on Amazon!"
                />
              </a>
            </IonCol>
            <IonCol>
              <a href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/images/amazon_best_seller.png"
                  }
                  alt="Amazon Best Seller"
                />
              </a>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="video-container">
          <iframe
            title="YouTube"
            src="https://www.youtube.com/embed/ylrelG3QQ4s"
          ></iframe>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CosmicBabyBooks;
