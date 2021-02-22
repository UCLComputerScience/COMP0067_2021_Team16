import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar,IonButton,IonIcon, IonItem, IonItemGroup, IonCheckbox} from '@ionic/react';
import './EditSlidesPage.css';
import Edit_Bar from '../../components/Edit_Bar/Edit_Bar';
import Back_Button from '../../components/BackButton/BackButton';
import User_Input from '../../components/User_Input/User_Input';
import Slides from './Slides_Class';
import React, { useState } from 'react';
import {musicalNotes} from 'ionicons/icons';


//importing images (replace when we have our DB)

import imgone from "../../components/Image/images/asteroblastusstellatus.png";
import imgtwo from "../../components/Image/images/porpitaprunella.png";
import imgthree from "../../components/Image/images/poliopogonamadou.png";
import imgfour from "../../components/Image/images/botryllusschlosseri.png";
import imgfive from "../../components/Image/images/cassiopeaandromeda.png";
import imgsix from "../../components/Image/images/hemipholiscordifera.png";
import imgseven from "../../components/Image/images/centrostephanuslongispinus.png";
import imgeight from "../../components/Image/images/nautiluspompilius.png";
import imgnine from "../../components/Image/images/haeckelianaporcellana.png";
import imgten from "../../components/Image/images/cannorrhizaconnexa.png";
import imgeleven from "../../components/Image/images/nausithoechallengeri.png";
import imgtwelve from "../../components/Image/images/solmaris.png";

//creating slide objects (replace when we have our DB)
let one = new Slides("asteroblastusstellatus",imgone,0,0,0)
let two = new Slides("porpitaprunella",imgtwo,1,1,1);
let three = new Slides("poliopogonamadou",imgthree,2,1,1);
let four = new Slides("botryllusschlosseri",imgfour,3,0,0);
let five = new Slides("cassiopeaandromeda",imgfive,4,1,1);
let six = new Slides("hemipholiscordifera",imgsix,5,1,1);
let seven = new Slides("centrostephanuslongispinus",imgseven,6,1,1);
let eight = new Slides("nautiluspompilius",imgeight,7,1,1);
let nine = new Slides("haeckelianaporcellana",imgnine,8,0,0);
let ten = new Slides("cannorrhizaconnexa",imgten,9,1,1);
let eleven = new Slides("nausithoechallengeri",imgeleven,10,1,1);
let twelve = new Slides("solmaris",imgtwelve,11,1,1);

//creating array of slide objects (replace when we have our DB)

let myitems = [one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve];

interface ContainerProps {
    slide: object;
}

const Editableslide: React.FC<ContainerProps> = (props) => {
    return(
        <span className='slidecontainer'>
            <IonCheckbox checked={props.slide.selected} className='checkbox'/>
            {props.slide.recording || props.slide.default_recording ? <IonIcon icon={musicalNotes} className='music'/>:null}
            <img src={props.slide.src} key={props.slide.name} className='image'/>
        </span>
    );

}

const EditSlidesPage: React.FC = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='backbutton'><Back_Button ion-no-padding ion-no-margin/></IonCol>
                            <IonCol className='title'><IonTitle>Edit Slides</IonTitle></IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonToolbar className='userinput'>
                                <User_Input name='Please enter a slideshow name:'/>
                            </IonToolbar>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {myitems.map(item => <Editableslide slide={item} key={item.name}/>)}
            </IonContent>);
            <IonFooter className='bar-footer'>
                <Edit_Bar/>
            </IonFooter>
        </IonPage>
);
}

export default EditSlidesPage;
