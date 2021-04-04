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

import "./DrIyaWhiteley.css"; 

const DrIyaWhiteley: React.FC = () => {
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
                      About Dr. Iya Whiteley
                    </IonTitle>
                  </IonCol>
                  <IonCol/>
                </IonRow>
              </IonGrid>
            </IonToolbar>
          </IonHeader>
        </IonPage>);
}

export default DrIyaWhiteley;