import React from "react";
import { IonRadioGroup, IonLabel, IonItem, IonRadio } from "@ionic/react";
import { SettingsContext } from "../../contexts/SettingsContext";

const RadioButton: React.FC = () => {
  const Settings = SettingsContext();

  return (
    <IonRadioGroup
      value={localStorage.getItem("audio_option")}
      onIonChange={(e) => Settings.set_audio_option(e.detail.value)}
      lines="none"
    >
      <IonItem lines="none">
        <IonLabel>{Settings.audio_option_choices[0]}</IonLabel>
        <IonRadio slot="start" value={Settings.audio_option_choices[0]} />
      </IonItem>

      <IonItem lines="none">
        <IonLabel>{Settings.audio_option_choices[1]}</IonLabel>
        <IonRadio slot="start" value={Settings.audio_option_choices[1]} />
      </IonItem>

      <IonItem lines="none">
        <IonLabel>{Settings.audio_option_choices[2]}</IonLabel>
        <IonRadio slot="start" value={Settings.audio_option_choices[2]} />
      </IonItem>

      <IonItem lines="none">
        <IonLabel>{Settings.audio_option_choices[3]}</IonLabel>
        <IonRadio slot="start" value={Settings.audio_option_choices[3]} />
      </IonItem>
    </IonRadioGroup>
  );
};
export default RadioButton;
