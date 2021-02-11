import './Slideshow_Button.css';
import '@ionic/react'
import { IonButton } from '@ionic/react';
import React from 'react';

interface ContainerProps {
  name: string;
}

const Slideshow_Button: React.FC<ContainerProps> = ({ name }) => (
    <IonButton expand='block' fill='outline' size='large' href = '/slideshowpage'>{ name }</IonButton>
);

export default Slideshow_Button;
