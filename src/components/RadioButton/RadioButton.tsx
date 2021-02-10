import React, { useState } from "react";
import { IonRadioGroup, IonLabel, IonItem, IonRadio } from "@ionic/react";

const RadioButton: React.FC = () => {
  const [selected, setSelected] = useState<string>("mute");
  return (
        <IonRadioGroup
          value={selected}
          onIonChange={(e) => setSelected(e.detail.value)}
        >
          <IonItem>
            <IonLabel>Mute</IonLabel>
            <IonRadio slot="start" value="mute" />
          </IonItem>

          <IonItem>
            <IonLabel>Audio Recording</IonLabel>
            <IonRadio slot="start" value="audio" />
          </IonItem>

          <IonItem>
            <IonLabel>Music</IonLabel>
            <IonRadio slot="start" value="music" />
          </IonItem>
        </IonRadioGroup>
  );
};
export default RadioButton;
