import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonRouterOutlet} from '@ionic/react';

//Import all your pages here
import AudioGallery from '../../pages/AudioGallery/AudioGallery';
import SlideshowPage from '../../pages/SlideshowPage/SlideshowPage';
import SlideshowListingPage from '../../pages/SlideshowListingPage/SlideshowListingPage';
// import EditSlidesPage from '../../pages/EditSlidesPage/EditSlidesPage';
import SupportPage from '../../pages/SupportPage/SupportPage';
import Settings from '../../pages/Settings/SettingsPage';
import SubscribePage from '../../pages/SubscribePage/SubscribePage';
// import ImageGallery from '../../pages/ImageGallery/ImageGallery';
import RecordAudio from '../../pages/RecordAudio/RecordAudio';
import Tutorial from '../../pages/SupportPage/Tutorial/Tutorial';
import CosmicBabyBooks from '../../pages/SupportPage/CosmicBabyBooks/CosmicBabyBooks';
import DrIyaWhiteley from '../../pages/SupportPage/DrIyaWhiteley/DrIyaWhiteley';
import TheScience from '../../pages/SupportPage/TheScience/TheScience';

//below are all the routes with their URLs (denoted by 'path') and the actual page component (child to each Route component)
const AppRouter: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/AudioGallery" component={AudioGallery} />
      <Route exact path="/SubscribePage" component={SubscribePage} />
      <Route exact path="/Settings" component={Settings} />
      <Route exact path="/SupportPage" component={SupportPage} />
      {/* <Route exact path="/EditSlidesPage" component={EditSlidesPage} /> */}
      <Route exact path="/SelectionPage" component={SlideshowListingPage} />
      {/* <Route exact path="/ImageGallery" component={ImageGallery} /> */}
      <Route exact path="/RecordAudio" component={RecordAudio} />
      <Route exact path="/slideshowpage" component={SlideshowPage} />
      <Route exact path="/SupportPage/Tutorial" component={Tutorial} />
      <Route exact path="/SupportPage/CosmicBabyBooks" component={CosmicBabyBooks} />
      <Route exact path="/SupportPage/DrIyaWhiteley" component={DrIyaWhiteley} />
      <Route exact path="/SupportPage/TheScience" component={TheScience} />
      <Redirect exact from="/" to="/slideshowpage"/>
    </IonRouterOutlet>
  );
}


export default AppRouter;