import React, { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";
import RateApp from "../../components/RateApp/RateApp";

const SupportPage: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackButton />
        <TitleBar name={"Support"} />
        <iframe src="https://www.youtube.com/embed/e7yg0A-PCTI"></iframe>
        {/* <iframe src="https://www.youtube.com/embed/ylrelG3QQ4s"></iframe> */}
        <RateApp />
        <h1>Science Behind Images</h1>
        <p>
          Images developed based on the current scientific findings on newborns
          and BABIES’ visual perception and brain development.
          <li>
            Improve concentration through stimulating and captivating images.{" "}
          </li>
          <li>Stimulate further learning and discovery. </li>
          <li>
            Create and maintain new pathways in the brain through learning to
            trace visual patterns.
          </li>
          <li>
            Acquire early life skills essential for successful learning and
            interaction. Children have more brain pathways than adults. Brain
            pathways die way if they are not used. Further research on newborn
            and infant development is on-going in the world’s top neonatal unit.
            Images are designed to assist specific stages of development during
            the first year. Look out for apps for four developmental stages.
          </li>
        </p>
        <h1>Cosmic Baby Books (cosmicbabybooks.com)</h1>
        <p>
          This app is based on the Best Sellers and most gifted books for
          newborns and infants on Amazon UK. Books are sold in Europe, US,
          Canada, Australia, Japan and India. Images and book concepts are
          created and hand drawn by Dr Iya Whiteley. Iya was inspired by her own
          children to introduce newborn babies to our beautiful Earth. Images
          represent the intricate beauty of our natural world, our human
          scientific, architectural and technological achievements and
          translated them into intricate mathematical design in babies'
          perceptual language, suitable from birth to 100 years old.
          Grandparents love reading these books too! (Can we include here an
          Amazon symbol or link to amazon page?)
          https://www.amazon.co.uk/Iya-Whiteley/e/B01EX2F9N8?ref=sr_ntt_srch_lnk_2&qid=1612645570&sr=8-2
        </p>
        <h1>Dr Iya Whiteley (www.iyawhiteley.com)</h1>
        <p>
          Space Psychologist, Director of the Centre of Space Medicine,
          University College London, advising to the UK Space Agency. She
          developed training programmes for the astronaut class of Major Tim
          Peake, while working for European Space Agency at the European
          Astronaut Centre in Germany. As a Cognitive Engineer and Clinical
          Psychologist, she specialises in visual perception and design displays
          for highly skilled military pilots and astronauts. These top
          performers need to absorb information instantly and make effective
          decisions. Iya is a public speaker and presenter on radio and TV, for
          example, in BBC Science TV series with Astronaut Chris Hadfield and Dr
          Kevin Fong presenter, BBC Astronauts: Do you have what it takes?'. Iya
          runs workshops for public and academic.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default SupportPage;
