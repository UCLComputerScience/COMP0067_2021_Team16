import { IonBackButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from '@ionic/react';
import "./BackButton.css";

const BackButton: React.FC = () => (
  <IonContent>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="./slideshowpage"> </IonBackButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  </IonContent>
  );

export default BackButton;