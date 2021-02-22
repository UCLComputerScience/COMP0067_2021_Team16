import './Slideshow_Item.css';
import '@ionic/react'
import { IonItem, IonLabel, IonReorder, IonCheckbox, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';

interface ContainerProps {
  item: object;
  editing: boolean;
}

const Slideshow_Item: React.FC<ContainerProps> = (props) => {
  function toggleslideshow(){
    props.item.enabled = !props.item.enabled; 
  }
  
  return(
  <IonItem>
    <IonLabel>
      <IonGrid>
        <IonRow>
          <IonCol className='checkcontainer'>{props.editing ? <IonCheckbox checked={props.item.enabled} className='checkbox' onIonChange={toggleslideshow}/>: null}</IonCol>
          <IonCol className='slidename'><IonButton fill='clear' routerLink='slideshowpage'><h2>{props.item.name}</h2></IonButton></IonCol>
          <IonCol className='reordergrabber'>{props.editing ? <IonReorder className='grabicon'/>: null}</IonCol>
        </IonRow>
      </IonGrid>
    </IonLabel>  
  </IonItem>);
}

export default Slideshow_Item;