import React, { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import RegisterService from "../services/RegisterService";
import { Link } from "react-router-dom";
import "./Register.css";
import { UserContext } from "../App";

function Register() {
  const { user, setUser } = useContext(UserContext);

  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [number, setNumber] = useState("");
  const [newMember, setNewMember] = useState("");
  const [cell, setCell] = useState("");
  const [cellLeader, setCellLeader] = useState("");
  const [baptised, setBaptised] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console log all the elements
    console.log(
      name,
      email,
      password,
      title,
      status,
      number,
      newMember,
      cell,
      cellLeader,
      baptised
    );
    // check if all the fields are filled
    if (
      name &&
      email &&
      password &&
      title &&
      status &&
      number &&
      newMember &&
      cell &&
      cellLeader &&
      baptised
    ) {
      // create a new user

      var data = {
        username: name,
        email: email,
        pass: password,

        title: title,
        member_status: status,
        contact: number,
        local_church_option: newMember,
        cell_option: cell,
        cell_name_leader: cellLeader,
        baptised_option: baptised,
      };
      RegisterService(data).done((res) => {
        console.log(res);
        if (res.status === true) {
          console.log(res.data);
          // Save the user to local storage
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          

        } else {
          console.log(res.message);
        }
      });

      //   createUserWithEmailAndPassword(auth, email, password)
      //     .then((res) => {
      //       console.log(res);
      //       // create a new user in the database
      //       // createUser(res.user.uid, name, email, title, status, number, newMember, cell, cellLeader, baptised);
      //       const user = res.user;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // } else {
      //   alert("Please fill in all the fields");
      // }
    }
  };

  return (
    <IonPage>
      {/* Back button */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="Register">
          <IonGrid style={{ width: "85%" }} className="ion-align-items-center">
            <IonRow>
              <IonCol>
                <h1>Register</h1>
              </IonCol>
            </IonRow>
            <form onSubmit={submitHandler}>
              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Name</IonLabel>
                    <IonInput
                      onIonChange={(e) => setName(e.target.value)}
                      required
                      value={name}
                      placeholder=" Enter your full name"
                      className="RegisterInput"
                    />
                  </IonCol>
                </IonRow>
              </div>
              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Email</IonLabel>
                    <IonInput
                      onIonChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                      value={email}
                      placeholder="  Enter your email"
                      className="RegisterInput"
                    />
                  </IonCol>
                </IonRow>
              </div>
              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Password</IonLabel>
                    <IonInput
                      required
                      value={password}
                      onIonChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="**********"
                      className="RegisterInput"
                    />
                  </IonCol>
                </IonRow>
              </div>
              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Title</IonLabel>
                    <IonSelect
                      onIonChange={(e) => setTitle(e.target.value)}
                      required
                      className="RegisterSelect"
                      value={title}
                      placeholder="Select Title"
                    >
                      <IonSelectOption value="pastor">Pastor</IonSelectOption>
                      <IonSelectOption value="dcn">Dcns / Dcn</IonSelectOption>
                      <IonSelectOption value="brother">Brother</IonSelectOption>
                      <IonSelectOption value="sister">Sister</IonSelectOption>
                    </IonSelect>
                  </IonCol>
                </IonRow>
              </div>
              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Membership status</IonLabel>
                    <IonSelect
                      onIonChange={(e) => setStatus(e.target.value)}
                      required
                      className="RegisterSelect"
                      value={status}
                      placeholder="Select your membership status"
                    >
                      <IonSelectOption value="churchCoordinator">
                        Church Coordinator
                      </IonSelectOption>
                      <IonSelectOption value="cellLeader">
                        Cell Leader
                      </IonSelectOption>
                      <IonSelectOption value="cellExecutive">
                        Cell Executive
                      </IonSelectOption>
                      <IonSelectOption value="departmentalLeader">
                        Departmental Leader
                      </IonSelectOption>
                      <IonSelectOption value="member">Member</IonSelectOption>
                    </IonSelect>
                  </IonCol>
                </IonRow>
              </div>

              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Cellphone Number</IonLabel>
                    <IonInput
                      required
                      value={number}
                      onIonChange={(e) => setNumber(e.target.value)}
                      type="number"
                      placeholder="  Enter your cellphone number"
                      className="RegisterInput"
                    />
                  </IonCol>
                </IonRow>
              </div>

              <p>Are new to Local Church (less than 2 months) ?</p>
              <IonRadioGroup
                value={newMember}
                onIonChange={(e) => setNewMember(e.target.value)}
              >
                <IonItem
                  style={{
                    width: "40%",
                    border: "1px solid blue",
                    borderRadius: "49px",
                    margin: "6px",
                  }}
                >
                  <IonLabel>Yes</IonLabel>
                  <IonRadio slot="start" value="Yes" />
                </IonItem>

                <IonItem
                  style={{
                    width: "40%",
                    border: "1px solid blue",
                    borderRadius: "49px",
                    margin: "6px",
                  }}
                >
                  <IonLabel>No</IonLabel>
                  <IonRadio slot="start" value="No" />
                </IonItem>
              </IonRadioGroup>

              <div>
                <p>
                  Have you joined a cell? If yes, kindly state the name of your
                  cell and cell leader
                </p>
              </div>
              <IonRow>
                <IonCol>
                  <IonRadioGroup
                    value={cell}
                    onIonChange={(e) => setCell(e.target.value)}
                  >
                    <IonItem
                      style={{
                        width: "40%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>Yes</IonLabel>
                      <IonRadio slot="start" value="Yes" />
                    </IonItem>

                    <IonItem
                      style={{
                        width: "40%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>No</IonLabel>
                      <IonRadio slot="start" value="No" />
                    </IonItem>
                  </IonRadioGroup>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="  Enter the cell name and cell leader"
                    className="RegisterInput"
                    onIonChange={(e) => setCellLeader(e.target.value)}
                    value={cellLeader}
                  />
                </IonCol>
              </IonRow>
              <div>
                <p>Have you been baptised yet?</p>
              </div>
              <IonRow>
                <IonCol>
                  <IonRadioGroup
                    value={baptised}
                    onIonChange={(e) => setBaptised(e.target.value)}
                  >
                    <IonItem
                      style={{
                        width: "40%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>Yes</IonLabel>
                      <IonRadio slot="start" value="Yes" />
                    </IonItem>

                    <IonItem
                      style={{
                        width: "40%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>No</IonLabel>
                      <IonRadio slot="start" value="No" />
                    </IonItem>
                  </IonRadioGroup>
                </IonCol>
              </IonRow>
              <br />

              <IonButton type="submit" expand="block">
                Register
              </IonButton>
            </form>
          </IonGrid>
        </div>
        {/* <Link to="/Main">Login</Link> <br /> */}
        <div className="ellipseRegister-1"></div>
        <div className="ellipseRegister-3"></div>
      </IonContent>
    </IonPage>
  );
}

export default Register;
