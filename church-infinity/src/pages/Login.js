import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { lockClosed, mail } from "ionicons/icons";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="login">
          <IonGrid>
            <IonRow
              style={{ height: "70vh" }}
              className="ion-align-items-center"
            >
              <IonCol>
                <h1 className="LoginH1">Login</h1>
                <IonRow className="ion-justify-content-center">
                  <IonItem className="border" style={{ width: "90%" }}>
                    <IonIcon color="primary" icon={mail} />
                    <IonLabel  style={{marginLeft : '6px', fontWeight : 'bold'}} >Email</IonLabel>
                    <IonInput placeholder="email@email.com" />
                  </IonItem>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                  <IonItem className="border" style={{ width: "90%" }}>
                    <IonIcon color="primary" icon={lockClosed} />
                    <IonLabel  style={{marginLeft : '6px', fontWeight : 'bold'}}>Password</IonLabel>
                    <IonInput placeholder="*********"/>
                  </IonItem>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonRow style={{ height: "30vh" }}>
              <IonCol>
                <IonButton routerLink="/Main" expand="block">
                  Login
                </IonButton>
                <div className="ion-text-center">
                  <IonButton routerLink="/Register" fill="clear" color="dark">
                    Register
                  </IonButton>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className="ellipse-3"></div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
