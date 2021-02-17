import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import BackButton from '../components/BackButton/BackButton';
import InputSettings from '../components/SettingsCard/SettingsCard';
import RateAppButton from '../components/RateApp/RateApp';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <BackButton/>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Go Team 16!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <InputSettings/>
        <RateAppButton/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;