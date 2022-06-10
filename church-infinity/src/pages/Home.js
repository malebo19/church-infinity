import React from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import {
  home,
  ellipse,
  square,
  triangle,
  timer,
  chatbubble,
} from "ionicons/icons";
import HomeMain from "./HomeMain";
import Update from "./Update";
import Chat from "./Chat";
import Event from "./Event";
import Profile from "./Profile";
import BusinessLounge from "./BusinessLounge";
import ActivitiesRegistration from "./ActivitiesRegistration";

function Home() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/Main/Home" to="/Main/Home/Tab1" />
        <Route exact path="/Main/Home/Tab1">
          <HomeMain />
        </Route>
        <Route exact path="/Main/Home/Tab2">
          <Update />
        </Route>
        <Route exact path="/Main/Home/Tab3">
          <Chat />
        </Route>
        <Route exact path="/Main/Home/Event">
          <Event/>
        </Route>
        <Route exact path="/Main/Home/Profile">
          <Profile/>
        </Route>
        <Route exact path="/Main/Home/BusinessLounge" >
          <BusinessLounge/>
        </Route>
        <Route exact path="/Main/Home/ActivitiesRegistration">
          <ActivitiesRegistration/>
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/Main/Home/Tab1">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/Main/Home/Tab2">
          <IonIcon icon={timer} />
          <IonLabel>Explore Updates</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/Main/Home/Tab3">
          <IonIcon icon={chatbubble} />
          <IonLabel>Chat</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default Home;
