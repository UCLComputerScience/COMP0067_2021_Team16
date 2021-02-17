import { IonButton, IonContent, IonFooter, IonHeader, IonPage} from '@ionic/react';
import Edit_Bar from "../components/Edit_Bar/Edit_Bar";
import Nav_Bar_New from "../components/Nav_Bar/Nav_Bar_New";

const NewTestPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonButton routerLink='/EditSlideshowsPage'>GO BACK</IonButton>
      </IonContent>
      <IonFooter no-padding no-margin>
        <Nav_Bar_New no-padding no-margin/>
        <Edit_Bar no-padding no-margin />
      </IonFooter>
    </IonPage>
      );
 }

export default NewTestPage;