import {
  IonButton,
  IonIcon,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import NavBar from "../../components/NavBar/NavBar";
import { settings } from "ionicons/icons";
import "./SlideshowListingPage.css";
import SlideshowItems from "../../components/SlideshowItems/SlideshowItems";
import React, { useState } from "react";
import AddNewSlideshow from "../../components/AddNewSlideshow/AddNewSlideshow";
// import EditButton from "../../components/EditButton/EditButton";

const SelectionPage: React.FC = () => {
  const [editMode,
    // setEditMode
  ] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <EditButton toggleEdit={setEditMode} slot="start" /> */}
          <IonTitle>
            {editMode ? "Edit Slideshows" : "Select Slideshow"}
          </IonTitle>
          <IonButton fill="clear" routerLink="/Settings" slot="end">
            <IonIcon icon={settings} size="large" />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SlideshowItems Editing={editMode} />
      </IonContent>
      );
      <IonFooter className="bar-footer">
        <IonGrid>
          {editMode ? (
            <IonRow className="buttoncontainer">
              <AddNewSlideshow />
            </IonRow>
          ) : null}
          {editMode ? null : (
            <IonRow>
              <NavBar />
            </IonRow>
          )}
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default SelectionPage;
