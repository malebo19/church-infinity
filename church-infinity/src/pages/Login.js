import { useState, useContext } from "react";
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

import { lockClosed, mail } from "ionicons/icons";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import "./Login.css";
import LoginService from "../services/LoginService";

const Login = () => {
  const [error, setError] = useState(false);
  let history = useHistory();

  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginHandler = (e) => {
    e.preventDefault();
    var data = {
      email: email,
      pass: password,
    };
    LoginService(data).done((res) => {
      console.log(res);
      if(res.status === true){
        history.push("/home");
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);

        
      }else{
        setError(true);
        console.log(res.message);

      }
      // if (res.status === 200) {
      //   setUser(res.data);
      //   history.push("/home");
      // } else {
      //   setError(true);
      // }
    });

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     // console.log("Login", userCredential);
    //     setUser(userCredential.user);
    //     history.push("/Main");
    //     setError(false);

    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     setError(true);
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
    console.log(user);
  };
  return (
    <IonPage>
      <IonContent>
        <div className="login">
          <IonGrid>
            <form onSubmit={LoginHandler}>
              <IonRow
                style={{ height: "70vh" }}
                className="ion-align-items-center"
              >
                <IonCol>
                  <h1 className="LoginH1">Login</h1>
                  <IonRow className="ion-justify-content-center">
                    {error && (
                      <h2 style={{ color: "red" }}>Invalid Credentials!</h2>
                    )}
                    <IonItem className="border" style={{ width: "90%" }}>
                      <IonIcon color="primary" icon={mail} />
                      <IonLabel
                        style={{ marginLeft: "6px", fontWeight: "bold" }}
                      >
                        Email
                      </IonLabel>
                      <IonInput
                        required
                        onIonChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="email@email.com"
                      />
                    </IonItem>
                  </IonRow>
                  <IonRow className="ion-justify-content-center">
                    <IonItem className="border" style={{ width: "90%" }}>
                      <IonIcon color="primary" icon={lockClosed} />
                      <IonLabel
                        style={{ marginLeft: "6px", fontWeight: "bold" }}
                      >
                        Password
                      </IonLabel>
                      <IonInput
                        onIonChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="*********"
                        required
                        type="password"
                      />
                    </IonItem>
                  </IonRow>
                </IonCol>
              </IonRow>
              <IonRow style={{ height: "30vh" }}>
                <IonCol>
                  <IonButton type="submit" expand="block">
                    Login
                  </IonButton>
                  <div className="ion-text-center">
                    <IonButton routerLink="/Register" fill="clear" color="dark">
                      Register
                    </IonButton>
                  </div>
                </IonCol>
              </IonRow>
            </form>
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
