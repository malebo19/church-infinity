import React from 'react'
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
import { Link } from 'react-router-dom';
  
function HomeMain() {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent >
      <h1>Home Main</h1>
      <p>Notification and Testimonies(modal)</p>
      <Link to="/Main/Home/Event">Event</Link> <br/>
      <Link to="/Main/Home/Profile">Profile</Link> <br/>
      <Link to="/Main/Home/BusinessLounge">Business Lounge</Link> <br/>
      <Link to="/Main/Home/ActivitiesRegistration">Activities Registration</Link> <br/>
    </IonContent>
  </IonPage>
  )
}

export default HomeMain