import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonRouterOutlet} from '@ionic/react';

//Import all your pages here
import Tab1 from '../../pages/Tab1';
import Tab3 from '../../pages/Tab3';
import SlideshowPage from '../../pages/SlideshowPage';
import SelectionPage from '../../pages/SelectionPage';
import EditSlideshowsPage from '../../pages/EditSlideshowsPage';
import NewTestPage from '../../pages/Newtestpage';

//below are all the routes with their URLs (denoted by 'path') and the actual page component (child to each Route component)
const App_Router: React.FC = () => (
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
    <Route exact path="/NewTestPage">
      <NewTestPage />
    </Route>
  </IonRouterOutlet>
);


export default App_Router;