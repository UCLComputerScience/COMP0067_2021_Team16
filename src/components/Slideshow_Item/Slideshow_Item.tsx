import './Slideshow_Item.css';
import '@ionic/react'
import { IonItem, IonLabel, IonReorder } from '@ionic/react';
import React from 'react';

interface ContainerProps {
  name: string;
}

const Slideshow_Button: React.FC<ContainerProps> = ({ name }) => (
  <IonItem><IonLabel>{name}</IonLabel><IonReorder></IonReorder></IonItem>
);

export default Slideshow_Button;