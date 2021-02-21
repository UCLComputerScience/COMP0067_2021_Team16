import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ToggleButton from '../components/ShuffleToggle/ShuffleToggle';
import InputSettings from '../components/SettingsCard/SettingsCard';
import BackButton from '../components/BackButton/BackButton';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <BackButton />
        <IonToolbar>
          <IonTitle>Video Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Video Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
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

export default Tab3;
