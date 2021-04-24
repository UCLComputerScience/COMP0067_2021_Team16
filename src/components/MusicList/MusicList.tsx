import React, { useState } from "react";
import {
  IonRadioGroup,
  IonLabel,
  IonItem,
  IonRadio,
  useIonViewWillEnter,
} from "@ionic/react";
import axios from "axios";
import {SettingsContext} from "../../contexts/SettingsContext";

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

  const Settings = SettingsContext();
  
  useIonViewWillEnter(() => {
    setItems([]);
    load_music(setItems);
  });

  return (
    <IonRadioGroup value={localStorage.getItem("background_soundtrack")} onIonChange={(e) => Settings.set_background_soundtrack(e.detail.value)}>
      {items.map((item, i) => (
        <IonItem key={i} lines="none">
          <IonLabel>
            {`${item.music_name
              .replace(".mp3", "")
              .replace(/\b\w/g, (c) => c.toUpperCase())} Music`}
          </IonLabel>
          <IonRadio slot="start" value={item.music_id.toString()}/>
        </IonItem>
      ))}
    </IonRadioGroup>
  );
};
export default MusicList;
