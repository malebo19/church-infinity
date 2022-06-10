import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Login</h1>
        <Link to='/Main' >Login</Link> <br/>
        <Link to='/Register' >Register</Link>
      </IonContent>
    </IonPage>
  );
};

export default Login;
