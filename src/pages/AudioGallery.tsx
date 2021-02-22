import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackButton from '../components/BackButton/BackButton';
import Audio_Player from '../components/Audio_Player/Audio_Player';

const AudioGallery: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Audio Gallery</IonTitle>
          <BackButton/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        Default voice recordings
        <IonList>
          <IonItem>
             Audio 1 <Audio_Player name="test" />
          </IonItem>
        </IonList>
      </IonContent>
        Default sounds
      <IonContent>
        <IonList>
          <IonItem>
             Audio 2 <Audio_Player name="test" />
          </IonItem>
        </IonList>
      </IonContent>
      <IonContent>
        Uploaded voice recordings
        <IonList>
          <IonItem>
             Audio 3 <Audio_Player name="test" />
          </IonItem>
        </IonList>
      </IonContent>
        Uploaded sounds
      <IonContent>
        <IonList>
          <IonItem>
             Audio 4 <Audio_Player name="test" />
          </IonItem>
          <IonItem>
             Audio 5 <Audio_Player name="test" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AudioGallery;