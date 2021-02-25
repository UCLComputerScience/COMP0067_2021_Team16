import React, { useState } from 'react';
import {IonInput} from '@ionic/react';

const SlideDuration: React.FC = () => {

  const [number, setNumber] = useState<number>();

  return (
  <IonInput required min="0" max="20" type="number" value={number} placeholder="Set slide duration (0 - 20s)" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
  )
};

const AnimationSpeed: React.FC = () => {

  const [number, setNumber] = useState<number>();

  return (
  <IonInput required min="0" max="1.5" type="number" value={number} placeholder="Set animation speed (0 - 1.5x)" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
  )
};

export {SlideDuration, AnimationSpeed};