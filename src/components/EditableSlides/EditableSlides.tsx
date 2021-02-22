import {IonIcon, IonCheckbox} from '@ionic/react';
import {musicalNotes} from 'ionicons/icons';

interface ContainerProps {
    slide: object;
}

const Editableslide: React.FC<ContainerProps> = (props) => {
    return(
        <span className='slidecontainer'>
            <IonCheckbox checked={props.slide.selected} className='checkbox'/>
            {props.slide.recording || props.slide.default_recording ? <IonIcon icon={musicalNotes} className='music'/>:null}
            <img src={props.slide.src} key={props.slide.name} className='image'/>
        </span>
    );

}

export default Editableslide;