import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar,} from '@ionic/react';
import Nav_Bar from '../../components/Nav_Bar/Nav_Bar';
import Edit_Button from '../../components/EditButton/EditButton';
import './SlideshowListingPage.css';
import Slideshow_Items from '../../components/Slideshow_Items/Slideshow_Items';
import React, { useState } from 'react';
import AddNewSlideshow from '../../components/AddNewSlideshow/AddNewSlideshow';
import {ScreenOrientation} from '@ionic-native/screen-orientation';


const SelectionPage: React.FC = () => {
    
    ScreenOrientation.unlock();

    const[editMode,setEditMode] = useState(false);


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='editbutton'><Edit_Button toggleEdit={setEditMode}/></IonCol>
                            <IonCol className='title'><IonTitle>{editMode ? 'Edit Slideshows':'Select Slideshow'}</IonTitle></IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Slideshow_Items Editing={editMode}/>
            </IonContent>);
            <IonFooter className='bar-footer'>
                <IonGrid>
                    {editMode ? <IonRow className='buttoncontainer'><AddNewSlideshow/></IonRow>:null}
                    {editMode ? null:<IonRow><Nav_Bar/></IonRow>}
                </IonGrid>
            </IonFooter>
        </IonPage>
);
}

export default SelectionPage;
