import {
  IonContent,
  IonPage,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./SubscribePage.css";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";

const SubscribePage: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    const url =
      "https://0067team16app.azurewebsites.net/mailinglist/new/" + data["email_first_name"] + "/" + data["email_last_name"] + "/" + data["email_address"];
    console.log(url);
    // let response = await axios.get(url);
  };

  useEffect(() => {
    register("email_first_name", { required: true });
    register("email_last_name", { required: true });
    register("email_address", { required: true });
  }, []);

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form"
        >
          Please enter your details below to hear more from Cosmic Baby Books.
          <div id="input">
            <IonLabel>First Name</IonLabel>
            <input
              name="email_first_name"
              onChange={(e) => setValue("email_first_name", e.target.value)}
              required
            ></input>
            <IonLabel>Last Name</IonLabel>
            <input
              name="email_last_name"
              onChange={(e) => setValue("email_last_name", e.target.value)}
              required
            ></input>
            <IonLabel>Email Address</IonLabel>
            <input
              type="email"
              name="email_address"
              onChange={(e) => setValue("email_address", e.target.value)}
              required
            ></input>
          </div>
          <IonLabel>
            By submitting this form, I consent to receiving updates about future
            products. As a proof of concept, UCL student developers of this
            application are not liable for any data collected.
          </IonLabel>
          <IonButton type="submit">Submit</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};
export default SubscribePage;
