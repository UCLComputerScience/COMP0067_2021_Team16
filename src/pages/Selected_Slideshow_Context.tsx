import Slideshow_Class from '../components/Slideshow_Items/Slideshow_Class';
import React,{useState,useContext} from 'react';

const Selected_Slideshow = React.createContext(null);
const Update_Selected_Slideshow = React.createContext(null);

interface ContainerProps{
    children: any;
}

export function Selected_Slideshow_Context(){
    return useContext(Selected_Slideshow);
}

export function Update_Selected_Slideshow_Context(){
    return useContext(Update_Selected_Slideshow);
}


export const SelectedSlideshowProvider: React.FC<ContainerProps> = ({children}) => {

    const [SelectedSlideshow,UpdateSelectedSlideshow] = useState<Object>(new Slideshow_Class(null,null,true));

    function updateSelectedSlideshow(Slideshow:object){
        //console.log("Selected Slideshow: ", Slideshow);
        UpdateSelectedSlideshow(Slideshow);
    }

    return(
        <Selected_Slideshow.Provider value={SelectedSlideshow}>
            <Update_Selected_Slideshow.Provider value = {updateSelectedSlideshow}>
                {children}
            </Update_Selected_Slideshow.Provider>
        </Selected_Slideshow.Provider>

    );


}