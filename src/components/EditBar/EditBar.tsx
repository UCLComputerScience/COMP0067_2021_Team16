// The code written below is unused in the current version of the application. It has been left in the repository because it is intended for future features.

// This component is to be used to edit slideshows.

import {
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonAlert,
  IonActionSheet,
} from "@ionic/react";
import "./EditBar.css";
import {
  addCircleSharp,
  trash,
  checkmarkCircle,
  checkmarkCircleOutline,
  micSharp,
  images,
} from "ionicons/icons";
import React, { useState } from "react";

interface ContainerProps {
  slides: object[];
  check_all: Function;
  uncheck_all: Function;
}

const EditBar: React.FC<ContainerProps> = (props) => {
  const [deletealert, setDeleteAlert] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);

  return (
    <IonGrid className="ion-grid">
      <IonRow>
        <IonCol className="ion-column">
          <IonButton
            fill="clear"
            className="ion-button"
            onClick={props.check_all}
          >
            <IonIcon icon={checkmarkCircle} size="large" />
          </IonButton>
        </IonCol>
        <IonCol className="ion-column">
          <IonButton fill="clear" onClick={props.uncheck_all}>
            <IonIcon icon={checkmarkCircleOutline} size="large" />
          </IonButton>
        </IonCol>
        <IonCol className="ion-column">
          <IonButton fill="clear" onClick={() => setShowAddMenu(true)}>
            <IonIcon icon={addCircleSharp} size="large" />
          </IonButton>
        </IonCol>
        <IonCol className="ion-column">
          <IonButton fill="clear">
            <IonIcon icon={micSharp} size="large" />
          </IonButton>
        </IonCol>
        <IonCol className="ion-column">
          <IonButton fill="clear" onClick={() => setDeleteAlert(true)}>
            <IonIcon icon={trash} size="large" />
          </IonButton>
        </IonCol>
      </IonRow>
      <IonAlert
        isOpen={deletealert}
        onDidDismiss={() => setDeleteAlert(false)}
        header={"Delete"}
        message={
          "Are you sure you want to delete these folders from you slideshow?"
        }
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {},
          },
          {
            text: "Okay",
            handler: () => {},
          },
        ]}
      />
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

export default EditBar;
