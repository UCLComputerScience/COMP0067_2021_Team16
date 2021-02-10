import './Image.css';
import porpita from './images/porpitaprunella.png';
const baseURL = "./images/";

interface ContainerProps {
  image: string;
}

const Image: React.FC<ContainerProps> = ({ image }) => {
    console.log(baseURL + image)
  return (
    <div className="container">
        {/* <img src={porpita} className="spinner rotate" /> */}
      <img src={image} className="spinner rotate" />
    </div>
  );
};

export default Image;
