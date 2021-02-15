import { IonButton, IonFooter, IonPage, IonToolbar, IonButtons, IonTabBar} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

const NewTestPage: React.FC = () => {
  return (
    <IonPage>
      <IonButton routerLink='/EditSlideshowsPage'>GO BACK</IonButton>
      <IonFooter>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="solid" size="large">Check All</IonButton>
            <IonButton fill="solid" size="large">Uncheck All</IonButton>
            <IonButton fill="solid" size="large">Add Images</IonButton>
            <IonButton fill="solid" size="large">Record</IonButton>
            <IonButton fill="solid" size="large">Delete</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
      );
 }

export default NewTestPage;