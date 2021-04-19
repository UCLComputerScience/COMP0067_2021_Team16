// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is to be used in the recording audio page.

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonIcon } from '@ionic/react';
import {checkmarkCircle, mic, trash} from 'ionicons/icons';

export const AudioTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SegmentExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToolbar>
          <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="save">
              <IonIcon icon={checkmarkCircle} />
            </IonSegmentButton>
            <IonSegmentButton value="record">
              <IonIcon icon={mic} />
            </IonSegmentButton>
            <IonSegmentButton value="delete">
              <IonIcon icon={trash} />
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
};


export default AudioTab;