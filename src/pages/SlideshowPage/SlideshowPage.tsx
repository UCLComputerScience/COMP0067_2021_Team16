import {
  IonContent,
  IonRow,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
  useIonViewWillEnter,
  useIonViewDidLeave
} from "@ionic/react";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./SlideshowPage.css";
import UnlockSlider from "../../components/Unlockslider/Unlockslider";
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { Insomnia } from '@ionic-native/insomnia';
import { useState } from 'react';
import axios from "axios";
import { isPlatform } from '@ionic/react';

let default_soundtrack_id:number = 1
let selected_soundtrack_id:number = null;
let playing_soundtrack: HTMLAudioElement;

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

function get_soundtrack_url(soundtracks){
  function check_and_loop(id:number){
    for (var i = 0; i < soundtracks.length; i++) {
      if (soundtracks[i].music_id == id){
        return soundtracks[i].music_url;
      }
    }
  }
  
  if (selected_soundtrack_id){
    return check_and_loop(selected_soundtrack_id);  
  }
  else{
    return check_and_loop(default_soundtrack_id);
  }
}


async function start_soundtrack(){
  //just in case the soundtrack is curently already playing, stop it.
  stop_soundtrack(); 
  //get the audio option from settings
  const audio_setting = localStorage.getItem("audio_option");
  //only play background music if the right settings in place
  if (["Music only", "Music and Recordings"].includes(audio_setting)) {
    let soundtracks = await get_music();
    const url = get_soundtrack_url(soundtracks);
    const audio = new Audio(url);
    playing_soundtrack = audio;
    playing_soundtrack.loop = true;
    playing_soundtrack.play();
  }
}

function stop_soundtrack(){
  if (playing_soundtrack) {
    playing_soundtrack.pause();
  }
}

const SlideshowPage: React.FC = () => {
  const[soundtrackUrl,SetSoundtrackURL] = useState<string>(null);
  
  useIonViewWillEnter(()=>{
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
    Insomnia.keepAwake();
    start_soundtrack();
  });
  useIonViewDidLeave(()=>{
    ScreenOrientation.unlock();
    Insomnia.allowSleepAgain();
    stop_soundtrack();
  });
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Slideshow />
      </IonContent>
      <IonFooter className="footer">
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <UnlockSlider/>
        </IonRow>
      </IonFooter>
    </IonPage>
  );
};

export default SlideshowPage;
