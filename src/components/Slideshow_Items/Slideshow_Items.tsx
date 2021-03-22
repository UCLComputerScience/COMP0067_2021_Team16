import './Slideshow_Items.css';
import '@ionic/react'
import { IonList, IonReorderGroup } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ItemReorderEventDetail } from '@ionic/core';
import Slideshow_Item from '../Slideshow_Item/Slideshow_Item';
import {Access_Slideshow_List} from '../../contexts/Slideshow_Context';

const sendGetRequest = () => {
  return axios({
    url: "https://0067team16app.azurewebsites.net/slideshows/listings",
    method: "GET",
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

sendGetRequest();

interface EditMode {
  Editing: boolean;
}

const Slideshow_Items: React.FC<EditMode> = (props) => {

  const myitems = Access_Slideshow_List();

  const [ReOrderModeDisabled, setReOrderModeDisabled] = useState<boolean>(!props.Editing);

  useEffect(()=>{setReOrderModeDisabled(!props.Editing)},[props.Editing])

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