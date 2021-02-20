import './Slideshow_Items.css';
import '@ionic/react'
import { IonItem, IonLabel, IonReorder, IonList, IonReorderGroup, IonCheckbox, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import { ItemReorderEventDetail } from '@ionic/core';

interface ContainerProps {
  name: string;
}

const Slideshow_Item: React.FC<ContainerProps> = ({ name }) => (
  <IonItem>
    <IonLabel>
      <IonGrid>
        <IonRow>
          <IonCol><IonCheckbox checked={true}/></IonCol>
          <IonCol className='slidename'>{name}</IonCol>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>
    </IonLabel>
    <IonReorder></IonReorder>
  </IonItem>
  )

const Slideshow_Items: React.FC = () => {

  let myitems = ['one', 'two', 'three', 'four', 'five'];

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    //console.log(myitems);
    //console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    let itemtomove = myitems.splice(event.detail.from, 1)[0];
    myitems.splice(event.detail.to, 0, itemtomove);

    //console.log(myitems)
    event.detail.complete();
  }

  return (
    <IonList>
      <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
        {myitems.map(item => <Slideshow_Item name={item} key={item} />)}
      </IonReorderGroup>
    </IonList >
  );
  
}

export default Slideshow_Items;