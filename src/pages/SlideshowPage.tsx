import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import Slideshow from '../components/Slideshow/Slideshow';
import Slider from '../components/Slider/Slider';

const SlideshowPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Slideshow />
        <Slider />
        <IonButton routerLink='/SelectionPage'>press to unlock</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SlideshowPage;
