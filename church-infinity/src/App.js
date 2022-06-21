import { Redirect, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import usehistory

import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createContext, useContext, useState, useEffect } from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./services/firebase";
/* Theme variables */
import "./theme/variables.css";
import Main from "./pages/Main";
import HomeMain from "./pages/HomeMain";

setupIonicReact();

export const UserContext = createContext();

const App = () => {
  // get user from the local storage
  const [user, setUser] = useState("");
  useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <IonApp>
      <UserContext.Provider value={{ user, setUser }}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/Login">
              {!user ? <Login /> : <Redirect to="/Main/Home" />}
            </Route>
            <Route path="/Register">
              {!user ? <Register /> : <Redirect to="/Main/Home" />}
            </Route>
            <Route path="/Main">{user ? <Main /> : <Redirect to="/" />}</Route>
            <Route exact path="/">
              <Redirect to="/Login" />
            </Route>
            {/* <Route path='*'>
              {!user ? <Redirect to="/Login" /> : <Redirect to="/Main/Home" />}
            </Route> */}
          </IonRouterOutlet>
        </IonReactRouter>
      </UserContext.Provider>
    </IonApp>
  );
};

export default App;
