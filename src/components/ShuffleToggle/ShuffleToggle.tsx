import React from 'react';
import {IonToggle, IonItem, IonLabel} from '@ionic/react';
import {SettingsContext} from "../../contexts/SettingsContext";

const ToggleButton: React.FC = () => {

  const Settings = SettingsContext();

  return (
        <IonItem>
            <IonLabel>Shuffle</IonLabel>  
            <IonToggle checked={localStorage.getItem("shuffle")==="true"} onIonChange={e=>Settings.set_shuffle(e.detail.checked)}></IonToggle>  
        </IonItem>
  );
}; 

export default ToggleButton;