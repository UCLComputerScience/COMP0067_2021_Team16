//import SettingsClass from '../classes/SettingsClass';
import React,{useContext} from 'react';
import "../classes/SettingsClass";
import SettingsClass from '../classes/SettingsClass';


//put default values below
const Settings_object = new SettingsClass()

const Settings = React.createContext(null);

interface ContainerProps{
    children: any;
}

export function SettingsContext(){
    return useContext(Settings);
}

export const SettingsProvider: React.FC<ContainerProps> = ({children}) => {
    return(
        <Settings.Provider value={Settings_object}>
                {children}
        </Settings.Provider>
    );
}