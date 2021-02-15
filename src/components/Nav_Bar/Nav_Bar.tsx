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
import React, { useState } from 'react';

const Nav_Bar: React.FC = () => {

  const [hidden, updateHidden] = useState(() => { return false });

  function hide_navbar() {
    updateHidden(true);
    console.log("Trying to hide navbar")
    return true;
  }

  function show_navbar() {
    updateHidden(false);
    console.log("Trying to show navbar")
    return true;
  }


  if (!hidden) {
    return (
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <App_Router hide_navbar={()=>hide_navbar()} show_navbar={()=>show_navbar()} />
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
    )}
  else {
    return (
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet><App_Router hide_navbar={() => hide_navbar()} show_navbar={() => show_navbar()}/></IonRouterOutlet>
          <IonTabBar slot="bottom"></IonTabBar>
        </IonTabs>
      </IonReactRouter>
    )}
}

export default Nav_Bar;