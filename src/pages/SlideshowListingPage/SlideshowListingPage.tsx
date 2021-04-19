import {
  IonCol,
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

const SelectionPage: React.FC = () => {
  const [editMode] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol className="editbutton">
                {
                  // <Edit_Button toggleEdit={setEditMode}/>
                }
              </IonCol>
              <IonCol size="8" className="title">
                <IonTitle>
                  {editMode ? "Edit Slideshows" : "Select Slideshow"}
                </IonTitle>
              </IonCol>
              <IonCol className="settingsbutton">
                <IonButton fill="clear" routerLink="/Settings">
                  <IonIcon icon={settings} size="large" />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
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
