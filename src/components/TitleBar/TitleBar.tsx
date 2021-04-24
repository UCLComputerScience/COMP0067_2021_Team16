import { IonHeader, IonToolbar, IonTitle, IonBackButton } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const TitleBar: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonHeader>
      <IonToolbar className="title-bar">
        <IonBackButton defaultHref="./slideshowpage" slot="start"> </IonBackButton>
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default TitleBar;
