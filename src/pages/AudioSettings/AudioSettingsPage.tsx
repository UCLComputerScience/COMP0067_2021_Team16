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
              <IonGrid>
                <IonRow>
                  <IonCol className="backbutton">
                    <BackButton/>
                  </IonCol>
                  <IonCol className="title">
                    <IonTitle>
                      Audio Settings
                    </IonTitle>
                  </IonCol>
                  <IonCol/>
                </IonRow>
              </IonGrid>
            </IonToolbar>
      </IonHeader>
      
      <RadioButton/>
      <IonRow className="ion-align-items-center ion-justify-content-center">
      </IonRow>
      </IonContent>
      <IonToolbar>
              <IonGrid>
                <IonRow>
                  <IonCol>
                  </IonCol>
                  <IonCol className="title">
                    <IonTitle>
                      Video Settings
                    </IonTitle>
                  </IonCol>
                  <IonCol/>
                </IonRow>
              </IonGrid>
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
