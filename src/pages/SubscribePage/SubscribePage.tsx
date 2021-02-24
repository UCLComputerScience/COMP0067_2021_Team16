import React, { useState } from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonPage,
  IonButton
} from "@ionic/react";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";
import User_Input from "../../components/User_Input/User_Input";

const SubscribePage: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackButton />
        <TitleBar name={"Subscribe"} />
        <User_Input name="Email" />
        <IonItem>
          <IonLabel>Consent</IonLabel>
          <IonCheckbox
            checked={checked}
            onIonChange={(e) => setChecked(e.detail.checked)}
          />
        </IonItem>
        <IonButton>Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SubscribePage;
