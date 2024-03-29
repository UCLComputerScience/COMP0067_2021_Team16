// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is to be used to add new media.

import {
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonActionSheet,
} from "@ionic/react";
import "../Edit_Bar/Edit_Bar.css";
import { addCircleSharp, images } from "ionicons/icons";
import React, { useState } from "react";

const AddBar: React.FC = () => {
  const [showAddMenu, setShowAddMenu] = useState(false);

  return (
    <IonGrid className="ion-grid">
      <IonRow>
        <IonCol className="ion-column">
          <IonButton fill="clear" onClick={() => setShowAddMenu(true)}>
            <IonIcon icon={addCircleSharp} size="medium" />
          </IonButton>
        </IonCol>
      </IonRow>
      <IonActionSheet
        isOpen={showAddMenu}
        onDidDismiss={() => setShowAddMenu(false)}
        header="Add images"
        cssClass="my-custom-class"
        buttons={[
          {
            text: "Add from Gallery",
            icon: images,
            handler: () => {},
          },
        ]}
      ></IonActionSheet>
    </IonGrid>
  );
};

export default AddBar;
