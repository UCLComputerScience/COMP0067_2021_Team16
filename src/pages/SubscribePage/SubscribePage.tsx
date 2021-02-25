import React, { useState } from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonPage,
  IonButton,
  IonHeader,
  IonRow,
  IonToolbar,
  IonCol,
} from "@ionic/react";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";
import User_Input from "../../components/User_Input/User_Input";
import "./SubscribePage.css";

const SubscribePage: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonContent fullscreen>
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
        <p>
          Please enter your email below to hear more from Cosmic Baby Books.
        </p>
        <User_Input name="Email" />
        <IonItem>
          <IonLabel>
            I would like to receive updates about future products
          </IonLabel>
          <IonCheckbox
            checked={checked}
            onIonChange={(e) => setChecked(e.detail.checked)}
          />
        </IonItem>
        <IonRow className="space ion-align-items-center ion-justify-content-center">
          <IonButton>Submit</IonButton>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SubscribePage;
