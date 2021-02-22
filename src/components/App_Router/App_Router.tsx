import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonRouterOutlet} from '@ionic/react';

//Import all your pages here
import AudioGallery from '../../pages/AudioGallery';
import Tab4 from '../../pages/Tab4';
import Tab5 from '../../pages/Tab5';
import SlideshowPage from '../../pages/SlideshowPage';
import EditSlideshowsPage from '../../pages/EditSlideshowsPage';
import NewTestPage from '../../pages/Newtestpage';
import SlideshowListingPage from '../../pages/SlideshowListingPage/SlideshowListingPage';
import EditSlidesPage from '../../pages/EditSlidesPage/EditSlidesPage';
import SupportPage from '../../pages/SupportPage';
import AudioSettings from '../../pages/AudioSettingsPage';
import SubscribePage from '../../pages/SubscribePage';
import VideoSettings from '../../pages/VideoSettings';

//below are all the routes with their URLs (denoted by 'path') and the actual page component (child to each Route component)
const App_Router: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/VideoSettings" component={VideoSettings} />
      <Route exact path="/AudioGallery" component={AudioGallery} />
      <Route exact path="/SubscribePage" component={SubscribePage} />
      <Route exact path="/AudioSettings" component={AudioSettings} />
      <Route exact path="/SupportPage" component={SupportPage} />
      <Route exact path="/EditSlidesPage" component={EditSlidesPage} />
      <Route exact path="/SelectionPage" component={SlideshowListingPage} />
      <Route path="/slideshowpage" component={SlideshowPage} />
      <Route exact path="/" component={SlideshowPage} />
      <Route exact path="/EditSlideshowsPage" component={EditSlideshowsPage} />
      <Route exact path="/NewTestPage" component={NewTestPage} beforeEnter={() => console.log('entering')} beforeLeave={() => console.log('leaving')} />
      <Route exact path="/tab4" component={Tab4} />
      <Route exact path="/tab5" component={Tab5} />
    </IonRouterOutlet>
  );
}


export default App_Router;