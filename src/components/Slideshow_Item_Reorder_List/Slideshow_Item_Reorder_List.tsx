import './Slideshow_Item_Reorder_List.css';
import '@ionic/react'
import { IonItem, IonLabel, IonReorder, IonList, IonReorderGroup } from '@ionic/react';
import React from 'react';
import { ItemReorderEventDetail } from '@ionic/core';

interface ContainerProps {
  name: string;
}

const Slideshow_Item: React.FC<ContainerProps> = ({ name }) => (
  <IonItem><IonLabel>{name}</IonLabel><IonReorder></IonReorder></IonItem>
  )

const Slideshow_Item_Reorder_List: React.FC = () => {

  let myitems = ['one', 'two', 'three', 'four', 'five'];

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    console.log(myitems);
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    let itemtomove = myitems.splice(event.detail.from, 1)[0];
    myitems.splice(event.detail.to, 0, itemtomove);

    console.log(myitems)
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

export default Slideshow_Item_Reorder_List;