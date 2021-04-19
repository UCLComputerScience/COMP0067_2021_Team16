// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is intended to change the name of user-created slideshows.

import './UserInputSlideshow.css';
import '@ionic/react'
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import React, { useRef } from 'react';
import {SelectedSlideshowContext} from '../../contexts/SlideshowContext';

interface ContainerProps {
  name: string;
}


const UserInputSlideshow: React.FC<ContainerProps> = (props) => {
  
  const Slideshow_current_name = SelectedSlideshowContext();

  let valueRef = useRef <HTMLIonInputElement>(null);

  function update_name(){
    Slideshow_current_name.name = valueRef.current.value;
  }

  return (
    <IonItem className='ionlabel'>
      <IonLabel position="stacked">{props.name}</IonLabel>
      <IonInput id="input" ref={valueRef} placeholder='Enter name here' value={Slideshow_current_name.name} onIonChange={update_name}/>
    </IonItem>
  );
}

export default UserInputSlideshow;