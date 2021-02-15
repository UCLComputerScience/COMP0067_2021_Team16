import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonReorderGroup, IonFooter, IonButton} from '@ionic/react';
import Slideshow_Item from '../components/Slideshow_Item/Slideshow_Item';
import { ItemReorderEventDetail } from '@ionic/core';
import Audio_Player from '../components/Audio_Player/Audio_Player';
import User_Input from '../components/User_Input/User_Input';
import React from 'react';

let myitems = ['one', 'two', 'three', 'four', 'five'];

function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  console.log(myitems);
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

  let itemtomove = myitems.splice(event.detail.from, 1)[0];
  myitems.splice(event.detail.to, 0, itemtomove);

  console.log(myitems)
  event.detail.complete();
}

const EditSlideshowsPage: React.FC = () => (
  < IonPage >
        <IonHeader>
            <IonToolbar>
              <IonTitle>Edit Slideshows</IonTitle>
            </IonToolbar>
        </IonHeader>
    <IonContent fullscreen>
      <IonList>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {myitems.map(item => <Slideshow_Item name={item} key={item}/>)}
        </IonReorderGroup>
      </IonList >
      <Audio_Player name="test" />
      <User_Input name="Enter Slideshow name here" />
      <IonButton routerLink='/NewTestPage'>Open New page</IonButton>
    </IonContent >
    </IonPage >
);

export default EditSlideshowsPage;