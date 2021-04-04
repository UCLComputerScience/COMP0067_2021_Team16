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
          <p>
                This app is based on the Best Sellers and most gifted books for
                newborns and infants on Amazon UK. Books are sold in Europe, US,
                Canada, Australia, Japan and India. Images and book concepts are
                created and hand drawn by Dr Iya Whiteley. Iya was inspired by
                her own children to introduce newborn babies to our beautiful
                Earth. Images represent the intricate beauty of our natural
                world, our human scientific, architectural and technological
                achievements and translated them into intricate mathematical
                design in babies' perceptual language, suitable from birth to
                100 years old. Grandparents love reading these books too!
              </p>
              <div>
                <a
                  href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8
                cosmicbabybooks.com"
                >
                  You can find it on Amazon!
                </a>
              </div>
        </IonPage>);
}

export default DrIyaWhiteley;