import React from "react";
import { IonRadioGroup, IonLabel, IonItem, IonRadio } from "@ionic/react";
import {Settings_Context} from "../../contexts/Settings_Context";

const RadioButton: React.FC = () => {

  const Settings = Settings_Context();

  return (
        <IonRadioGroup
          value={localStorage.getItem("audio_option")}
          onIonChange={(e) => Settings.set_audio_option(e.detail.value)}
        >
          <IonItem>
            <IonLabel>{Settings.audio_option_choices[0]}</IonLabel>
            <IonRadio slot="start" value={Settings.audio_option_choices[0]}/>
          </IonItem>

          <IonItem>
            <IonLabel>{Settings.audio_option_choices[1]}</IonLabel>
            <IonRadio slot="start" value={Settings.audio_option_choices[1]}/>
          </IonItem>

          <IonItem>
            <IonLabel>{Settings.audio_option_choices[2]}</IonLabel>
            <IonRadio slot="start" value={Settings.audio_option_choices[2]}/>
          </IonItem>

          <IonItem>
            <IonLabel>{Settings.audio_option_choices[3]}</IonLabel>
            <IonRadio slot="start" value={Settings.audio_option_choices[3]}/>
          </IonItem>
        </IonRadioGroup>
  );
};
export default RadioButton;
