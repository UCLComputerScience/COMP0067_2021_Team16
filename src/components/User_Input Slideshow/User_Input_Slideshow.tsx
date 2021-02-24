import './User_Input_Slideshow.css';
import '@ionic/react'
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import React, { useRef } from 'react';
import { InputChangeEventDetail } from '@ionic/core';
import {Selected_Slideshow_Context} from '../../pages/Selected_Slideshow_Context';

interface ContainerProps {
  name: string;
  /*value: string;*/
}

/*(event: any) => setValue(event.target.value)*/

const User_Input_Slideshow: React.FC<ContainerProps> = (props) => {

  let valueRef = useRef <HTMLIonInputElement>(null);
  const Slideshow_current_name = Selected_Slideshow_Context();

  return (
    <IonItem className='ionlabel'>
      <IonLabel position="stacked">{props.name}</IonLabel>
      <IonInput id="input" ref={valueRef} placeholder='Enter name here' value={Slideshow_current_name.name}></IonInput>
    </IonItem>
  );
}

export default User_Input_Slideshow;