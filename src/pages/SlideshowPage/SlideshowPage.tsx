import {
  IonContent,
  IonHeader,
  IonRow,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
  useIonViewWillEnter,
  useIonViewDidLeave
} from "@ionic/react";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./SlideshowPage.css";
import UnlockSlider from "../../components/Unlockslider/Unlockslider";
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { Insomnia } from '@ionic-native/insomnia';

const SlideshowPage: React.FC = () => {
  
  useIonViewWillEnter(()=>{
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
    Insomnia.keepAwake();
  });
  useIonViewDidLeave(()=>{
    ScreenOrientation.unlock();
    Insomnia.allowSleepAgain();
  });
  
  return (
    <IonPage className="content_background">
      <IonContent fullscreen className="content_background">
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
