import { IonRange, IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { sunny } from "ionicons/icons";

const Slider: React.FC = () => {
  const rangestart = 0;
  const rangeend = 100;
  
  const [value, setValue] = useState(rangestart);

  function resetfunc(){
    if(value < rangeend){
      setValue(rangestart);
    }
  }

  function valuehandler(e){
    const number = e.detail.value as number;
    setValue(number);
  }
  
  return (
    <IonRange className="slider" min={rangestart} max={rangeend} value={value} onIonChange={e => valuehandler(e)} onMouseUp={resetfunc}>
        <IonIcon size="small" slot="start" icon={sunny} />
        <IonIcon slot="end" icon={sunny} />
  </IonRange>
  );
};

export default Slider;
