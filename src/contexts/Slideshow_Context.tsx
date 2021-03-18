import Slideshow_Class from '../classes/Slideshow_Class';
import React,{useState,useContext} from 'react';
import {Access_Database} from './Database_Context';

//creating React contexts
const Selected_Slideshow = React.createContext(null);
const Update_Selected_Slideshow = React.createContext(null);
const Slideshow_List = React.createContext(null);

//exporting those React contexts
export function Selected_Slideshow_Context(){return useContext(Selected_Slideshow);}
export function Update_Selected_Slideshow_Context(){return useContext(Update_Selected_Slideshow);}
export function Access_Slideshow_List(){return useContext(Slideshow_List);}

//access default/stored slideshows here
let one = new Slideshow_Class('one',0,true);
let two = new Slideshow_Class('two',1,true);
let three = new Slideshow_Class('three',2,true);
let four = new Slideshow_Class('four',3,true);
let five = new Slideshow_Class('five',4,true);
let SlideshowList = [one,two,three,four,five];

//interface for Provider
interface ContainerProps{
    children: any;
}

//provider
export const SlideshowProvider: React.FC<ContainerProps> = ({children}) => {
    /*
    async function get_slideshows(db) {

        let SlideshowList;
        try{
            let sqldata = await db.executeSql(`SELECT * FROM Slideshow ORDER BY slideshow_order`);
            SlideshowList = sqldata.map((item,i)=>(new Slideshow_Class(item[1],item[2],true)));
        }
        catch{
            SlideshowList =[];
        }
        return SlideshowList;
    }
    
    const Database = Access_Database()

    SlideshowList = await get_slideshows(Database);*/

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