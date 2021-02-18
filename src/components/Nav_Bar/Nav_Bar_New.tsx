import { IonButton, IonGrid, IonRow, IonCol, IonIcon} from '@ionic/react';
import "./Nav_Bar_New.css";
import { person, musicalNotes, desktop, informationCircle } from 'ionicons/icons';
//<ion-icon name="add-circle-sharp"></ion-icon>


const Nav_Bar_New: React.FC = () => (
  <IonGrid className="ion-grid">
    <IonRow>
      <IonCol className="ion-column"><IonButton fill="clear" className="ion-button"><IonIcon icon={person} size="medium" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={musicalNotes} size="medium" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={desktop} size="medium" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={informationCircle} size="medium" /></IonButton></IonCol>
    </IonRow>
  </IonGrid>
);

export default Nav_Bar_New;
