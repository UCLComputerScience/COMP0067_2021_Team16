import { IonButton, IonGrid, IonRow, IonCol, IonIcon} from '@ionic/react';
import {saveOutline, trashOutline} from 'ionicons/icons';


const RecordAudio: React.FC = () => (
  <IonGrid className="ion-grid">
    <IonRow>
      <IonCol className="ion-column"><IonButton fill="clear" className="ion-button"><IonIcon icon={saveOutline} size="large" /></IonButton></IonCol>
      <IonCol className="ion-column"><IonButton fill="clear" ><IonIcon icon={trashOutline} size="large" /></IonButton></IonCol>
    </IonRow>
  </IonGrid>
);

export default RecordAudio;