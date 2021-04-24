import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
} from "@ionic/react";
import React from "react";
import "./TheScience.css";
import TitleBar from "../../../components/TitleBar/TitleBar";

const TheScience: React.FC = () => {
  return (
    <IonPage>
      <TitleBar name="The Science" />
      <IonContent>
        <h3>
          Images developed based on the current scientific findings on newborns
          and babies’ visual perception and brain development:
          <IonGrid>
            <IonRow>
              <IonCol>
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/concentration.png"
                  }
                  alt="Improve concentration"
                />
                <b>Improve concentration</b> through stimulating and captivating
                images
              </IonCol>
              <IonCol>
                <img
                  src={process.env.PUBLIC_URL + "assets/images/learning.png"}
                  alt="Stimulate learning"
                />
                <b>Stimulate</b> further learning and discovery
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img
                  src={process.env.PUBLIC_URL + "assets/images/pathways.png"}
                  alt="Create new pathways"
                />
                <b>Create and maintain new pathways in the brain</b> through
                learning to trace visual patterns
              </IonCol>
              <IonCol>
                <img
                  src={process.env.PUBLIC_URL + "assets/images/skills.png"}
                  alt="Acquire early life skills"
                />
                <b>Acquire early life skills</b> essential for successful
                learning and interaction.
              </IonCol>
            </IonRow>
          </IonGrid>
          <br />
          Children have more brain pathways than adults. Brain pathways die way
          if they are not used. Further research on newborn and infant
          development is on-going in the world’s top neonatal unit.
          <br />
          <br /> Images are designed to assist specific stages of development
          during the first year. Look out for apps for four developmental
          stages.
        </h3>
        <h1>
          <a href="https://cosmicbabybooks.com/books">
            <b>Learn more about Cosmic Baby Books!</b>
          </a>
        </h1>
      </IonContent>
    </IonPage>
  );
};

export default TheScience;
