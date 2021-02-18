import "./TitleBar.css";

interface ContainerProps {
  name: string;
}

const TitleBar: React.FC<ContainerProps> = ({ name }) => {
  return (
      <h1>{name}</h1>
  );
};

export default TitleBar;
