import './Slideshow_Item.css';
import '@ionic/react'
import { IonItem, IonLabel, IonReorder, IonCheckbox, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';

interface ContainerProps {
  item: object;
  editing: boolean;
}

const Slideshow_Item: React.FC<ContainerProps> = (props) => (
  <IonItem>
    <IonLabel>
      <IonGrid>
        <IonRow>
          <IonCol className='checkcontainer'>{props.editing ? <IonCheckbox checked={props.item.enabled} className='checkbox'/>: null}</IonCol>
          <IonCol className='slidename'><IonButton fill='clear' routerLink='slideshowpage'>{props.item.name}</IonButton></IonCol>
          <IonCol className='reordergrabber'>{props.editing ? <IonReorder className='grabicon'/>: null}</IonCol>
        </IonRow>
      </IonGrid>
    </IonLabel>  
  </IonItem>
)

export default Slideshow_Item;