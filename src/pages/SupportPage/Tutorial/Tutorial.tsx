import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonGrid, 
    IonRow,
    IonCol,
    IonIcon,
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
    </IonPage>);
}

export default Tutorial;