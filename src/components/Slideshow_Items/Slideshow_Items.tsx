import './Slideshow_Items.css';
import '@ionic/react'
import { IonList, IonReorderGroup } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { ItemReorderEventDetail } from '@ionic/core';
import Slideshow_Item from '../Slideshow_Item/Slideshow_Item';
import {Access_Slideshow_List} from '../../contexts/Slideshow_Context';
import {get_slideshows} from '../../contexts/Database_Context';


interface EditMode {
  Editing: boolean;
}

const Slideshow_Items: React.FC<EditMode> = (props) => {

  const [myitems,setmyitems] = useState([]);

  const [ReOrderModeDisabled, setReOrderModeDisabled] = useState<boolean>(!props.Editing);

  //setmyitems(Access_Slideshow_List());

  useEffect(()=>{setReOrderModeDisabled(!props.Editing)},[props.Editing]);
  
  useEffect(()=>{
    async function load_slideshows(){
      setmyitems(await get_slideshows())
      //setmyitems(Access_Slideshow_List());
    }
    load_slideshows();
  },[]);

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {

    let itemtomove = myitems.splice(event.detail.from, 1)[0];
    myitems.splice(event.detail.to, 0, itemtomove);
    myitems.forEach(function(item,index){item.position = index});

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