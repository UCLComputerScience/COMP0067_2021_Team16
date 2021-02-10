import "./Slideshow.css";
import { IonSlides, IonSlide } from "@ionic/react";
import TitleBar from "../TitleBar/TitleBar";
import Copyright from "../Copyright/Copyright";
import one from "../Image/images/asteroblastusstellatus.png";
import two from "../Image/images/porpitaprunella.png";
import three from "../Image/images/poliopogonamadou.png";
import four from "../Image/images/botryllusschlosseri.png";
import five from "../Image/images/cassiopeaandromeda.png";
import six from "../Image/images/hemipholiscordifera.png";
import seven from "../Image/images/centrostephanuslongispinus.png";
import eight from "../Image/images/nautiluspompilius.png";
import nine from "../Image/images/haeckelianaporcellana.png";
import ten from "../Image/images/cannorrhizaconnexa.png";
import eleven from "../Image/images/nausithoechallengeri.png";
import twelve from "../Image/images/solmaris.png";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const images = [
  {
    id: 1,
    type: "default",
    name: "ASTEROBLASTUS STELLATUS",
    image: one,
  },
  {
    id: 2,
    type: "default",
    name: "PORPITA PRUNELLA",
    image: two,
  },
  {
    id: 3,
    type: "default",
    name: "POLIOPOGON AMADOU",
    image: three,
  },
  {
    id: 4,
    type: "default",
    name: "BOTRYLLUS SCHLOSSERI",
    image: four,
  },
  {
    id: 5,
    type: "default",
    name: "CASSIOPEA ANDROMEDA",
    image: five,
  },
  {
    id: 6,
    type: "default",
    name: "HEMIPHOLIS CORDIFERA",
    image: six,
  },
  {
    id: 7,
    type: "default",
    name: "CENTROSTEPHANUS LONGISPINUS",
    image: seven,
  },
  {
    id: 8,
    type: "default",
    name: "NAUTILUS POMPILIUS",
    image: eight,
  },
  {
    id: 9,
    type: "default",
    name: "HAECKELIANA PORCELLANA",
    image: nine,
  },
  {
    id: 10,
    type: "default",
    name: "CANNORRHIZA CONNEXA",
    image: ten,
  },
  {
    id: 11,
    type: "default",
    name: "NAUSITHOE CHALLENGERI",
    image: eleven,
  },
  {
    id: 12,
    type: "default",
    name: "SOLMARIS",
    image: twelve,
  },
];

const Slideshow: React.FC = () => {
  return (
    <div className="container">
      <IonSlides pager={false} options={slideOpts}>
        {images.map(({ id, name, image }, i) => (
          <IonSlide>
            <TitleBar name={name} />
            <img src={image} className="spinner rotate" />
            {/* <Image key={i} id={id} image={image} /> */}
            <Copyright />
          </IonSlide>
        ))}
      </IonSlides>
    </div>
  );
};

export default Slideshow;
