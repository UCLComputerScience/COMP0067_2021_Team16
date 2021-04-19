import SlideshowClass from '../classes/SlideshowClass';
import React,{useState,useContext} from 'react';

//creating React contexts
const Selected_Slideshow = React.createContext(null);
const Update_Selected_Slideshow = React.createContext(null);
const Default_Slideshow = React.createContext(null);
const Update_Default_Slideshow = React.createContext(null);

//exporting those React contexts
export function SelectedSlideshowContext(){return useContext(Selected_Slideshow)}
export function UpdateSelectedSlideshowContext(){return useContext(Update_Selected_Slideshow)}
export function DefaultSlideshowContext(){return useContext(Default_Slideshow)}
export function UpdateDefaultSlideshowContext(){return useContext(Update_Default_Slideshow)}

//interface for Provider
interface ContainerProps{
    children: any;
}

//provider
export const SlideshowProvider: React.FC<ContainerProps> = ({children}) => {

    function instantiate_default_slideshow(){
        if(localStorage.getItem("default_slideshow")){
            
        }
        else{
            return new SlideshowClass("all",null,true,1);
        }
    }

    const [defaultSlideshow,UpdateDefaultSlideshow] = useState<Object>(instantiate_default_slideshow);

    const [SelectedSlideshow,UpdateSelectedSlideshow] = useState(null);

    function updateSelectedSlideshow(Slideshow:object){
        UpdateSelectedSlideshow(Slideshow);
    }

    return(
        <Default_Slideshow.Provider value={defaultSlideshow}>
            <Update_Default_Slideshow.Provider value={UpdateDefaultSlideshow}>
                <Selected_Slideshow.Provider value={SelectedSlideshow}>
                    <Update_Selected_Slideshow.Provider value = {updateSelectedSlideshow}>
                        {children}
                    </Update_Selected_Slideshow.Provider>
                </Selected_Slideshow.Provider>
            </Update_Default_Slideshow.Provider>
        </Default_Slideshow.Provider>
    );

}