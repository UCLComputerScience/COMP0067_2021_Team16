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
        <IonTabBar slot="bottom" className="main_tab_bar">
          <IonTabButton tab="slideshowpage" href="/slideshowpage">
            <IonIcon icon={square} />
            <IonLabel>Slideshow</IonLabel>
          </IonTabButton>
          <IonTabButton tab="VideoSettings" href="/VideoSettings">
            <IonIcon icon={triangle} />
            <IonLabel>Video Settings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="selectionpage" href="/SelectionPage">
            <IonIcon icon={ellipse} />
            <IonLabel>Select</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
          <IonTabButton tab="EditSlideshowsPage" href="/EditSlideshowsPage">
            <IonIcon icon={square} />
            <IonLabel>Edit</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export default Nav_Bar;