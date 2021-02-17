import './Nav_Bar.css';
import '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import App_Router from '../App_Router/App_Router';
import React from 'react';

const Nav_Bar: React.FC = () => {

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <App_Router/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="slideshowpage" href="/slideshowpage">
            <IonIcon icon={square} />
            <IonLabel>Slideshow Page</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="selectionpage" href="/SelectionPage">
            <IonIcon icon={ellipse} />
            <IonLabel>Select your slideshow</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
          <IonTabButton tab="EditSlideshowsPage" href="/EditSlideshowsPage">
            <IonIcon icon={square} />
            <IonLabel>Edit Slideshows</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export default Nav_Bar;