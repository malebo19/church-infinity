import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'

function BusinessLounge() {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Chat</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h1>BusinessLounge</h1>

    </IonContent>
  </IonPage>
  )
}

export default BusinessLounge