import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonGrid, 
    IonRow,
    IonCol,
    IonContent,
    IonTitle, 
    IonBackButton} from "@ionic/react";
import React from "react";

import "./Tutorial.css"; 

const Tutorial: React.FC = () => {
    return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol className="backbutton">
                <IonBackButton/>
              </IonCol>
              <IonCol className="title">
                <IonTitle>
                  Tutorial
                </IonTitle>
              </IonCol>
              <IonCol/>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
        
        <IonContent>
          <h3>  
                <ul>    
                <li>
                  Get started with the slideshow!
                </li>
                
                <li>
                    Select the slideshow you want to play next 
                </li>

                <li>
                  Settings (Audio + Video)
                </li>
                
                <li>
                  Support 
                </li>

                <li>
                  Subscribe
                </li>

                </ul>
                </h3>           
        </IonContent>

    </IonPage>);
}

export default Tutorial;