import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';


function Register() {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Register</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent >
      <h1>Register</h1>
      <Link to='/Main' >Login</Link> <br/>
    </IonContent>
  </IonPage>
  )
}

export default Register