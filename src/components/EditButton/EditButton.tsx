// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is to be used to edit slides within a slideshow.

import {IonButton, IonIcon} from "@ionic/react";
import {create, arrowBack} from 'ionicons/icons';
import React, { useState } from 'react';

interface tester{
  toggleEdit:Function
}


const EditButton: React.FC<tester> = (props) => {
  const [editing, setediting] = useState<boolean>(false);
  const [ButtonIcon, setButtonIcon] = useState<string>(create);

  function clickfunc(){
    if (editing){
      setButtonIcon(create);
      props.toggleEdit(false);
    }
    else{
      setButtonIcon(arrowBack);
      props.toggleEdit(true);
    }
    setediting(prevediting => !prevediting);
  }

  return(<IonButton fill='clear' onClick={clickfunc}><IonIcon icon={ButtonIcon} size="large"/></IonButton>);

}

export default EditButton;
