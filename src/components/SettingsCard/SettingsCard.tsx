import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonItemDivider } from '@ionic/react';

const InputSettings: React.FC = () => {

  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Video Settings  </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Slide duration</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Set slide duration (0 - 20s)" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          <IonItemDivider>Slide duration</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Set slide duration (0 - 20s)" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default InputSettings;