import './Slideshow.css';
import porpita from '../../images/porpita.png';

interface ContainerProps {
  name: string;
}

const Slideshow: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <img src={porpita} className="spinner rotate" />
    </div>
  );
};

export default Slideshow;
