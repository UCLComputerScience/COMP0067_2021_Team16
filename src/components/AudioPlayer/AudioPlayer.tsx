// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is to be used in the audio gallery.

import './AudioPlayer.css';
import '@ionic/react';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

let audiopath = "https://www.kozco.com/tech/LRMonoPhase4.mp3";

interface ContainerProps {
  name: string;
}

const AudioPlayer: React.FC<ContainerProps> = ({ name }) => (<ReactAudioPlayer src={audiopath} controls loop />);

export default AudioPlayer;