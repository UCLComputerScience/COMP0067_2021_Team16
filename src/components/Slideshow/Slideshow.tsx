import "./Slideshow.css";
import { IonGrid, IonRow, IonSlides, IonSlide } from "@ionic/react";
// import { IonRangeSlider } from 'react-ion-slider'
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

  // Promise call

  // $.post_ajax("https://reqres.in/api/users?page=2").then(return "SUCCESS").error( return "FAIL");\

//   public  getProductById(productId: number): Observable<Product> {

// return  this.httpClient

// .get(this.baseUrl + '/products/' + productId)

// .map(response  => {

// return  new  Product(response);

// })

// .catch((err)=>{

// console.error(err);

// });

// }

// baseurl:https://reqres.in/api 
// products= "/users" ?page=2

  return (
      
        <IonSlides pager={false} options={slideOpts}>
          {images.map(({ id, name, image }, i) => (
            <IonSlide key={i}>
              <IonGrid>
                <IonRow className='titlerow'>
                  <TitleBar name={name} />
                </IonRow>
                <IonRow className='imagerow'>
                  <img key={i} src={image} className="spinner rotate" />
                  {/* <Image key={i} id={id} image={image} /> */}
                  {/* <IonRangeSlider type={"single"} min={10} max={100} from={0} to={10} step={1} values={[]} keyboard={true} /> */}
                </IonRow>
                <IonRow className='copyrightrow'>
                  <Copyright />
                </IonRow>
              </IonGrid>
            </IonSlide>
          ))}
        </IonSlides>
  );
};

export default Slideshow;
