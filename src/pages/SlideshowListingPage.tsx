import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar,IonButton,IonIcon} from '@ionic/react';
import Nav_Bar from '../components/Nav_Bar/Nav_Bar_New';
import Edit_Button from '../components/EditButton/EditButton';
import './SlideshowListingPage.css';
import Slideshow_Items from '../components/Slideshow_Items/Slideshow_Items';
import React, { useState } from 'react';
import { render } from '@testing-library/react';


const SelectionPage: React.FC = () => {
    
    const[editMode,setEditMode] = useState(false);

    const RenderSlideshowItems = () => {return <Slideshow_Items Editing={editMode}/>}

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='editbutton'><Edit_Button toggleEdit={setEditMode}/></IonCol>
                            <IonCol className='title'><IonTitle>Select Slideshow</IonTitle></IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Slideshow_Items Editing={editMode}/>
            </IonContent>);
            <IonFooter>
                <Nav_Bar/>
            </IonFooter>
        </IonPage>
);
}

export default SelectionPage;
