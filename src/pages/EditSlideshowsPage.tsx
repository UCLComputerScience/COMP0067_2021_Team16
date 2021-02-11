import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonReorderGroup} from '@ionic/react';
import Slideshow_Item from '../components/Slideshow_Item/Slideshow_Item';
import { ItemReorderEventDetail } from '@ionic/core';
import Audio_Player from '../components/Audio_Player/Audio_Player';

let myitems = ['one', 'two', 'three', 'four', 'five'];
/*<Slideshow_Item name={{ item }}*/

function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  console.log(myitems)
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

  let itemtomove = myitems.splice(event.detail.from, 1)[0];
  myitems.splice(event.detail.to, 0, itemtomove);

  console.log(myitems)

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
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
          {myitems.map(item => <Slideshow_Item name={ item }/>)}
        </IonReorderGroup>
      </IonList >
    </IonContent >
    </IonPage >
);

export default EditSlideshowsPage;
