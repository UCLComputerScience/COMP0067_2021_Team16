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
import Slider from "../../components/Slider/Slider";

const SlideshowPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Slideshow />
      </IonContent>
      <IonFooter>
        <Slider />
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonButton
            className="ion-align-items-center ion-justify-content-center"
            routerLink="/SelectionPage"
          >
            press to unlock
          </IonButton>
        </IonRow>
      </IonFooter>
    </IonPage>
  );
};

export default SlideshowPage;
