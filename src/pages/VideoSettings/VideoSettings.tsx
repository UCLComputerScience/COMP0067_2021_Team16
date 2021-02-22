import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ToggleButton from '../../components/ShuffleToggle/ShuffleToggle';
import InputSettings from '../../components/SettingsCard/SettingsCard';
import BackButton from '../../components/BackButton/BackButton';
import './VideoSettings.css';

const VideoSettings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Video Settings</IonTitle>
          <BackButton/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <InputSettings />
          </IonItem>
          <IonItem>
            <InputSettings />
          </IonItem>
          <IonItem>
            <ToggleButton />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default VideoSettings;
