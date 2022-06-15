import React from "react";
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "./Profile.css";
import {
  logOut,
  logOutOutline,
  logOutSharp,
  moon,
  notifications,
  pencil,
  people,
  peopleOutline,
  person,
  personOutline,
} from "ionicons/icons";

const darkModeHandler = (ev) => {
  // toggle a classlist of the body element
  document.body.classList.toggle("dark");
  console.log("darkModeHandler", ev);
};
function Profile() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Main/Home/Tab1" />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="Profile">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCard color="primary">
                  <IonCardContent>
                    <div className="profile-card">
                      <div className="profile-card-avatar">
                        <IonAvatar>
                          <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
                        </IonAvatar>
                        <div
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          <h4 style={{ fontWeight: "bold" }}>Kenan Kasongo</h4>
                          <h6>@KenanK</h6>
                        </div>
                      </div>
                      <div>
                        <IonIcon size="large" icon={pencil} />
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <IonList>
                      <IonItem button routerLink="/Main/Home/ProfileUpdate">
                        <IonIcon
                          style={{ marginRight: "10px" }}
                          icon={person}
                          color="primary"
                        />
                        <IonLabel>
                          <h2>Edit Account</h2>
                          <p>Make changes to your account</p>
                        </IonLabel>
                      </IonItem>
                      <IonItem button routerLink="/Main/Home/Groups">
                        <IonIcon
                          style={{ marginRight: "10px" }}
                          icon={people}
                          color="primary"
                        />

                        <IonLabel>
                          <h2>My Groups</h2>
                          <p>Access your group</p>
                        </IonLabel>
                      </IonItem>
                      <IonItem button routerLink="/">
                        <IonIcon
                          style={{ marginRight: "10px" }}
                          icon={logOut}
                          color="primary"
                        />
                        <IonLabel>
                          <h2>Log out</h2>
                          <p>Log out</p>
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonIcon
                          style={{ marginRight: "10px" }}
                          icon={moon}
                          color="primary"
                        />
                        <IonLabel>Dark Mode</IonLabel>
                        <IonToggle
                          onIonChange={darkModeHandler}
                          slot="end"
                        ></IonToggle>
                      </IonItem>
                    </IonList>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <IonList>
                      <IonItem button>
                        <IonIcon
                          style={{ marginRight: "10px" }}
                          icon={notifications}
                          color="primary"
                        />
                        <IonLabel>
                          <h2>Help & Support</h2>
                        </IonLabel>
                      </IonItem>
                      <IonItem button>
                        <IonIcon
                          style={{ marginRight: "10px" }}
                          icon={people}
                          color="primary"
                        />

                        <IonLabel>
                          <h2>About App</h2>
                        </IonLabel>
                      </IonItem>
                    </IonList>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Profile;
