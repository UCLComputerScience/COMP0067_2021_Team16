import { IonContent, IonFooter, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ToggleButton from '../../components/ShuffleToggle/ShuffleToggle';
import {SlideDuration, AnimationSpeed} from '../../components/SettingsCard/SettingsCard';
import BackButton from '../../components/BackButton/BackButton';
import ImageBar from '../../components/ImageBar/ImageBar';
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
      <IonFooter>
          <ImageBar/>
      </IonFooter>
    </IonPage>
  );
};

export default VideoSettings;
