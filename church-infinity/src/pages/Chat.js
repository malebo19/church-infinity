import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function Chat() {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Chat</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h1>Chat</h1>

    </IonContent>
  </IonPage>
  )
}

export default Chat