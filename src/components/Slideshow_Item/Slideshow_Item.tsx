import './Slideshow_Item.css';
import '@ionic/react'
import { IonItem, IonLabel, IonReorder, IonList, IonReorderGroup, IonCheckbox, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { ItemReorderEventDetail } from '@ionic/core';

interface ContainerProps {
  name: string;
  editing: boolean;
}

const Slideshow_Item: React.FC<ContainerProps> = ({ name, editing }) => (
  <IonItem routerLink='/slideshowpage'>
    <IonLabel>
      <IonGrid>
        <IonRow>
          <IonCol className='checkcontainer'>{editing ? <IonCheckbox checked={true} className='checkbox'/>: null}</IonCol>
          <IonCol className='slidename'>{name}</IonCol>
          <IonCol className='reordergrabber'>{editing ? <IonReorder className='grabicon'/>: null}</IonCol>
        </IonRow>
      </IonGrid>
    </IonLabel>  
  </IonItem>
)

export default Slideshow_Item;