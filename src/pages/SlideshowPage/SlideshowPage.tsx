import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFooter } from '@ionic/react';
import Slideshow from '../../components/Slideshow/Slideshow';
import Slider from '../../components/Slider/Slider';

const SlideshowPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Slideshow />
      </IonContent>
      <IonFooter>
        <Slider />
        <IonButton routerLink='/SelectionPage'>press to unlock</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default SlideshowPage;
