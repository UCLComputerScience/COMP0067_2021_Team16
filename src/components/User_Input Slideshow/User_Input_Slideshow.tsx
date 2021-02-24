import './User_Input_Slideshow.css';
import '@ionic/react'
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import React, { useRef } from 'react';
import { InputChangeEventDetail } from '@ionic/core';

interface ContainerProps {
  name: string;
  Slideshow?: object;
  /*value: string;*/
}

/*(event: any) => setValue(event.target.value)*/

const User_Input_Slideshow: React.FC<ContainerProps> = (props) => {

  let valueRef = useRef <HTMLIonInputElement>(null);

  return (
    <IonItem className='ionlabel'>
      <IonLabel position="stacked">{props.name}</IonLabel>
      <IonInput id="input" ref={valueRef}> </IonInput>
    </IonItem>
  );
}

export default User_Input_Slideshow;
