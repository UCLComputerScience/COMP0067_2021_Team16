import { IonButton, IonFooter, IonPage, IonTabs, IonToolbar, IonRouterOutlet, IonTabBar ,IonTabButton} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

const NewTestPage: React.FC = () => {
  return (
    <IonPage>
      <IonButton href='/EditSlideshowsPage'>GO BACK</IonButton>
    </IonPage>
      );
 }

export default NewTestPage;