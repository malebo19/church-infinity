import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function Event() {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Event</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>Event Page</h1>
      <p>Sign up to event</p>

    </IonContent>
  </IonPage>
  )
}

export default Event