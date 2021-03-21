//import Settings_Class from '../classes/Settings_Class';
import React,{useContext} from 'react';
import "../classes/Settings_Class";
import Settings_Class from '../classes/Settings_Class';


//put default values below
const Settings_object = new Settings_Class()

const Settings = React.createContext(null);

interface ContainerProps{
    children: any;
}

export function Settings_Context(){
    return useContext(Settings);
}

export const SettingsProvider: React.FC<ContainerProps> = ({children}) => {
    return(
        <Settings.Provider value={Settings_object}>
                {children}
        </Settings.Provider>
    );
}