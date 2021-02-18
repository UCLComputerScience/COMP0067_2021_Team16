import React, { useState } from 'react';
import {IonToggle, IonItem, IonLabel} from '@ionic/react';

const ToggleButton: React.FC = () => {
  return (
        <IonItem>
            <IonLabel>Shuffle</IonLabel>  
            <IonToggle></IonToggle>  
        </IonItem>
  );
}; 

export default ToggleButton;