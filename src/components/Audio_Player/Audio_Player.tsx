import './Audio_Player.css';
import '@ionic/react'
import { IonItem, IonLabel, IonReorder } from '@ionic/react';
import React from 'react';
import { Howl, Howler } from 'howler';

let player = new Howl({ src: ['../Audio/background_sounds.mp3'] });

interface ContainerProps {
  name: string;
}

const Audio_Player: React.FC<ContainerProps> = ({ name }) => (<div></div>);

export default Audio_Player;