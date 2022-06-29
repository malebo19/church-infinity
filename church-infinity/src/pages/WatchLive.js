import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import event from "../assets/event.png";
import { time } from "ionicons/icons";
function Event() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Upcoming Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <img src={event} />
            </IonCol>
          </IonRow>
          <h3>15 May 2022</h3>
          <p>Morning</p>
          <IonRow
            style={{
              borderTop: "1px solid lightblue",
              borderBottom: "1px solid lightblue",
              padding: "7px",
            }}
            className="ion-align-items-center "
          >
            <IonCol>
              Pray-A-Thon <br />
              09:30 - 10:00 <IonIcon color="primary" icon={time} />
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton size="small">Open</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Event;