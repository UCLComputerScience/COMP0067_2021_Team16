import './User_Input_Slideshow.css';
import '@ionic/react'
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import React, { useRef } from 'react';
import {Selected_Slideshow_Context} from '../../contexts/Slideshow_Context';

interface ContainerProps {
  name: string;
}


const User_Input_Slideshow: React.FC<ContainerProps> = (props) => {
  
  const Slideshow_current_name = Selected_Slideshow_Context();

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

export default User_Input_Slideshow;