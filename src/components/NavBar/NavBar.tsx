import { IonButton, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import "./NavBar.css";
import { mail, informationCircle } from "ionicons/icons";

const NavBarNew: React.FC = () => (
  <IonGrid className="ion-grid">
    <IonRow>
      <IonCol className="ion-column">
        <IonButton
          fill="clear"
          className="ion-button"
          routerLink="/SubscribePage"
        >
          <IonIcon icon={mail} size="large" />
        </IonButton>
      </IonCol>
      {
        // The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.
        // These columns include menu options for the media galleries.
        // <IonCol className="ion-column"><IonButton fill="clear" routerLink="/AudioGallery"><IonIcon icon={musicalNotes} size="large" /></IonButton></IonCol>
        // <IonCol className="ion-column"><IonButton fill="clear" routerLink='/ImageGallery'><IonIcon icon={images} size="large" /></IonButton></IonCol>
      }
      <IonCol className="ion-column">
        <IonButton fill="clear" routerLink="/SupportPage">
          <IonIcon icon={informationCircle} size="large" />
        </IonButton>
      </IonCol>
    </IonRow>
  </IonGrid>
);

export default NavBarNew;
