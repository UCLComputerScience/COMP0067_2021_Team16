import './Slideshow.css';
import porpitaprunella from '../../images/porpitaprunella.png';
import images from '../../images.json';
import Image from '../Image/Image';

interface ContainerProps {
  name: string;
}

const Slideshow: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      {images.map(image => (
      <Image 
      {...image} 
      />
      ))}
    </div>
  );
};

export default Slideshow;
