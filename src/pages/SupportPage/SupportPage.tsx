import React from "react";
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
} from "@ionic/react";
import TitleBar from "../../components/TitleBar/TitleBar";
import { informationCircle, images, book, person } from "ionicons/icons";

const SupportPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <TitleBar name="Support" />
        <IonList lines="none">
          <IonItem routerLink="/SupportPage/Tutorial">
            <IonLabel  no-lines>
              <h1 className="support-item">
                <b>Tutorial</b>
              </h1>
            </IonLabel>
            <IonIcon
              icon={informationCircle}
              color="primary"
              size="large"
              slot="start"
            />
          </IonItem>
          <IonItem routerLink="/SupportPage/TheScience">
            <IonLabel>
              <h1 className="support-item">
                <b>The Science</b>
              </h1>
            </IonLabel>
            <IonIcon icon={images} color="primary" size="large" slot="start" />
          </IonItem>
          <IonItem routerLink="/SupportPage/CosmicBabyBooks">
            <IonLabel>
              <h1 className="support-item">
                <b>Cosmic Baby Books</b>
              </h1>
            </IonLabel>
            <IonIcon icon={book} color="primary" size="large" slot="start" />
          </IonItem>
          <IonItem routerLink="/SupportPage/DrIyaWhiteley">
            <IonLabel>
              <h1 className="support-item">
                <b>Dr Iya Whiteley</b>
              </h1>{" "}
            </IonLabel>
            <IonIcon icon={person} color="primary" size="large" slot="start" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SupportPage;
