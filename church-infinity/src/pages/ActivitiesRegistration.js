import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonCard,
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
            <IonCard routerLink="/Main/Home/ActivitiesRegistration/Campaings"><div className="type-button">Activities & Campaigns</div></IonCard>
            <IonCard routerLink="/Main/Home/ActivitiesRegistration/Departments"><div className="type-button">Departments</div></IonCard>
            <IonCard routerLink="/Main/Home/ActivitiesRegistration/MinInstitutions"><div className="type-button">Ministry institutions</div></IonCard>
            <IonCard routerLink="/Main/Home/ActivitiesRegistration/Departments"><div className="type-button">Sacrements</div></IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default ActivitiesRegistration;
