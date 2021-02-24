import {IonButton,IonIcon} from '@ionic/react';
import {addCircleSharp} from 'ionicons/icons';
import {Update_Selected_Slideshow_Context} from '../../pages/Selected_Slideshow_Context';
import Slideshow_Class from '../Slideshow_Items/Slideshow_Class';

const AddNewSlideshow: React.FC = () =>{
    const Update_Sel_Slideshow = Update_Selected_Slideshow_Context();
    
    return(
        <IonButton fill='clear' className='addbutton' routerLink='/EditSlidesPage' onClick={()=>Update_Sel_Slideshow(new Slideshow_Class(null,null,true))}>
            <IonIcon icon={addCircleSharp} className='addicon'/>
        </IonButton>
    );
}

export default AddNewSlideshow;