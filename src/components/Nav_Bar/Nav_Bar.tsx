import './Nav_Bar.css';
import '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from '../../pages/Tab1';
import Tab3 from '../../pages/Tab3';
import SlideshowPage from '../../pages/SlideshowPage';
import SelectionPage from '../../pages/SelectionPage';
import EditSlideshowsPage from '../../pages/EditSlideshowsPage'
import React from 'react';

interface ContainerProps {
  name: string;
}

const Nav_Bar: React.FC<ContainerProps> = ({ name }) => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/SelectionPage">
          <SelectionPage />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>
        <Route path="/slideshowpage">
          <SlideshowPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/slideshowpage" />
        </Route>
        <Route exact path="/EditSlideshowsPage">
          <EditSlideshowsPage />
        </Route>
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

export default Nav_Bar;