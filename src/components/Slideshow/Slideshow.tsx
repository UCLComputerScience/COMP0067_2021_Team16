import "./Slideshow.css";
import { IonGrid, IonRow, IonSlides, IonSlide, IonImg } from "@ionic/react";
import axios from "axios";
import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import Copyright from "../Copyright/Copyright";
import one from "../Copyright/images/asteroblastusstellatus.png";
import two from "../Copyright/images/porpitaprunella.png";
import three from "../Copyright/images/poliopogonamadou.png";
import four from "../Copyright/images/botryllusschlosseri.png";
import five from "../Copyright/images/cassiopeaandromeda.png";
import six from "../Copyright/images/hemipholiscordifera.png";
import seven from "../Copyright/images/centrostephanuslongispinus.png";
import eight from "../Copyright/images/nautiluspompilius.png";
import nine from "../Copyright/images/haeckelianaporcellana.png";
import ten from "../Copyright/images/cannorrhizaconnexa.png";
import eleven from "../Copyright/images/nausithoechallengeri.png";
import twelve from "../Copyright/images/solmaris.png";

// const apiKEY = "BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
// const endpoint = `https://api.giphy.com/v1/gifs/search?q=friends&api_key=${apiKEY}`;

// const sendGetRequest = () => {
//   return axios({
//     url: endpoint,
//     method: "GET",
//   }).then((response) => {
//     console.log(response);
//     return response.data;
//   });
// };

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoplay: true,
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
  // const [items, setItems] = React.useState([]);
  // React.useEffect(() => {
  //   sendGetRequest().then((data) => setItems(data.data));
  // }, []);

  return (
    <IonSlides pager={false} options={slideOpts} className="background">
      {images.map((item, i) => (
        <IonSlide key={i}>
          <IonGrid>
            <IonRow className="titlerow">
              <TitleBar name={item.name} />
            </IonRow>
            <IonRow className="imagerow">
              <IonImg
                key={i}
                src={item.image}
                className="spinner rotate"
              />
            </IonRow>
            <IonRow className="copyrightrow">
              <Copyright />
            </IonRow>
          </IonGrid>
        </IonSlide>
      ))}
    </IonSlides>
  );
};

export default Slideshow;
