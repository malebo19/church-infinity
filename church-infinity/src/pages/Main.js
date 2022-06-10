import React from "react";
import { Redirect, Route } from "react-router-dom";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Welcome from "./Welcome";
import About from "./About";
import Onboarding from "./Onboarding";
import Home from "./Home";

function Main() {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path="/Main">
          <Welcome />
        </Route>
        <Route path="/Main/About">
          <About />
        </Route>
        <Route path="/Main/Onboarding">
          <Onboarding />
        </Route>
        <Route path="/Main/Home" render = {()=> <Home/>} />
      </IonRouterOutlet>
    </IonPage>
  );
}

export default Main;
