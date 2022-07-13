import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonRow,
  IonCol,
  IonToolbar,
} from "@ionic/react";

function Business() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start" >
          <IonBackButton />
        </IonButtons>
          <IonTitle>Business Lounge</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Business Lounge</h1>
        <IonGrid>
          <IonRow>

          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Business;
