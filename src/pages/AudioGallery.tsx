import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackButton from '../components/BackButton/BackButton';
import Audio_Player from '../components/Audio_Player/Audio_Player';

import './AudioGallery.css';

const AudioGallery: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Audio Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <Audio_Player name="test" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AudioGallery;
