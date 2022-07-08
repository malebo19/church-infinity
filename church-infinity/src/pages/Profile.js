import React, { useContext, useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
import { UserContext } from "../App";
import UpdateProfile from "../services/UpdateProfile";
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
import { IP } from "../services/config";
import Update from "./Update";
// import { getAuth, signOut } from "firebase/auth";

function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem("dark"));
    if (localStorage.getItem("dark") === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }else{
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const fileRef = useRef(null);

  let history = useHistory();
  const [attachment, setAttachment] = useState("");
  // const auth = getAuth();

  const { user, setUser } = useContext(UserContext);
  var username = user.email.split("@")[0];
  const signOutHandler = () => {
    //Remove user from local storage
    localStorage.removeItem("user");
    setUser(null);
    // history.push("/login");
  };
  const profileChangerHandler = (e) => {
    setAttachment(e.target.files[0]);
    // console.log(attachment);
    console.log(e.target.files);
    var form_data = new FormData();

    var data = {
      user_id: user.id,
      attachment: attachment,
    };

    Object.keys(data).map((key) => {
      form_data.append(key, data[key]);
    });
    if (attachment) {
      console.log(attachment);
      UpdateProfile(form_data);
    }
    // setAttachment("");
  };
  const darkModeHandler = (ev) => {
    if (ev.target.checked) {
      setDarkMode(true);
      localStorage.setItem("dark", true);
      document.body.classList.add("dark");
      console.log(localStorage.getItem("dark"));
    } else {
      setDarkMode(false);
      localStorage.setItem("dark", false);
      document.body.classList.remove("dark");
      console.log(localStorage.getItem("dark"));
    }
    console.log("darkModeHandler", ev);
  };
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
                    <input
                      type="file"
                      ref={fileRef}
                      style={{ display: "none" }}
                      onChange={profileChangerHandler}
                    />
                    <div className="profile-card">
                      <div className="profile-card-avatar">
                        <IonAvatar onClick={() => fileRef.current.click()}>
                          <img
                            src={
                              user.profile?.trim()?.length > 0
                                ? IP + "/" + user?.profile
                                : "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                            }
                          />
                        </IonAvatar>
                        <div
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          <h4 style={{ fontWeight: "bold" }}>
                            {user.username}
                          </h4>
                          <h6>{username}</h6>
                        </div>
                      </div>
                      <div>
                        <IonIcon
                          onClick={() => fileRef.current.click()}
                          size="large"
                          icon={pencil}
                        />
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
                      <IonItem button onClick={signOutHandler}>
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
                          checked={darkMode}
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
