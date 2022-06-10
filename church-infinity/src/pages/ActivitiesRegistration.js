import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function ActivitiesRegistration() {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Chat</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h1>Activities Registration</h1>
      <p>Baptisms, counselling..</p>

    </IonContent>
  </IonPage>
  )
}

export default ActivitiesRegistration