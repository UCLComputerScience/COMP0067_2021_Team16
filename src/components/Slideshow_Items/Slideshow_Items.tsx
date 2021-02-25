import './Slideshow_Items.css';
import '@ionic/react'
import { IonList, IonReorderGroup } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { ItemReorderEventDetail } from '@ionic/core';
import Slideshow_Item from '../Slideshow_Item/Slideshow_Item';
import SlideshowObj from '../../classes/Slideshow_Class';


interface EditMode {
  Editing: boolean;
}

let one = new SlideshowObj('one',0,true);
let two = new SlideshowObj('two',1,true);
let three = new SlideshowObj('three',2,true);
let four = new SlideshowObj('four',3,true);
let five = new SlideshowObj('five',4,true);

let myitems = [one,two,three,four,five];

const Slideshow_Items: React.FC<EditMode> = (props) => {

  const [ReOrderModeDisabled, setReOrderModeDisabled] = useState<boolean>(!props.Editing);

  useEffect(()=>{setReOrderModeDisabled(!props.Editing)},[props.Editing])

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    //console.log(myitems);
    //console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    let itemtomove = myitems.splice(event.detail.from, 1)[0];
    myitems.splice(event.detail.to, 0, itemtomove);
    myitems.forEach(function(item,index){item.position = index});

    //console.log(myitems)
    event.detail.complete();
  }

  return (
    <IonList>
      <IonReorderGroup disabled={ReOrderModeDisabled} onIonItemReorder={doReorder}>
        {myitems.map(item => item.enabled && !props.Editing ? <Slideshow_Item item={item} key={item.name} editing={props.Editing}/>:null)}
        {myitems.map(item => props.Editing ? <Slideshow_Item item={item} key={item.name} editing={props.Editing}/>: null)}
      </IonReorderGroup>
    </IonList >
  );
  
}

export default Slideshow_Items;