import {
  IonContent,
  IonPage,
  IonLabel,
  IonButton,
} from "@ionic/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./SubscribePage.css";
import TitleBar from "../../components/TitleBar/TitleBar";

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
      <TitleBar name="Subscribe" />
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(onSubmit)} id="form">
          <h3>
            Please enter your details below to hear more from Cosmic Baby Books.
          </h3>
          <div id="input">
            <br />
            <h3>
              <IonLabel>
                <b>First Name</b>
              </IonLabel>
              <div>
                <input
                  name="email_first_name"
                  onChange={(e) => setValue("email_first_name", e.target.value)}
                  required
                ></input>
              </div>
              <IonLabel>
                <b>Last Name</b>
              </IonLabel>
              <div>
                <input
                  name="email_last_name"
                  onChange={(e) => setValue("email_last_name", e.target.value)}
                  required
                ></input>
              </div>
              <IonLabel>
                <b>Email Address</b>
              </IonLabel>
              <div>
                <input
                  onChange={(e) => setValue("email_address", e.target.value)}
                  type="email"
                  name="email_address"
                  required
                ></input>
              </div>
              <br />
            </h3>
          </div>
          <h4>
            By submitting this form, I consent to receiving updates about future
            products. As a proof of concept, UCL student developers of this
            application are not liable for any data collected.
          </h4>
          <br />
          <br />
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
