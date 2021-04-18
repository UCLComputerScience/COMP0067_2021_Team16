import React from 'react';
import {IonToggle, IonItem, IonLabel} from '@ionic/react';
import {Settings_Context} from "../../contexts/Settings_Context";

const ToggleButton: React.FC = () => {

  const Settings = Settings_Context();

  return (
        <IonItem>
            <IonLabel>Shuffle</IonLabel>  
            <IonToggle checked={localStorage.getItem("shuffle")==="true"} onIonChange={e=>Settings.set_shuffle(e.detail.checked)}></IonToggle>  
        </IonItem>
  );
}; 

export default ToggleButton;