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
import "./SlideshowPage.css";
import { KKSliderUnlock } from 'kk-slider-unlock';
import UnlockSlider from "../../components/Unlockslider/Unlockslider";


const SlideshowPage: React.FC = () => {
  
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Slideshow />
      </IonContent>
      <IonFooter>
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <UnlockSlider/>
        </IonRow>
        {/*<KKSliderUnlock backColor="#0EBFE9" sliderWidth={300}>Slide to Unlock</KKSliderUnlock>*/}
        {/*<Slider/>*/}
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonButton className="ion-align-items-center ion-justify-content-center" routerLink="/SelectionPage">
            Press to Unlock
          </IonButton>
        </IonRow>
      </IonFooter>
    </IonPage>
  );
};

export default SlideshowPage;
