import React from "react";
import {
  IonCol,
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
  IonIcon,
} from "@ionic/react";
import BackButton from "../../components/BackButton/BackButton";
import { informationCircle, images, book, person } from "ionicons/icons";

const SupportPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow>
                <IonCol className="backbutton">
                  <BackButton />
                </IonCol>
                <IonCol size="8" className="title">
                  <IonTitle>Support</IonTitle>
                </IonCol>
                <IonCol />
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonList lines="inset">
          <IonItem className="item" routerLink="/SupportPage/Tutorial">
            <IonLabel color="primary" class="ion-text-center">
              <h1>Tutorial</h1>
            </IonLabel>
            <IonIcon
              icon={informationCircle}
              color="primary"
              size="large"
              slot="start"
            />
          </IonItem>
          <IonItem
            className="item"
            routerLink="/SupportPage/ScienceBehindImages"
          >
            <IonLabel color="primary" class="ion-text-center">
              <h1>Science behind the images</h1>
            </IonLabel>
            <IonIcon icon={images} color="primary" size="large" slot="start" />
          </IonItem>
          <IonItem className="item" routerLink="/SupportPage/CosmicBabyBooks">
            <IonLabel color="primary" class="ion-text-center">
              <h1>Cosmic Baby Books</h1>
            </IonLabel>
            <IonIcon icon={book} color="primary" size="large" slot="start" />
          </IonItem>
          <IonItem className="item" routerLink="/SupportPage/DrIyaWhiteley">
            <IonLabel color="primary" class="ion-text-center">
              <h1>Dr Iya Whiteley</h1>{" "}
            </IonLabel>
            <IonIcon icon={person} color="primary" size="large" slot="start" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SupportPage;
