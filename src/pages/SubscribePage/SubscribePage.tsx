import {
  IonContent,
  IonPage,
  IonText,
  IonItem,
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
import { useForm } from "react-hook-form";
import BackButton from "../../components/BackButton/BackButton";
import TitleBar from "../../components/TitleBar/TitleBar";
import User_Input, { InputProps } from "../../components/User_Input/User_Input";
import { object, string } from "yup";

const SubscribePage: React.FC = () => {
  const validationSchema = object().shape({
    email: string()
      .required("This is a required field")
      .email("Please provide a valid email address"),
  });
  const { control, handleSubmit, errors } = useForm({
    validationSchema,
  });

  const formFields: InputProps[] = [
    {
      name: "email",
      component: <IonInput type="email" />,
      label: "Email",
    },
  ];

  const registerUser = (data) => {
      console.log("creating a new user account with: " + JSON.stringify(data));
  };

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
        <div className="ion-padding">
          <IonText color="muted">
            <h5>
              Please enter your email below to hear more from Cosmic Baby Books.
            </h5>
          </IonText>
          <form onSubmit={handleSubmit(registerUser)}>
            {formFields.map((field, index) => (
              <User_Input
                {...field}
                control={control}
                key={index}
                errors={errors}
              />
            ))}
            <IonItem>
              <IonLabel>
                I would like to receive updates about future products
              </IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
              Submit
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default SubscribePage;
