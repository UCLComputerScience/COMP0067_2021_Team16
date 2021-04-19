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
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/react";
import './SupportPage.css'
import BackButton from "../../components/BackButton/BackButton";
import {
  informationCircle,
  images,
  book,
  person,
  share,
  logoPinterest,
  logoFacebook,
  logoInstagram,
  logoTwitter,
} from "ionicons/icons";

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
        <IonFab className="ion-fabulous" vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={logoPinterest} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton>
              <IonIcon icon={logoFacebook} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={logoInstagram} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton>
              <IonIcon icon={logoTwitter} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
        {/* https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#5-web-share-api */}
      </IonContent>
    </IonPage>
  );
};

export default SupportPage;
