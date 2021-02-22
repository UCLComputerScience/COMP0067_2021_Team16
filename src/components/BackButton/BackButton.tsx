import { IonBackButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from '@ionic/react';
import "./BackButton.css";

const BackButton: React.FC = () => (
  <IonBackButton defaultHref="./slideshowpage"> </IonBackButton>
  );

export default BackButton;