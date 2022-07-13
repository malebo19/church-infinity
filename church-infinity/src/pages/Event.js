import React, { useContext, useEffect, useState } from "react";
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
import { UserContext } from "../App";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

import { time } from "ionicons/icons";
import GetEvents from "../services/GetEvents";
import { IP } from "../services/config";
function Event() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  useEffect(() => {
    const data = {
      used_id: user.id,
    };
    GetEvents(data).done((res) => {
      setEvents(res.data);
    });
  }, []);

  const { user, setUser } = useContext(UserContext);
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
          {events.map((event) => (
            <div>
              <IonRow key={event.id}>
                <IonCol>
                  <img src={IP + "/" + event.document} />
                </IonCol>
              </IonRow>
             
              <IonRow
                style={{
                  borderTop: "1px solid lightblue",
                  borderBottom: "1px solid lightblue",
                  padding: "7px",
                }}
                className="ion-align-items-center "
              >
                <IonCol>
                  {event.title} <br />
                  {event.content} <br/>
                  {event.time} <IonIcon color="primary" icon={time} />
                </IonCol>
                <IonCol className="ion-text-center">
                  <IonButton size="small">Open</IonButton>
                </IonCol>
              </IonRow>
            </div>
          ))}
          {/* <IonRow>
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
          <IonRow
            style={{
              borderTop: "1px solid lightblue",
              borderBottom: "1px solid lightblue",
              padding: "7px",
            }}
            className="ion-align-items-center "
          >
            <IonCol>
              Rhapsody of Realities
              <br />
              10:00 - 10:30 <IonIcon color="primary" icon={time} />
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton size="small">Open</IonButton>
            </IonCol>
          </IonRow>
          <h3>29 May 2022</h3>
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
              Global Communion Service
              <br />
              10:00 - 10:30 <IonIcon color="primary" icon={time} />
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton size="small">Open</IonButton>
            </IonCol>
          </IonRow> */}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Event;
