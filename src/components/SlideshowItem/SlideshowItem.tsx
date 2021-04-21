import "./SlideshowItem.css";
import "@ionic/react";
import {
  IonItem,
  IonLabel,
  IonReorder,
  IonCheckbox,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { UpdateSelectedSlideshowContext } from "../../contexts/SlideshowContext";

interface ContainerProps {
  item;
  editing: boolean;
}

let itemlinks = ["/slideshowpage", "EditSlidesPage"];

const SlideshowItem: React.FC<ContainerProps> = (props) => {
  const [link, setLink] = useState<string>(itemlinks[0]);
  const slideshow_updater = UpdateSelectedSlideshowContext();

  function select_slideshow(){
    slideshow_updater(props.item);
    localStorage.setItem("selected_slideshow",JSON.stringify(props.item));
  }

  function toggleslideshow() {
    props.item.enabled = !props.item.enabled;
  }

  useEffect(() => {
    props.editing ? setLink(itemlinks[1]) : setLink(itemlinks[0]);
  }, [props.editing]);

  return (
    <IonItem>
      <IonLabel>
        <IonGrid>
          <IonRow>
            <IonCol className="checkcontainer">
              {props.editing ? (
                <IonCheckbox
                  checked={props.item.enabled}
                  className="checkbox"
                  onIonChange={toggleslideshow}
                />
              ) : null}
            </IonCol>
            <IonCol className="slidename">
              <IonButton
                fill="clear"
                routerLink={link}
                onClick={select_slideshow}>
                <h1 className="slideshow-name-listings"><b>{props.item.slideshow_name}</b></h1>
              </IonButton>
            </IonCol>
            <IonCol className="reordergrabber">
              {props.editing ? <IonReorder className="grabicon" /> : null}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonLabel>
    </IonItem>
  );
};

export default SlideshowItem;
