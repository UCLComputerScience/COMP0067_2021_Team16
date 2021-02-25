import {
  IonContent,
  IonPage,
  IonButton,
  IonToolbar,
  IonHeader,
  IonRow,
  IonCol,
} from "@ionic/react";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";
import RadioButton from "../../components/RadioButton/RadioButton";

const AudioSettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonRow>
              <BackButton />
              <IonCol className="ion-align-items-center ion-justify-content-center">
                <TitleBar name={"Audio Settings"} />
              </IonCol>
            </IonRow>
          </IonToolbar>
        </IonHeader>
        <RadioButton />
        <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonButton
          className="ion-align-items-center ion-justify-content-center"
          routerLink="/AudioGallery"
        >
          See Audio Gallery
        </IonButton>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default AudioSettingsPage;
