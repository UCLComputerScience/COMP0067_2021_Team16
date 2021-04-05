import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonGrid, 
    IonRow,
    IonCol,
    IonTitle, 
    IonBackButton,
    IonText,
    IonImg,
    IonContent,
    IonThumbnail,
    IonItem,
    IonLabel} from "@ionic/react";
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
          <IonText>
          <h4>This app is based on the Best Sellers and most gifted books for
                newborns and infants on Amazon UK. <br/> Books are sold in Europe, US,
                Canada, Australia, Japan and India. Images and book concepts are
                created and hand drawn by Dr Iya Whiteley. Iya was inspired by
                her own children to introduce newborn babies to our beautiful
                Earth. <br/>Images represent the intricate beauty of our natural
                world, our human scientific, architectural and technological
                achievements and translated them into intricate mathematical
                design in babies' perceptual language, suitable from birth to
                100 years old. <br/> Grandparents love reading these books too!</h4>
          </IonText>

          <IonText><h1>
            <a
              href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8
              cosmicbabybooks.com"
              >
              You can find it on Amazon!
            </a>
            </h1>
          </IonText>
              
              <div className="img-container">
                <img src="../../../../public/assets/icon/icon.png" alt="Icon"></img>
              </div>

              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/ylrelG3QQ4s"></iframe>
              </div>
        
        </IonPage>);
}

export default CosmicBabyBooks;