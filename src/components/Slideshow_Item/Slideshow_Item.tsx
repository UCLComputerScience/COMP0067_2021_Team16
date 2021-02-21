import './Slideshow_Item.css';
import '@ionic/react'
import { IonItem, IonLabel, IonReorder, IonList, IonReorderGroup, IonCheckbox, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';

interface ContainerProps {
  name: string;
  editing: boolean;
}

const Slideshow_Item: React.FC<ContainerProps> = ({ name, editing }) => (
  <IonItem>
    <IonLabel>
      <IonGrid>
        <IonRow>
          <IonCol className='checkcontainer'>{editing ? <IonCheckbox checked={true} className='checkbox'/>: null}</IonCol>
          <IonCol className='slidename'><IonButton fill='clear' routerLink='slideshowpage'>{name}</IonButton></IonCol>
          <IonCol className='reordergrabber'>{editing ? <IonReorder className='grabicon'/>: null}</IonCol>
        </IonRow>
      </IonGrid>
    </IonLabel>  
  </IonItem>
)

export default Slideshow_Item;