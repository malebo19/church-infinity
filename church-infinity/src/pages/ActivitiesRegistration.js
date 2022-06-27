import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
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
            <IonBackButton defaultHref="/login"/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="middle">
          <div className="types">
            <h1>Select Types of Registration</h1>
            <IonCard className="cardbutton" routerLink="/Main/Home/ActivitiesRegistration/Campaigns">
              <IonCardContent className="type-button activityReg">Activities & Campaigns</IonCardContent></IonCard>
            <IonCard className="cardbutton" routerLink="/Main/Home/ActivitiesRegistration/Departments">
              <IonCardContent className="type-button activityReg">Departments</IonCardContent></IonCard>
            <IonCard className="cardbutton" routerLink="/Main/Home/ActivitiesRegistration/MinistryInstitutions">
              <IonCardContent className="type-button activityReg">Ministry Institutions</IonCardContent></IonCard>
            <IonCard className="cardbutton" routerLink="/Main/Home/ActivitiesRegistration/Sacraments">
              <IonCardContent className="type-button activityReg">Sacrements</IonCardContent></IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default ActivitiesRegistration;
