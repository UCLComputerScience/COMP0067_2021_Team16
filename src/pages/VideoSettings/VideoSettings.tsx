import { IonRow, IonCol, IonContent, IonFooter, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ShuffleToggleButton from '../../components/ShuffleToggle/ShuffleToggle';
import {SlideDuration, AnimationSpeed} from '../../components/SettingsCard/SettingsCard';
import BackButton from '../../components/BackButton/BackButton';
import ImageBar from '../../components/ImageBar/ImageBar';
import './VideoSettings.css';

const VideoSettings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
              <IonCol className='backbutton'><BackButton ion-no-padding ion-no-margin/></IonCol>
              <IonCol className='title'><IonTitle>Video Settings</IonTitle></IonCol>
              <IonCol></IonCol>
          </IonRow>
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
          <IonItem className="shuffle">
            <ShuffleToggleButton/>
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
