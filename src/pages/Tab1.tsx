import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackButton from '../components/BackButton/BackButton';
import RateAppButton from '../components/RateApp/RateApp';
import AudioTab from '../components/AudioTab/AudioTab';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <BackButton />
      <IonContent>
        <AudioTab />
      </IonContent>
      <RateAppButton />
    </IonPage>
  );
};

export default Tab1;