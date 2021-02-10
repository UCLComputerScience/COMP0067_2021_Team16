import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Slideshow from '../components/Slideshow/Slideshow';
import './SlideshowPage.css';


const SlideshowPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Slideshow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Slideshow</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Slideshow name="Slideshow" />
      </IonContent>
    </IonPage>
  );
};

export default SlideshowPage;
