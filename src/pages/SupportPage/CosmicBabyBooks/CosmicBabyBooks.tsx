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

import "./CosmicBabyBooks.css"; 

const CosmicBabyBooks: React.FC = () => {
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
                      Cosmic Baby Books
                    </IonTitle>
                  </IonCol>
                  <IonCol/>
                </IonRow>
              </IonGrid>
            </IonToolbar>
          </IonHeader>
        </IonPage>);
}

export default CosmicBabyBooks;