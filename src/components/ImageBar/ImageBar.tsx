// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is to be used to navigate to the image gallery.

import { IonButton, IonGrid, IonRow, IonCol, IonIcon} from '@ionic/react';
import {imagesOutline} from 'ionicons/icons';


const ImageBar: React.FC = () => (
    <IonGrid className="ion-grid">
      <IonRow>
        <IonCol className="ion-column"><IonButton fill="clear" className="ion-button" routerLink='/ImageGallery'><IonIcon icon={imagesOutline} size="large" /></IonButton></IonCol>
      </IonRow>
    </IonGrid>
  );

export default ImageBar;
