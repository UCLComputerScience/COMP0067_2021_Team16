import { IonContent, IonPage } from '@ionic/react';
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
     </IonContent>
    </IonPage>
  );
};

export default AudioSettingsPage;