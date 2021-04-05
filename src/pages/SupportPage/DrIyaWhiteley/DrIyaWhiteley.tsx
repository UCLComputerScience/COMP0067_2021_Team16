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

          <IonContent>
          <br/>
          <h4>
                Space Psychologist, Director of the Centre of Space Medicine,
                University College London, advising to the UK Space Agency. <br/>She
                developed training programmes for the astronaut class of Major
                Tim Peake, while working for European Space Agency at the
                European Astronaut Centre in Germany. <br/>As a Cognitive Engineer
                and Clinical Psychologist, she specialises in visual perception
                and design displays for highly skilled military pilots and
                astronauts. These top performers need to absorb information
                instantly and make effective decisions. <br/>Iya is a public speaker
                and presenter on radio and TV, for example, in BBC Science TV
                series with Astronaut Chris Hadfield and Dr Kevin Fong
                presenter, BBC Astronauts: Do you have what it takes?'. <br/>Iya runs
                workshops for public and academic.
          </h4>

          <h1>
              <a href="https://cosmicbabybooks.com/about">
              More information on Dr Whiteley
              </a>
          </h1>

          </IonContent>
        </IonPage>);
}

export default DrIyaWhiteley;