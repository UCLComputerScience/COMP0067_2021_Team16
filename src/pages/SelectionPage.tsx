import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Slideshow_Button from '../components/Slideshow_Button/Slideshow_Button';

let myitems = ['one', 'two', 'three', 'four', 'five', 'six', 'devil', 'killer', 'thermos', 'shagri-la', 'nagasaki', 'basin', 'nasty', 'thirsty', 'army', 'ink', 'feathers', 'august', 'champion', 'tyrant', 'howl', 'lotus', 'vallium', 'palace', 'saw', 'karma', 'syzygy', 'eclipse', 'GSS'];

const SelectionPage: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Select Slideshow</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
      {myitems.map(item => <Slideshow_Button name={item} key={item}/>)}
        </IonContent>);
    </IonPage>
);

export default SelectionPage;
