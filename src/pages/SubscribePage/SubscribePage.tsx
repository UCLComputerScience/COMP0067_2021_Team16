import {
  IonContent,
  IonPage,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonRow,
  IonCol,
  IonGrid,
  IonTitle,
  IonInput,
  IonButton,
} from "@ionic/react";
import React from "react";
import "./SubscribePage.css";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";

const SubscribePage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
                <IonCol className="backbutton">
                  <BackButton/>
                </IonCol>
                <IonCol size="8" className="title">
                  <IonTitle>
                    Subscribe Page
                  </IonTitle>
                </IonCol>
                <IonCol/>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form
          id="form"
          method="POST"
          action="https://0067team16app.azurewebsites.net/mailinglist/new"
        >
          <div>
          Please enter your details below to hear more from Cosmic Baby Books.
          </div>
          
          <div id="input">
            <br/>
            <IonLabel>First Name</IonLabel>
            <IonInput name="email_first_name" required></IonInput>
            <IonLabel>Last Name</IonLabel>
            <IonInput name="email_last_name" required></IonInput>
            <IonLabel>Email Address</IonLabel>
            <IonInput type="email" name="email_address" required></IonInput>
            <br/>
          </div>

          <h3>
            By submitting this form, I consent to receiving updates about future
            products. As a proof of concept, UCL student developers of this
            application are not liable for any data collected.
            <br/><br/>
          </h3>
          <div>
          <IonButton size="large" expand="block" type="submit">Submit</IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};
export default SubscribePage;
