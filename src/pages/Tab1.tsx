import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackButton from '../components/BackButton/BackButton';
import InputSettings from '../components/SettingsCard/SettingsCard';
import RateAppButton from '../components/RateApp/RateApp';
import ToggleButton from '../components/ShuffleToggle/ShuffleToggle';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <BackButton />
      <IonContent>
        <InputSettings />
        <ToggleButton />
      </IonContent>
      <RateAppButton />
    </IonPage>
  );
};

export default Tab1;