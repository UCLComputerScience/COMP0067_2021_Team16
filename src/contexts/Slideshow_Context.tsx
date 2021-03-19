import Slideshow_Class from '../classes/Slideshow_Class';
import React,{useState,useContext} from 'react';
import {get_slideshows} from './Database_Context';

//creating React contexts
const Selected_Slideshow = React.createContext(null);
const Update_Selected_Slideshow = React.createContext(null);
const Slideshow_List = React.createContext(null);

//exporting those React contexts
export function Selected_Slideshow_Context(){return useContext(Selected_Slideshow);}
export function Update_Selected_Slideshow_Context(){return useContext(Update_Selected_Slideshow);}
export function Access_Slideshow_List(){return useContext(Slideshow_List);}

//access default/stored slideshows here
let SlideshowList = async () => {await get_slideshows().then((data)=>{return data});} 

//interface for Provider
interface ContainerProps{
    children: any;
}

//provider
export const SlideshowProvider: React.FC<ContainerProps> = ({children}) => {

    const [SelectedSlideshow,UpdateSelectedSlideshow] = useState<Object>(new Slideshow_Class(null,null,true));

    function updateSelectedSlideshow(Slideshow:object){
        UpdateSelectedSlideshow(Slideshow);
    }

    return(
        <Selected_Slideshow.Provider value={SelectedSlideshow}>
            <Update_Selected_Slideshow.Provider value = {updateSelectedSlideshow}>
                <Slideshow_List.Provider value={SlideshowList}>
                    {children}
                </Slideshow_List.Provider>
            </Update_Selected_Slideshow.Provider>
        </Selected_Slideshow.Provider>

    );

}