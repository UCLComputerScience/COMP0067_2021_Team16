import './Copyright.css';

interface ContainerProps {
  Copyright: string;
}

const Copyright: React.FC<ContainerProps> = ({ Copyright }) => {
  return (
    <div className="container">
        <h1>{Copyright}</h1>
    </div>
  );
};

export default Copyright;
