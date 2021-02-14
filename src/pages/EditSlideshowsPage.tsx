import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonReorderGroup, IonFooter} from '@ionic/react';
import Slideshow_Item from '../components/Slideshow_Item/Slideshow_Item';
import { ItemReorderEventDetail } from '@ionic/core';
import Audio_Player from '../components/Audio_Player/Audio_Player';

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
      <Audio_Player name = "test"/>
    </IonContent >
    </IonPage >
);

export default EditSlideshowsPage;