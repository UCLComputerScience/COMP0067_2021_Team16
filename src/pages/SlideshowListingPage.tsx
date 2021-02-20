import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Slideshow_Button from '../components/Slideshow_Button/Slideshow_Button';
import Nav_Bar from '../components/Nav_Bar/Nav_Bar_New';
import Edit_Button from '../components/EditButton/EditButton';
import './SlideshowListingPage.css';

let myitems = ['one', 'two', 'three'];

const SelectionPage: React.FC = () => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonGrid>
                    <IonRow>
                        <IonCol className='editbutton'><Edit_Button/></IonCol>
                        <IonCol className='title'><IonTitle>Select Slideshow</IonTitle></IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            {myitems.map(item => <Slideshow_Button name={item} key={item}/>)}
        </IonContent>);
        <IonFooter>
            <Nav_Bar/>
        </IonFooter>
    </IonPage>
);

export default SelectionPage;
