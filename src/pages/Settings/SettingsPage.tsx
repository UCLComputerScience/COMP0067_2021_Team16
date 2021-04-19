import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import BackButton from "../../components/BackButton/BackButton";
import MusicList from "../../components/MusicList/MusicList";
import RadioButton from "../../components/RadioButton/RadioButton";
import {
  SlideDuration,
  AnimationSpeed,
} from "../../components/SettingsCard/SettingsCard";
import ToggleButton from "../../components/ShuffleToggle/ShuffleToggle";
import "./SettingsPage.css";

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow>
                <IonCol className="backbutton">
                  <BackButton />
                </IonCol>
                <IonCol>
                  <IonTitle class="ion-no-padding">Audio Settings</IonTitle>
                </IonCol>
                <IonCol />
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <RadioButton />
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonTitle class="ion-no-padding">
                    <h4>Select Background Music</h4>
                  </IonTitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <MusicList />
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow className="ion-align-items-center ion-justify-content-center">
                <IonCol>
                  <IonTitle class="ion-no-padding">Video Settings</IonTitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <SlideDuration />
          </IonItem>
          <IonItem>
            <AnimationSpeed />
          </IonItem>
          <IonItem>
            <ToggleButton />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
