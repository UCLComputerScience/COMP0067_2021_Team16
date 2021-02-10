import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Slideshow from '../components/Slideshow/Slideshow';
import './SlideshowPage.css';
import EditButton from '../components/EditButton/EditButton';
import AddSlideshowButton from '../components/AddSlideshowButton/AddSlideshowButton';
import RadioButton from '../components/RadioButton/RadioButton';
import Checkbox from '../components/Checkbox/Checkbox';
import Slider from '../components/Slider/Slider';

const SlideshowPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Slideshow />
      </IonContent>
    </IonPage>
  );
};

export default SlideshowPage;
