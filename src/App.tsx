import {IonApp, IonRouterOutlet} from '@ionic/react';
import App_Router from './components/App_Router/App_Router';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React from 'react';

/* Context variables*/
import {SlideshowProvider} from './contexts/Slideshow_Context';
import {SettingsProvider} from './contexts/Settings_Context';
import {DatabaseProvider} from './contexts/Database_Context';


const App: React.FC = () => {

  return (
    <IonApp>
      <DatabaseProvider>
        <SettingsProvider>
          <SlideshowProvider>
            <IonReactRouter>
              <IonRouterOutlet><App_Router/></IonRouterOutlet>
            </IonReactRouter>
          </SlideshowProvider>
        </SettingsProvider>
      </DatabaseProvider>
    </IonApp>
  );
}

export default App;
