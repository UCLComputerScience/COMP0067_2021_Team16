import {
  IonContent,
  IonHeader,
  IonRow,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
} from "@ionic/react";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./SlideshowPage.css";
import UnlockSlider from "../../components/Unlockslider/Unlockslider";


const SlideshowPage: React.FC = () => {
  
  
  return (
    <IonPage className="page">
      <IonContent fullscreen>
        <Slideshow />
      </IonContent>
      <IonFooter className="footer">
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <UnlockSlider/>
        </IonRow>
      </IonFooter>
    </IonPage>
  );
};

export default SlideshowPage;
