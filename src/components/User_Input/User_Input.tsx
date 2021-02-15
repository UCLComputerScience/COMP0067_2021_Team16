import './User_Input.css';
import '@ionic/react'
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import React, { useRef } from 'react';
import { InputChangeEventDetail } from '@ionic/core';

interface ContainerProps {
  name: string;
  /*value: string;*/
}

/*(event: any) => setValue(event.target.value)*/

const User_Input: React.FC<ContainerProps> = ({ name }) => {

  let valueRef = useRef <HTMLIonInputElement>(null);

  return (
    <IonItem>
      <IonLabel position="stacked">{name}</IonLabel>
      <IonInput id="input" ref={valueRef}> </IonInput>
    </IonItem>
  );
}

export default User_Input;
