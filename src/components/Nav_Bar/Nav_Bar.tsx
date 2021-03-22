import { IonButton, IonGrid, IonRow, IonCol, IonIcon} from '@ionic/react';
import "./Nav_Bar.css";
import { mail, musicalNotes, images, informationCircle } from 'ionicons/icons';


const Nav_Bar_New: React.FC = () => (
  <IonGrid className="ion-grid">
    <IonRow>
      <IonCol className="ion-column"><IonButton fill="clear" className="ion-button" routerLink='/SubscribePage'><IonIcon icon={mail} size="large" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear" routerLink="/AudioGallery"><IonIcon icon={musicalNotes} size="large" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear" routerLink='/ImageGallery'><IonIcon icon={images} size="large" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear" routerLink="/SupportPage"><IonIcon icon={informationCircle} size="large"/></IonButton></IonCol>
    </IonRow>
  </IonGrid>
);

export default Nav_Bar_New;