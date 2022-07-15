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
import WatchLive from "./WatchLive";
import BusinessLounge from "./BusinessLounge";
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import Business from "./Business";
=======
>>>>>>> parent of 8ea6227 (index)
import BusinessInfo from "./BusinessInfo";
>>>>>>> Stashed changes
import ActivitiesRegistration from "./ActivitiesRegistration";
import ProfileUpdate from "./ProfileUpdate";
import Groups from "./Groups";
import Gallery from "./Gallery";
import CampaignRegistration from "./CampaignsRegistration";
import DepartmentsRegistration from "./DepartmentsRegistration";
import SacramentsRegistration from "./SacramentsRegistration";
import MinInstitutionsRegistration from "./MinInstitutionsRegistration";
import WatchLive from "./WatchLive";

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
          <Event />
        </Route>

        <Route exact path="/Main/Home/Profile">
          <Profile />
        </Route>
        
        <Route exact path="/Main/Home/WatchLive">
          <WatchLive />
        </Route>

        <Route exact path="/Main/Home/WatchLive">
          <WatchLive />
        </Route>

        <Route exact path="/Main/Home/BusinessLounge">
          <BusinessLounge />
        </Route>
        
<<<<<<< Updated upstream
        <Route exact path="/Main/Home/BusinessLounge/Business1">
          <Business />
=======
        <Route exact path="/Main/Home/BusinessLounge/Business">
          <BusinessInfo />
>>>>>>> Stashed changes
        </Route>

        <Route exact path="/Main/Home/ActivitiesRegistration">
          <ActivitiesRegistration />
        </Route>

        <Route exact path="/Main/Home/ActivitiesRegistration/Campaigns">
          <CampaignRegistration />
        </Route>

        <Route exact path="/Main/Home/ActivitiesRegistration/Departments">
          <DepartmentsRegistration />
        </Route>

        <Route exact path="/Main/Home/ActivitiesRegistration/MinistryInstitutions">
          <MinInstitutionsRegistration />
        </Route>

        <Route exact path="/Main/Home/ActivitiesRegistration/Sacraments">
          <SacramentsRegistration />
        </Route>

        <Route exact path="/Main/Home/ProfileUpdate">
          <ProfileUpdate />
        </Route>

        <Route exact path="/Main/Home/Groups">
          <Groups />
        </Route>

        <Route exact path="/Main/Home/Gallery">
          <Gallery />
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
