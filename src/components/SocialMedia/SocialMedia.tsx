// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.
// This component is to be used to share the mobile application via social media.
import React from "react";
import "./SocialMedia.css";
import { IonIcon, IonFab, IonFabButton, IonFabList } from "@ionic/react";
import {
  share,
  logoPinterest,
  logoFacebook,
  logoInstagram,
  logoTwitter,
} from "ionicons/icons";
const SocialMedia: React.FC = () => {
  return (
    <IonFab
      className="ion-fab-social"
      vertical="bottom"
      horizontal="center"
      slot="fixed"
    >
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
  );
};
// https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#5-web-share-api
export default SocialMedia;
