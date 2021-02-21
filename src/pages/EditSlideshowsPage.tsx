import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonReorderGroup, IonButton} from '@ionic/react';
import Audio_Player from '../components/Audio_Player/Audio_Player';
import User_Input from '../components/User_Input/User_Input';
import React from 'react';

const EditSlideshowsPage: React.FC = () => (
  < IonPage >
        <IonHeader>
            <IonToolbar>
              <IonTitle>Edit Slideshows</IonTitle>
            </IonToolbar>
        </IonHeader>
    <IonContent fullscreen>
      <Audio_Player name="test" />
      <User_Input name="Enter Slideshow name here" />
      <IonButton routerLink='/NewTestPage'>Open New page</IonButton>
    </IonContent >
    </IonPage >
);

export default EditSlideshowsPage;