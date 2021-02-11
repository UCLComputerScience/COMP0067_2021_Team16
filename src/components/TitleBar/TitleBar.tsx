import "./TitleBar.css";
import { IonToolbar, IonTitle } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const TitleBar: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonToolbar>
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </div>
  );
};

export default TitleBar;
