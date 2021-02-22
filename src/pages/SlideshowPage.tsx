import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Slideshow from '../components/Slideshow/Slideshow';
import Slider from '../components/Slider/Slider';

const SlideshowPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Slideshow />
        <Slider />
      </IonContent>
    </IonPage>
  );
};

export default SlideshowPage;

