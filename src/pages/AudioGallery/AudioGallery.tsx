// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This audio gallery is intended to store audio files recorded by the user.

import { IonContent, IonHeader, IonItem, IonList, IonPage, IonRow, IonCol, IonToolbar } from '@ionic/react';
import TitleBar from "../../components/TitleBar/TitleBar";
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';

const AudioGallery: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
            <IonRow>
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
             Audio 1 <AudioPlayer name="test" />
          </IonItem>
        </IonList>
      </IonContent>
        Default sounds
      <IonContent>
        <IonList>
          <IonItem>
             Audio 2 <AudioPlayer name="test" />
          </IonItem>
        </IonList>
      </IonContent>
      <IonContent>
        Uploaded voice recordings
        <IonList>
          <IonItem>
             Audio 3 <AudioPlayer name="test" />
          </IonItem>
        </IonList>
      </IonContent>
        Uploaded sounds
      <IonContent>
        <IonList>
          <IonItem>
             Audio 4 <AudioPlayer name="test" />
          </IonItem>
          <IonItem>
             Audio 5 <AudioPlayer name="test" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AudioGallery;