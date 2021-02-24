import { IonRange, IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { sunny } from "ionicons/icons";
import "./Slider.css";

const Slider: React.FC = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <IonRange>
        <IonIcon size="small" slot="start" icon={sunny} />
        <IonIcon slot="end" icon={sunny} />
      </IonRange>
    </div>
  );
};

export default Slider;
