import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonToolbar,
  IonHeader,
  IonRow,
  IonCol,
} from "@ionic/react";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";
import RadioButton from "../../components/RadioButton/RadioButton";
import {SlideDuration, AnimationSpeed} from '../../components/SettingsCard/SettingsCard';
import ToggleButton from '../../components/ShuffleToggle/ShuffleToggle';

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
        <RadioButton/>
        <IonRow className="ion-align-items-center ion-justify-content-center">
        </IonRow>
      </IonContent>
        <IonToolbar>
          <IonRow>
              <IonCol className='ion-align-items-center ion-justify-content-center'>
                <TitleBar name={"Video Settings"} />
              </IonCol>
          </IonRow>
        </IonToolbar>
      <IonContent>
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
