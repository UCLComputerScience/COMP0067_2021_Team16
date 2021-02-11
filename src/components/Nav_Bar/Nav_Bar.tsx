import './Nav_Bar.css';
import '@ionic/react'
import { IonApp,IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import React from 'react';

interface ContainerProps {
  name: string;
}

const Nav_Bar: React.FC<ContainerProps> = ({ name }) => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/schedule">
          <Redirect to="../../slideshowpage" />
        </Route>
        <Route exact path="/speakers">
          <Redirect to="../../slideshowpage" />
        </Route>
        <Route exact path="/map">
          <Redirect to="../../slideshowpage" />
        </Route>
        <Route exact path="/about">
          <Redirect to="../../slideshowpage" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="top">
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
    </IonReactRouter>
);

export default Nav_Bar;