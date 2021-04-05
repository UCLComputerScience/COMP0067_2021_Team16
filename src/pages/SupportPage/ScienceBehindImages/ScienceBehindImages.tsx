import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonGrid, 
    IonRow,
    IonCol,
    IonIcon,
    IonTitle, 
    IonBackButton,
    IonContent} from "@ionic/react";
import React from "react";

import "./ScienceBehindImages.css"; 

const ScienceBehindImages: React.FC = () => {
    return(
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonGrid>
                <IonRow>
                  <IonCol className="backbutton">
                    <IonBackButton/>
                  </IonCol>
                  <IonCol size="8" className="title">
                    <IonTitle>
                      Science behind the images
                    </IonTitle>
                  </IonCol>
                  <IonCol/>
                </IonRow>
              </IonGrid>
            </IonToolbar>
          </IonHeader>

            <IonContent>
          <h3>
            Images developed based on the current scientific findings on
                newborns and babies’ visual perception and brain development:
                
                <ol>    
                <li>
                  Improve concentration through stimulating and captivating
                  images
                </li>
                
                <li>
                    Stimulate further learning and discovery 
                </li>

                <li>
                  Create and maintain new pathways in the brain through learning
                  to trace visual patterns
                </li>
                
                <li>
                  Acquire early life skills essential for successful learning
                  and interaction. 
                </li>
                </ol>
                
                Children have more brain pathways than
                  adults. Brain pathways die way if they are not used. Further
                  research on newborn and infant development is on-going in the
                  world’s top neonatal unit. 
                  <br/><br/> Images are designed to assist
                  specific stages of development during the first year. Look out
                  for apps for four developmental stages.   
                </h3>           

                <h1>
                <a href=" https://cosmicbabybooks.com/books">
                  Cosmic Baby Books
                </a>
                </h1>
            </IonContent>

        </IonPage>);
}

export default ScienceBehindImages;