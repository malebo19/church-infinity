import React from "react";
import {
    IonBackButton,
    IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

function ProfileUpdate() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons>
                <IonBackButton/>
            </IonButtons>
          <IonTitle>Update your profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Profile Update</h1>
      </IonContent>
    </IonPage>
  );
}

export default ProfileUpdate;
