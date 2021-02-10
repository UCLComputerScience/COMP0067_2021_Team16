import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Slideshow from '../components/Slideshow/Slideshow';
import Copyright from '../components/Copyright/Copyright';
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
        <Copyright Copyright="© 2016 Dr Iya Whiteley" />
      </IonContent>
    </IonPage>
  );
};

export default SlideshowPage;
