import React, { useState } from "react";
import {
  IonModal,
  IonCol,
  IonButton,
  IonContent,
  IonPage,
  IonRow,
  IonHeader,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";
import { trash } from "ionicons/icons";

import RateApp from "../../components/RateApp/RateApp";
import "./SupportPage.css";

const SupportPage: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonRow>
              <BackButton />
              <IonCol className="ion-align-items-center ion-justify-content-center">
                <TitleBar name={"Support"} />
              </IonCol>
            </IonRow>
          </IonToolbar>
        </IonHeader>
        <div id="buttons">
          <IonRow>
            <IonModal isOpen={showModal} cssClass="my-custom-class">
              <IonButton onClick={() => setShowModal(false)} />
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/ylrelG3QQ4s"></iframe>
              </div>
            </IonModal>
            <IonButton routerLink="/SupportPage/Tutorial"> Tutorial </IonButton>
          </IonRow>
          <IonRow>
            <IonModal isOpen={showModal1} cssClass="my-custom-class">
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
              <div>
                <a href=" https://cosmicbabybooks.com/books">
                  Cosmic Baby Books
                </a>
              </div>

              <IonButton onClick={() => setShowModal1(false)}>
                Back to Support
              </IonButton>
            </IonModal>
            <IonButton routerLink="/SupportPage/ScienceBehindImages"> 
              Science Behind Images
            </IonButton>
          </IonRow>
          <IonRow>
            <IonModal isOpen={showModal2} cssClass="my-custom-class">
              <p>
                This app is based on the Best Sellers and most gifted books for
                newborns and infants on Amazon UK. Books are sold in Europe, US,
                Canada, Australia, Japan and India. Images and book concepts are
                created and hand drawn by Dr Iya Whiteley. Iya was inspired by
                her own children to introduce newborn babies to our beautiful
                Earth. Images represent the intricate beauty of our natural
                world, our human scientific, architectural and technological
                achievements and translated them into intricate mathematical
                design in babies' perceptual language, suitable from birth to
                100 years old. Grandparents love reading these books too!
              </p>
              <div>
                <a
                  href="https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8
                cosmicbabybooks.com"
                >
                  You can find it on Amazon!
                </a>
              </div>

              <IonButton onClick={() => setShowModal2(false)}>
                Back to Support
              </IonButton>
            </IonModal>
            <IonButton routerLink="/SupportPage/CosmicBabyBooks">
              Cosmic Baby Books
            </IonButton>
          </IonRow>
          <IonRow>
            <IonModal isOpen={showModal3} cssClass="my-custom-class">
              <p>
                Space Psychologist, Director of the Centre of Space Medicine,
                University College London, advising to the UK Space Agency. She
                developed training programmes for the astronaut class of Major
                Tim Peake, while working for European Space Agency at the
                European Astronaut Centre in Germany. As a Cognitive Engineer
                and Clinical Psychologist, she specialises in visual perception
                and design displays for highly skilled military pilots and
                astronauts. These top performers need to absorb information
                instantly and make effective decisions. Iya is a public speaker
                and presenter on radio and TV, for example, in BBC Science TV
                series with Astronaut Chris Hadfield and Dr Kevin Fong
                presenter, BBC Astronauts: Do you have what it takes?'. Iya runs
                workshops for public and academic.
              </p>
              <a href="https://cosmicbabybooks.com/about">
                More information on Dr Whiteley
              </a>

              <IonButton onClick={() => setShowModal3(false)}>
                Back to Support
              </IonButton>
            </IonModal>
            <IonButton routerLink="/SupportPage/DrIyaWhiteley">
              Dr Iya Whiteley
            </IonButton>
          </IonRow>
          {/* <RateApp /> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SupportPage;
