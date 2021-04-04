import { IonPage } from "@ionic/react";
import React from "react";

import "./Tutorial.css"; 

const Tutorial: React.FC = () => {
    return(<IonPage>
        <p>
                Images developed based on the current scientific findings on
                newborns and BABIES’ visual perception and brain development:
                <li>
                  Improve concentration through stimulating and captivating
                  images
                </li>
                <li>Stimulate further learning and discovery </li>
                <li>
                  Create and maintain new pathways in the brain through learning
                  to trace visual patterns
                </li>
                <li>
                  Acquire early life skills essential for successful learning
                  and interaction. Children have more brain pathways than
                  adults. Brain pathways die way if they are not used. Further
                  research on newborn and infant development is on-going in the
                  world’s top neonatal unit. Images are designed to assist
                  specific stages of development during the first year. Look out
                  for apps for four developmental stages.
                </li>
              </p>
    </IonPage>);
}

export default Tutorial;