import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';

function Onboarding() {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Blank</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h1>Onboarding</h1>
      <Link to="/Main/Home">Main Home page</Link>

    </IonContent>
  </IonPage>
  )
}

export default Onboarding