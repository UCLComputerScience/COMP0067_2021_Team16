// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This audio gallery is intended to store audio files recorded by the user.

import { IonContent, IonHeader, IonItem, IonList, IonPage, IonRow, IonCol, IonToolbar } from '@ionic/react';
import BackButton from '../../components/BackButton/BackButton';
import TitleBar from "../../components/TitleBar/TitleBar";
import Audio_Player from '../../components/Audio_Player/Audio_Player';

const AudioGallery: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
            <IonRow>
              <BackButton />
              <IonCol className="ion-align-items-center ion-justify-content-center">
                <TitleBar name={"Support"} />
              </IonCol>
            </IonRow>
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