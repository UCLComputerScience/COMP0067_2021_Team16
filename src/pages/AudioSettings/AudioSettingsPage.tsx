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
import "./AudioSettingsPage.css";

const AudioSettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow>
                <IonCol className="backbutton">
                  <BackButton />
                </IonCol>
                <IonCol size="8" className="title">
                  <IonTitle>Audio Settings</IonTitle>
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
                  <IonTitle>
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
              <IonRow>
                <IonCol size="8" className="title">
                  <IonTitle>Video Settings</IonTitle>
                </IonCol>
                <IonCol />
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

export default AudioSettingsPage;
