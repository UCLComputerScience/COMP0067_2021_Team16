import { IonButton, IonGrid, IonRow, IonCol, IonIcon,IonAlert,IonActionSheet} from '@ionic/react';
import "./Edit_Bar.css";
import { addCircleSharp, trash, checkmarkCircle, checkmarkCircleOutline, micSharp, images} from 'ionicons/icons';
import React, { useState } from 'react';


const Edit_Bar: React.FC = () => {
  const [deletealert, setDeleteAlert] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);

  return (
    <IonGrid className="ion-grid">
      <IonRow>
        <IonCol className="ion-column"><IonButton fill="clear" className="ion-button"><IonIcon icon={checkmarkCircle} size="medium" /></IonButton></IonCol>
        <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={checkmarkCircleOutline} size="medium" /></IonButton></IonCol>
        <IonCol className="ion-column"><IonButton fill="clear" onClick={() => setShowAddMenu(true)}><IonIcon icon={addCircleSharp} size="medium" /></IonButton></IonCol>
        <IonCol className="ion-column"><IonButton fill="clear"><IonIcon icon={micSharp} size="medium" /></IonButton></IonCol>
        <IonCol className="ion-column"><IonButton fill="clear" onClick={() => setDeleteAlert(true)}><IonIcon icon={trash} size="medium" /></IonButton></IonCol>
      </IonRow>
      <IonAlert
        isOpen={deletealert}
        onDidDismiss={() => setDeleteAlert(false)}
        header={'Delete'}
        message={'Are you sure you want to delete these folders from you slideshow?'}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: blah => {
              //console.log('Confirm Cancel: blah');
            }
          },
          {
            text: 'Okay',
            handler: () => {
              //console.log('Confirm Okay');
            }
          }
        ]}
      />
      <IonActionSheet
        isOpen={showAddMenu}
        onDidDismiss={() => setShowAddMenu(false)}
        header = 'Add images'
        cssClass='my-custom-class'
        buttons={[
         {
          text: 'Add from Gallery',
          icon: images,
          handler: () => {
            //console.log('Opening Gallery');
          }
        }]}
      >
      </IonActionSheet>
    </IonGrid>
  );
}

export default Edit_Bar;
