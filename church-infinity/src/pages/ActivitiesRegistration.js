import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./ActivitiesRegistration.css";

function ActivitiesRegistration() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="middle">
          <div className="types">
            <h1>Select Types of Registration</h1>
            <div className="type-button">Activities & Campaigns</div>
            <div className="type-button">Departments</div>
            <div className="type-button">Ministry institutions</div>
            <div className="type-button">Sacrements</div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default ActivitiesRegistration;
