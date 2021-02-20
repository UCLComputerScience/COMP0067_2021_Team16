import './Slideshow_Items.css';
import '@ionic/react'
import { IonItem, IonLabel, IonReorder, IonList, IonReorderGroup, IonCheckbox, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { ItemReorderEventDetail } from '@ionic/core';
import Slideshow_Item from '../Slideshow_Item/Slideshow_Item';


interface EditMode {
  Editing: boolean;
}

const Slideshow_Items: React.FC<EditMode> = (props) => {

  let myitems = ['one', 'two', 'three', 'four', 'five'];
  const [ReOrderModeDisabled, setReOrderModeDisabled] = useState<boolean>(!props.Editing);

  useEffect(()=>{setReOrderModeDisabled(!props.Editing)},[props.Editing])

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
      <IonReorderGroup disabled={ReOrderModeDisabled} onIonItemReorder={doReorder}>
        {myitems.map(item => <Slideshow_Item name={item} key={item} editing={props.Editing}/>)}
      </IonReorderGroup>
    </IonList >
  );
  
}

export default Slideshow_Items;