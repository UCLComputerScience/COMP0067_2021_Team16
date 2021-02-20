import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Nav_Bar from '../components/Nav_Bar/Nav_Bar_New';
import Edit_Button from '../components/EditButton/EditButton';
import './SlideshowListingPage.css';
import Slideshow_Items from '../components/Slideshow_Items/Slideshow_Items';
import React, { useState } from 'react';

const SelectionPage: React.FC = () => {
    
    const[editMode,setEditMode] = useState(false);


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='editbutton' toggleEdit={setEditMode}><Edit_Button/></IonCol>
                            <IonCol className='title'><IonTitle>Select Slideshow</IonTitle></IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Slideshow_Items/>
            </IonContent>);
            <IonFooter>
                <Nav_Bar/>
            </IonFooter>
        </IonPage>
);
}

export default SelectionPage;
