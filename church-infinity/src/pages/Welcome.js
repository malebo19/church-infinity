import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Welcome Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <h1>Welcome Page</h1>
      <Link to="/Main/About" >About</Link> <br/>
    </IonContent>
  </IonPage>
  )
}

export default Welcome