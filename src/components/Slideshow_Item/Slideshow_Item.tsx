import "./Slideshow_Item.css";
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
import { Update_Selected_Slideshow_Context } from "../../contexts/Slideshow_Context";

interface ContainerProps {
  item: object;
  editing: boolean;
}

let itemlinks = ["/slideshowpage", "EditSlidesPage"];

const Slideshow_Item: React.FC<ContainerProps> = (props) => {
  const [link, setLink] = useState<string>(itemlinks[0]);
  const slideshow_updater = Update_Selected_Slideshow_Context();

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
                onClick={() => slideshow_updater(props.item)}
              >
                <h2>{props.item.name}</h2>
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

export default Slideshow_Item;
