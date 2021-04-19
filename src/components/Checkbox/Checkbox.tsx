// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is to be used in the media galleries.

import React, { useState } from 'react';
import { IonCheckbox, IonList, IonItem, IonLabel } from '@ionic/react';

const checkboxList = [
  { val: 'All Images', isChecked: true },
  { val: 'Sea Creatures Skeletons', isChecked: false },
  { val: 'Floating Sea Animals', isChecked: false },
  { val: 'Seafloor Animals', isChecked: false },
  { val: 'Jellyfish', isChecked: false }
];

const Checkbox: React.FC = () => {

  const [checked, setChecked] = useState(false);

  return (
        <IonList>
          {checkboxList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} />
            </IonItem>
          ))}
        </IonList>
  );
};

export default Checkbox;