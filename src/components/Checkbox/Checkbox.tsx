import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonList, IonItem, IonLabel, IonItemDivider } from '@ionic/react';

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