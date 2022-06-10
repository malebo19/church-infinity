import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function Profile() {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h1>Profile Page</h1>

    </IonContent>
  </IonPage>
  )
}

export default Profile