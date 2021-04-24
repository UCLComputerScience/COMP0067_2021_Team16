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
import TitleBar from "../../components/TitleBar/TitleBar";
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
        <TitleBar name="Settings" />
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow className="ion-align-items-center ion-justify-content-center">
                <IonCol>
                  <IonTitle class="settings-individual-titles">Audio Settings</IonTitle>
                </IonCol>
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
                  <IonTitle class="settings-individual-titles">Background Music</IonTitle>
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
                  <IonTitle class="settings-individual-titles">Video Settings</IonTitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonList lines="none">
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
