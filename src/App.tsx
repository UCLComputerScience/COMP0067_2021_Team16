import {IonApp, IonRouterOutlet} from '@ionic/react';
import AppRouter from './components/AppRouter/AppRouter';
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
import {SlideshowProvider} from './contexts/SlideshowContext';
import {SettingsProvider} from './contexts/SettingsContext';
import {DatabaseProvider} from './contexts/DatabaseContext';


const App: React.FC = () => {

  return (
    <IonApp>
      <DatabaseProvider>
        <SettingsProvider>
          <SlideshowProvider>
            <IonReactRouter>
              <IonRouterOutlet><AppRouter/></IonRouterOutlet>
            </IonReactRouter>
          </SlideshowProvider>
        </SettingsProvider>
      </DatabaseProvider>
    </IonApp>
  );
}

export default App;
