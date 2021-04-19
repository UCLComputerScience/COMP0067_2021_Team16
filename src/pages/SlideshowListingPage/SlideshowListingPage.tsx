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
import Nav_Bar from "../../components/Nav_Bar/Nav_Bar";
import { settings } from "ionicons/icons";
import "./SlideshowListingPage.css";
import Slideshow_Items from "../../components/Slideshow_Items/Slideshow_Items";
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
                <IonButton fill="clear" routerLink="/AudioSettings">
                  <IonIcon icon={settings} size="large" />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Slideshow_Items Editing={editMode} />
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
              <Nav_Bar />
            </IonRow>
          )}
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default SelectionPage;
