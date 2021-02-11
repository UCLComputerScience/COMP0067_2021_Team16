import { IonContent, IonHeader, IonItemDivider, IonPage, IonTitle, IonToolbar, IonList, IonReorderGroup, IonItem, IonLabel } from '@ionic/react';
import Slideshow_Item from '../components/Slideshow_Item/Slideshow_Item';

let myitems = ['one', 'two', 'three', 'four', 'five'];
/*<Slideshow_Item name={{ item }}*/

const EditSlideshowsPage: React.FC = () => (
  < IonPage >
        <IonHeader>
            <IonToolbar>
                <IonTitle>Edit Slideshows</IonTitle>
            </IonToolbar>
        </IonHeader>
    <IonContent fullscreen>
      <IonList>
        <IonReorderGroup disabled={false}>
          {myitems.map(item => <Slideshow_Item name={ item }/>)}
        </IonReorderGroup>
      </IonList >
     </IonContent >);
    </IonPage >
);

export default EditSlideshowsPage;
