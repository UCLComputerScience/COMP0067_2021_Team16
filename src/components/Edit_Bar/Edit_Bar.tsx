import { IonButton, IonGrid, IonRow, IonCol, IonIcon} from '@ionic/react';
import "./Edit_Bar.css";
import { addCircleSharp, trash, checkmarkCircle, checkmarkCircleOutline,micSharp} from 'ionicons/icons';
//<ion-icon name="add-circle-sharp"></ion-icon>


const Edit_Bar: React.FC = () => (
  <IonGrid className="ion-grid">
    <IonRow>
      <IonCol className="ion-column"><IonButton fill="clear" className="ion-button"><IonIcon icon={checkmarkCircle} size="large" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={checkmarkCircleOutline} size="large"/></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={addCircleSharp} size="large"/></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={micSharp} size="large"/></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={trash} size="large"/></IonButton></IonCol>
    </IonRow>
  </IonGrid>
);

export default Edit_Bar;
