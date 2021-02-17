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
const App_Router: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/tab1" component={Tab1} />
      <Route exact path="/SelectionPage" component={SelectionPage} />
      <Route path="/tab3" component={Tab3} />
      <Route path="/slideshowpage" component={SlideshowPage} />
      <Route exact path="/" component={SlideshowPage} />
      <Route exact path="/EditSlideshowsPage" component={EditSlideshowsPage} />
      <Route exact path="/NewTestPage" component={NewTestPage} beforeEnter={() => console.log('entering')} beforeLeave={() => console.log('leaving')} />
    </IonRouterOutlet>
  );
}


export default App_Router;