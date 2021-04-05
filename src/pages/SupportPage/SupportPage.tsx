import React, { useState } from "react";
import {
  IonCol,
  IonButton,
  IonContent,
  IonPage,
  IonRow,
  IonHeader,
  IonToolbar,
  IonGrid,
  IonTitle,
  IonItem,
  IonLabel,
  IonList,
  IonIcon
} from "@ionic/react";

import BackButton from "../../components/BackButton/BackButton";
import {informationCircle, images, book, person} from 'ionicons/icons';

import "./SupportPage.css";

const SupportPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonGrid>
                <IonRow>
                  <IonCol className="backbutton">
                    <BackButton/>
                  </IonCol>
                  <IonCol size="8" className="title">
                    <IonTitle>
                      Support
                    </IonTitle>
                  </IonCol>
                  <IonCol/>
                </IonRow>
              </IonGrid>
            </IonToolbar>
          </IonHeader>

        {/* <div id="buttons">
          <IonRow>
            <IonButton routerLink="/SupportPage/Tutorial"> Tutorial </IonButton>
          </IonRow>
          <IonRow>
            <IonButton routerLink="/SupportPage/ScienceBehindImages"> 
              Science Behind Images
            </IonButton>
          </IonRow>
          <IonRow>
            <IonButton routerLink="/SupportPage/CosmicBabyBooks">
              Cosmic Baby Books
            </IonButton>
          </IonRow>
          <IonRow>
            <IonButton routerLink="/SupportPage/DrIyaWhiteley">
              Dr Iya Whiteley
            </IonButton>
          </IonRow>
        </div>
      </IonContent> */}

      <IonList lines="inset">
      <IonItem routerLink="/SupportPage/Tutorial">
        <IonLabel class="ion-text-center">Tutorial</IonLabel>
        <IonIcon icon={informationCircle} color="primary" size="large" slot="start" />
      </IonItem>

      <IonItem routerLink="/SupportPage/ScienceBehindImages">
        <IonLabel class="ion-text-center">Science behind the images</IonLabel>
        <IonIcon icon={images} color="primary" size="large" slot="start" />
      </IonItem>

      <IonItem routerLink="/SupportPage/CosmicBabyBooks">
        <IonLabel class="ion-text-center">Cosmic Baby Books</IonLabel>
        <IonIcon icon={book} color="primary" size="large" slot="start" />
      </IonItem>

      <IonItem routerLink="/SupportPage/DrIyaWhiteley">
        <IonLabel class="ion-text-center">Dr Iya Whiteley</IonLabel>
        <IonIcon icon={person} color="primary" size="large" slot="start" />
      </IonItem>

      </IonList>
      </IonContent>

    </IonPage>
  );
};

export default SupportPage;
