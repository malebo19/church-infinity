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

function BusinessLounge() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start" >
          <IonBackButton />
        </IonButtons>
          <IonTitle>Business</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>BusinessLounge</h1>
      </IonContent>
    </IonPage>
  );
}

export default BusinessLounge;
