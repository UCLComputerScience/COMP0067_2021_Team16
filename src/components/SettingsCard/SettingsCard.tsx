import React, { useState } from 'react';
import {IonInput,IonRange} from '@ionic/react';
import {Settings_Context} from "../../contexts/Settings_Context";

const SlideDuration: React.FC = () => {

  const Settings = Settings_Context();

  return (
  <IonRange 
  pin={true} 
  min={Settings.min_slide_duration} 
  max={Settings.max_slide_duration} 
  value={parseFloat(localStorage.getItem("slide_duration"))} 
  onIonChange={e=>Settings.set_slide_duration(e.detail.value as number)}
  ></IonRange>
  )
};

const AnimationSpeed: React.FC = () => {

  const Settings = Settings_Context();

  return (
    <IonRange 
    pin={true} 
    min={Settings.min_animation_speed} 
    max={Settings.max_animation_speed} 
    value={parseFloat(localStorage.getItem("animation_speed"))} 
    onIonChange={e=>Settings.set_animation_speed(e.detail.value as number)}
    ></IonRange>
  )
};

export {SlideDuration, AnimationSpeed};