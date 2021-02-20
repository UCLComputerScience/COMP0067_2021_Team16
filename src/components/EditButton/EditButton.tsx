import {IonButton, IonIcon} from "@ionic/react";
import "./EditButton.css";
import {create, arrowBack} from 'ionicons/icons';
import React, { useState } from 'react';


const EditButton: React.FC = (props) => {
  const [editing, setediting] = useState<boolean>(false);
  const [ButtonIcon, setButtonIcon] = useState<string>(create);

  function clickfunc(){
    if (editing){
      setButtonIcon(create);
      //props.toggleEdit(false);
    }
    else{
      setButtonIcon(arrowBack);
      //props.toggleEdit(true);
    }
    setediting(prevediting => !prevediting);
  }

  return(<IonButton fill='clear' onClick={clickfunc}><IonIcon icon={ButtonIcon} size="large"/></IonButton>);

}

export default EditButton;
