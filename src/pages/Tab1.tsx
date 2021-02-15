import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import BackButton from '../components/BackButton/BackButton';
import InputSettings from '../components/SettingsCard/SettingsCard';
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
      </IonContent>
    </IonPage>
  );
};

export default Tab1;