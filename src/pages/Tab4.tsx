import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ToggleButton from '../components/ShuffleToggle/ShuffleToggle';
import InputSettings from '../components/SettingsCard/SettingsCard';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Video Settings</IonTitle>
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

export default Tab4;
