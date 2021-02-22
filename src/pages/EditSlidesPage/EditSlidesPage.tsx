import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar,IonButton,IonIcon} from '@ionic/react';
import './EditSlidesPage.css';
import Edit_Bar from '../../components/Edit_Bar/Edit_Bar';
import Back_Button from '../../components/BackButton/BackButton';
import React, { useState } from 'react';


const EditSlidesPage: React.FC = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='backbutton'><Back_Button/></IonCol>
                            <IonCol className='title'><IonTitle>'Edit Slides'</IonTitle></IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
            </IonContent>);
            <IonFooter className='bar-footer'>
                <Edit_Bar/>
            </IonFooter>
        </IonPage>
);
}

export default EditSlidesPage;
