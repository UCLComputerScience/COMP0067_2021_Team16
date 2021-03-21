import {
  IonContent,
  IonPage,
  IonText,
  IonLabel,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonRow,
  IonCol,
  IonCheckbox,
} from "@ionic/react";
import React from "react";
import "./SubscribePage.css";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";

const sendPostRequest = () => {
  console.log("Hi Caroline")
  // return axios({
  //   url: "https://0067team16app.azurewebsites.net/",
  //   method: "POST",
  // }).then((response) => {
  //   console.log(response);
  //   return response.data;
  // });
};

const SubscribePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonHeader>
          <IonToolbar>
            <IonRow>
              <BackButton />
              <IonCol className="ion-align-items-center ion-justify-content-center">
                <TitleBar name={"Subscribe"} />
              </IonCol>
            </IonRow>
          </IonToolbar>
        </IonHeader>
        <div id="form">
          Please enter your details below to hear more from Cosmic Baby Books.
          <form onSubmit={sendPostRequest()}>
            <IonInput>Email</IonInput>
            <IonInput>First Name</IonInput>
            <IonLabel>
              I would like to receive updates about future products
            </IonLabel>
            <IonCheckbox slot="end" />
            <IonButton type="submit">
              Submit
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default SubscribePage;
