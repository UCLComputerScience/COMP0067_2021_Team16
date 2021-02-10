import './Image.css';

interface ContainerProps {
  key: number;
  id: number;
  image: string;
}

const Image: React.FC<ContainerProps> = ({ image }) => {
  return (
    <div className="container">
        <img src={image} className="spinner rotate" />
    </div>
  );
};

export default Image;
