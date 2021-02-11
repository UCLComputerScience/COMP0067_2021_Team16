import './ImageTitle.css';

interface ContainerProps {
    image: string;
  }

const ImageTitle: React.FC<ContainerProps> = ({ image }) => {
  return (
    <div className="container">
        <h1>{image}</h1>
    </div>
  );
};

export default ImageTitle;
