import { IonContent, IonPage, IonButton } from '@ionic/react';
import BackButton from '../../components/BackButton/BackButton';
import TitleBar from '../../components/TitleBar/TitleBar';
import RadioButton from '../../components/RadioButton/RadioButton';

const AudioSettingsPage: React.FC = () => {
  return (
    <IonPage>
     <IonContent fullscreen>
        <BackButton />
        <TitleBar name={"Audio Settings"}/>
        <RadioButton />
        <IonButton routerLink='/AudioGallery'>See Audio Gallery</IonButton>
     </IonContent>
    </IonPage>
  );
};

export default AudioSettingsPage;