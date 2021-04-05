import {
  IonContent,
  IonPage,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonRow,
  IonCol,
  IonGrid,
  IonTitle,
  IonInput,
  IonButton,
} from "@ionic/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./SubscribePage.css";
import BackButton from "../../components/BackButton/BackButton";

const SubscribePage: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const url =
      "https://0067team16app.azurewebsites.net/mailinglist/new/" +
      data["email_first_name"] +
      "/" +
      data["email_last_name"] +
      "/" +
      data["email_address"];
    console.log(url);
    let response = axios.post(url);
    history.push("/SelectionPage");
  };

  useEffect(() => {
    register("email_first_name", { required: true });
    register("email_last_name", { required: true });
    register("email_address", { required: true });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol className="backbutton">
                <BackButton />
              </IonCol>
              <IonCol size="8" className="title">
                <IonTitle>Subscribe</IonTitle>
              </IonCol>
              <IonCol />
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(onSubmit)} id="form">
          <div>
            Please enter your details below to hear more from Cosmic Baby Books.
          </div>

          <div id="input">
            <br />
            <IonLabel>First Name</IonLabel>
            <div>
              <input
                name="email_first_name"
                onChange={(e) => setValue("email_first_name", e.target.value)}
                required
              ></input>
            </div>
            <IonLabel>Last Name</IonLabel>
            <div>
              <input
                name="email_last_name"
                onChange={(e) => setValue("email_last_name", e.target.value)}
                required
              ></input>
            </div>
            <IonLabel>Email Address</IonLabel>
            <div>
              <input
                onChange={(e) => setValue("email_address", e.target.value)}
                type="email"
                name="email_address"
                required
              ></input>
            </div>
            <br />
          </div>

          <h3>
            By submitting this form, I consent to receiving updates about future
            products. As a proof of concept, UCL student developers of this
            application are not liable for any data collected.
            <br />
            <br />
          </h3>
          <div>
            <IonButton size="large" expand="block" type="submit">
              Submit
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};
export default SubscribePage;
