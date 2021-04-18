import React, { useState } from "react";
import {
  IonRadioGroup,
  IonLabel,
  IonItem,
  IonRadio,
  useIonViewWillEnter,
} from "@ionic/react";
import axios from "axios";
// import {Settings_Context} from "../../contexts/Settings_Context";

async function get_music() {
  try {
    const url = "https://0067team16app.azurewebsites.net/music/all";
    let response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log("Error getting soundtracks: ", e);
    return [];
  }
}

async function load_music(setItems) {
  let music = await get_music();
  setItems(music);
}

const MusicList: React.FC = () => {
  const [items, setItems] = useState([]);
  useIonViewWillEnter(() => {
    setItems([]);
    load_music(setItems);
  });

  // const Settings = Settings_Context();

  return (
    <IonRadioGroup
    value=""
    // value={localStorage.getItem("audio_option")}
    // onIonChange={(e) => Settings.set_audio_option(e.detail.value)}
    >
      {items.map((item, i) => (
        <IonItem>
          <IonLabel>
            {`${item.music_name
              .replace(".mp3", "")
              .replace(/\b\w/g, (c) => c.toUpperCase())} Music`}
          </IonLabel>
          <IonRadio 
          slot="start" 
          // value={Settings.audio_option_choices[0]} 
          />
        </IonItem>
      ))}
    </IonRadioGroup>
  );
};
export default MusicList;
