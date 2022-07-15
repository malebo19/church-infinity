import React, { useEffect } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


import "./Welcome.css";
function Welcome() {
  let history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      
      history.push("/Main/Home")
    }, 1800);
  });
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="Welcome"> </div>
        <IonGrid>
          <IonRow
            style={{ height: "98vh" }}
            className="ion-align-items-center ion-justify-content-center"
          >
            <IonCol>
              <IonCard className="  ion-justify-content-center ion-padding ion-text-center">
                <IonCardHeader style={{ width: "100%" }}>
                  <IonCardTitle color="primary">
                    Welcome to Church Infinity!
                  </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>We’re happy to have you :)</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="ellipseRegister-1"></div>
        <div className="ellipseRegister-3"></div>
      </IonContent>
    </IonPage>
  );
}

export default Welcome;
