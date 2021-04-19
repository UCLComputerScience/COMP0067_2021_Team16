// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is to be used to add new slideshows.

import {IonButton,IonIcon} from '@ionic/react';
import {addCircleSharp} from 'ionicons/icons';
import {Update_Selected_Slideshow_Context} from '../../contexts/Slideshow_Context';
import Slideshow_Class from '../../classes/Slideshow_Class';

const AddNewSlideshow: React.FC = () =>{
    const Update_Sel_Slideshow = Update_Selected_Slideshow_Context();

    function whenclicked(){
        const new_Slideshow = new Slideshow_Class(null,null,true);
        Update_Sel_Slideshow(new_Slideshow);
    }
    
    return(
        <IonButton fill='clear' className='addbutton' routerLink='/EditSlidesPage' onClick={()=>whenclicked()}>
            <IonIcon icon={addCircleSharp} className='addicon'/>
        </IonButton>
    );
}

export default AddNewSlideshow;