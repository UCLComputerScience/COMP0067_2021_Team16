import '@ionic/react'
import { IonList, IonReorderGroup } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ItemReorderEventDetail } from '@ionic/core';
import Slideshow_Item from '../Slideshow_Item/Slideshow_Item';
import Slideshow_Class from '../../classes/Slideshow_Class';

//sendGetRequest();

interface EditMode {
  Editing: boolean;
}

const Slideshow_Items: React.FC<EditMode> = (props) => {

  const [myitems,setmyitems] = useState([]);

  const [ReOrderModeDisabled, setReOrderModeDisabled] = useState<boolean>(!props.Editing);

  useEffect(()=>{setReOrderModeDisabled(!props.Editing)},[props.Editing]);

  async function load_default_slideshows(){
    try{
      let response = await axios.get("https://0067team16app.azurewebsites.net/slideshows/listings");
      console.log(response.data);
      return response.data;
    }
    catch (e){
      console.log("Failed to load data :", e);
      return [];
    }
    
  }
  
  
  useEffect(()=>{
    async function load_slideshows(){
      let data = await load_default_slideshows();
      setmyitems(data.map((item,i:number) => new Slideshow_Class(item.slideshow_name,i,true,item.slideshow_id)));
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
        {myitems.map(item => item.enabled && !props.Editing ? <Slideshow_Item item={item} key={item.slideshow_name} editing={props.Editing}/>:null)}
        {myitems.map(item => props.Editing ? <Slideshow_Item item={item} key={item.slideshow_name} editing={props.Editing}/>: null)}
      </IonReorderGroup>
    </IonList >
  );
}

export default Slideshow_Items;