import { IonContent, IonPage } from '@ionic/react';
import BackButton from '../components/BackButton/BackButton';
import TitleBar from '../components/TitleBar/TitleBar';


const SlideshowPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackButton />
        <TitleBar name={"Audio Settings"}/>
      </IonContent>
    </IonPage>
  );
};

export default SlideshowPage;
