import React from "react";
import { Player, ControlBar } from "video-react";

import {
  IonBackButton,
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
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/react";
import vid from "../assets/fire_for_your_future.mp4";
import { arrowRedo, thumbsUp, send, time, heart } from "ionicons/icons";
function WatchLive() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Main/Home/" />
          </IonButtons>
          <IonTitle>WatchLive</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol
              style={{
                border: "1px solid lightblue",
                borderRadius: "10px",
                padding: "0px",
              }}
            >
              <video src={vid} width="100%" height="100%" controls autoPlay />
            </IonCol>
          </IonRow>
          <h3 id="live_title">Pastor Chris: Fire for your future </h3>
          <IonRow className="ion-align-items-center ">
            <IonCol>
              <b>Church's Name</b> <br />
              is live now
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton size="small">
                <IonIcon color="light" icon={arrowRedo} />
                Share
              </IonButton>
            </IonCol>
          </IonRow>
          "A comment goes here"
          <IonRow>
            <p className="comment">This is a comment</p>
            <p className="comment">This is a comment</p>
            <p className="comment">This is a comment</p>
            <p className="comment">This is a comment</p>
            <p className="comment">This is a comment</p>
          </IonRow>
          <IonRow className="ion-align-items-center ">
            <IonCol>
              <IonInput type="text" placeholder="Write a comment here">
                <IonIcon slot="end" color="light" icon={thumbsUp} />
              </IonInput>{" "}
            </IonCol>
            <IonCol className="ion-text-center">
              <IonRow>
                <IonButton size="small">
                  <IonIcon color="light" icon={thumbsUp} />
                </IonButton>
                <IonButton size="small">
                  <IonIcon color="light" icon={heart} />
                </IonButton>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default WatchLive;
