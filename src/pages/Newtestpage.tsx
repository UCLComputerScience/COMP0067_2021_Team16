import { IonButton, IonFooter, IonPage} from '@ionic/react';
import Edit_Bar from "../components/Edit_Bar/Edit_Bar";
import Nav_Bar_New from "../components/Nav_Bar/Nav_Bar_New";

const NewTestPage: React.FC = () => {
  return (
    <IonPage>
      <IonButton routerLink='/EditSlideshowsPage'>GO BACK</IonButton>
      <IonFooter no-padding no-margin>
        <Nav_Bar_New no-padding no-margin/>
        <Edit_Bar no-padding no-margin />
      </IonFooter>
    </IonPage>
      );
 }

export default NewTestPage;