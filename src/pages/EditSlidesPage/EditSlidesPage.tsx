import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar,IonButton,IonIcon} from '@ionic/react';
import './EditSlidesPage.css';
import Edit_Bar from '../../components/Edit_Bar/Edit_Bar';
import Back_Button from '../../components/BackButton/BackButton';
import User_Input from '../../components/User_Input/User_Input';
import Slides from './Slides_Class';
import React, { useState } from 'react';

//importing images

import imgone from "../../../public/assets/images/asteroblastusstellatus.png";
import imgtwo from "../../../public/assets/images/porpitaprunella.png";
import imgthree from "../../../public/assets/images/poliopogonamadou.png";
import imgfour from "../../../public/assets/images/botryllusschlosseri.png";
import imgfive from "../../../public/assets/images/cassiopeaandromeda.png";
import imgsix from "../../../public/assets/images/hemipholiscordifera.png";
import imgseven from "../../../public/assets/images/centrostephanuslongispinus.png";
import imgeight from "../../../public/assets/images/nautiluspompilius.png";
import imgnine from "../../../public/assets/images/haeckelianaporcellana.png";
import imgten from "../../../public/assets/images/cannorrhizaconnexa.png";
import imgeleven from "../../../public/assets/images/nausithoechallengeri.png";
import imgtwelve from "../../../public/assets/images/solmaris.png";

//creating slide objects
let one = new Slides("asteroblastusstellatus",imgone,0,1,1)
let two = new Slides("porpitaprunella",imgtwo,1,1,1);
let three = new Slides("poliopogonamadou",imgthree,2,1,1);
let four = new Slides("botryllusschlosseri",imgfour,3,1,1);
let five = new Slides("cassiopeaandromeda",imgfive,4,1,1);
let six = new Slides("hemipholiscordifera",imgsix,5,1,1);
let seven = new Slides("centrostephanuslongispinus",imgseven,6,1,1);
let eight = new Slides("nautiluspompilius",imgeight,7,1,1);
let nine = new Slides("haeckelianaporcellana",imgnine,8,1,1);
let ten = new Slides("cannorrhizaconnexa",imgten,9,1,1);
let eleven = new Slides("nausithoechallengeri",imgeleven,10,1,1);
let twelve = new Slides("solmaris",imgtwelve,11,1,1);

//creating array of slide objects

let items = [one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve];

const EditSlidesPage: React.FC = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='backbutton'><Back_Button no-padding no-margin/></IonCol>
                            <IonCol className='title'><IonTitle>Edit Slides</IonTitle></IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                    <IonGrid>
                        <IonRow>
                            <IonToolbar>
                                <User_Input name='Please enter a slideshow name:'/>
                            </IonToolbar>
                        </IonRow>
                        <IonRow></IonRow>
                    </IonGrid>
            </IonContent>);
            <IonFooter className='bar-footer'>
                <Edit_Bar/>
            </IonFooter>
        </IonPage>
);
}

export default EditSlidesPage;
