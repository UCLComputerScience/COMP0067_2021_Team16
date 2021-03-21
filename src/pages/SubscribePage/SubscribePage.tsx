import {
  IonContent,
  IonPage,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonRow,
  IonCol,
  IonCheckbox,
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
      <IonContent className="ion-padding">
        <IonHeader>
          <IonToolbar>
            <IonRow>
              <BackButton />
              <IonCol className="ion-align-items-center ion-justify-content-center">
                <TitleBar name={"Subscribe"} />
              </IonCol>
            </IonRow>
          </IonToolbar>
        </IonHeader>
        <form
          id="form"
          method="POST"
          action="https://0067team16app.azurewebsites.net/mailinglist/new"
        >
          Please enter your details below to hear more from Cosmic Baby Books.
          <div id="input">
            <IonLabel>First Name</IonLabel>
            <IonInput name="email_first_name" required></IonInput>
            <IonLabel>Last Name</IonLabel>
            <IonInput name="email_last_name" required></IonInput>
            <IonLabel>Email Address</IonLabel>
            <IonInput type="email" name="email_address" required></IonInput>
          </div>
          <IonLabel>
            I would like to receive updates about future products
          </IonLabel>
          <IonCheckbox slot="end" />
          <IonButton type="submit">Submit</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};
export default SubscribePage;
