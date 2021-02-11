import './Nav_Bar.css';
import '@ionic/react'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

import React from 'react';

interface ContainerProps {
  name: string;
}

const Nav_Bar: React.FC<ContainerProps> = ({ name }) => (
  <IonTabs>
    <IonRouterOutlet></IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="schedule">
        <IonIcon icon={calendar} />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="speakers">
        <IonIcon icon={personCircle} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map">
        <IonIcon icon={map} />
        <IonLabel>Map</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about">
        <IonIcon icon={informationCircle} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Nav_Bar;