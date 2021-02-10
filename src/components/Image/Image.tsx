import './Image.css';
import porpita from './images/porpitaprunella.png';

interface ContainerProps {
  image: string;
}

const Image: React.FC<ContainerProps> = ({ image }) => {
  return (
    <div className="container">
        <img src={porpita} className="spinner rotate" />
    </div>
  );
};

export default Image;
