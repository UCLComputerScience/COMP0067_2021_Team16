// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is to be used to add new slideshows.

import {IonButton,IonIcon} from '@ionic/react';
import {addCircleSharp} from 'ionicons/icons';
import {UpdateSelectedSlideshowContext} from '../../contexts/SlideshowContext';
import SlideshowClass from '../../classes/SlideshowClass';

const AddNewSlideshow: React.FC = () =>{
    const Update_Sel_Slideshow = UpdateSelectedSlideshowContext();

    function whenclicked(){
        const new_Slideshow = new SlideshowClass(null,null,true,null);
        Update_Sel_Slideshow(new_Slideshow);
    }
    
    return(
        <IonButton fill='clear' className='addbutton' routerLink='/EditSlidesPage' onClick={()=>whenclicked()}>
            <IonIcon icon={addCircleSharp} className='addicon'/>
        </IonButton>
    );
}

export default AddNewSlideshow;