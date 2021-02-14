import './Audio_Player.css';
import '@ionic/react';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

let audiopath = "https://www.kozco.com/tech/LRMonoPhase4.mp3";

interface ContainerProps {
  name: string;
}

const Audio_Player: React.FC<ContainerProps> = ({ name }) => (<ReactAudioPlayer src={audiopath} controls loop />);

export default Audio_Player;