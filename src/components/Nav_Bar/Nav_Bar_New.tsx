import { IonButton, IonGrid, IonRow, IonCol, IonIcon} from '@ionic/react';
import "./Nav_Bar_New.css";
import { person, musicalNotes, desktop, informationCircle } from 'ionicons/icons';
//<ion-icon name="add-circle-sharp"></ion-icon>


const Nav_Bar_New: React.FC = () => (
  <IonGrid className="ion-grid">
    <IonRow>
      <IonCol className="ion-column"><IonButton fill="clear" className="ion-button" routerLink='/SubscribePage'><IonIcon icon={person} size="large" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear" routerLink="/AudioSettings"><IonIcon icon={musicalNotes} size="large" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={desktop} size="large" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear" routerLink="/SupportPage"><IonIcon icon={informationCircle} size="large"/></IonButton></IonCol>
    </IonRow>
  </IonGrid>
);

export default Nav_Bar_New;
