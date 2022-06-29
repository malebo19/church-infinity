import React, { useState, useContext } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

function MinInstitutionsRegistration() {
  const { user, setUser } = useContext(UserContext);

  // const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [bornagainOption, setBornAgainOption] = useState("");
  const [cell, setCell] = useState("");
  const [cellName,setCellName] = useState("");
  const [fschool,setFSchool] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console log all the elements
    console.log(
      name,
      email,
      number,
      cell,
      cellName,
      fschool,
      bornagainOption
    );
    // check if all the fields are filled
    if (
      name &&
      email &&
      number &&
      cell&&
      cellName&&
      fschool&&
      bornagainOption
    ) {
      // create a new user

      var data = {
        username: name,
        email: email,
        contact: number,
        cell: cell,
        cell_name: cellName,
        fschool: fschool,
        bornagain_option: bornagainOption,
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
          <IonTitle>Baptism</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="Campaign">
          <IonGrid style={{ width: "85%" }} className="ion-align-items-center">
            <IonRow>
              <IonCol>
                <h1>Baptism</h1>
              </IonCol>
            </IonRow>
            <form onSubmit={submitHandler}>

              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Full Name</IonLabel>
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

              <div>
                <p>
                 Are you born again?
                </p>
              </div>
              <IonRow>
                <IonCol>
                  <IonRadioGroup
                    value={bornagainOption}
                    onIonChange={(e) => setBornAgainOption(e.target.value)}
                  >
                    <IonItem
                      style={{
                        width: "55%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>Yes</IonLabel>
                      <IonRadio slot="start" value="yes" />
                    </IonItem>

                    <IonItem
                      style={{
                        width: "55%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>No</IonLabel>
                      <IonRadio slot="start" value="no" />
                    </IonItem>
                    
                  </IonRadioGroup>
                </IonCol>
              </IonRow>
             
              <div>
                <p>
                 Are you in a cell or fellowship? If yes, state the name of cell or fellowship.
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
                        width: "55%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>Yes</IonLabel>
                      <IonRadio slot="start" value="yes" />
                    </IonItem>

                    <IonItem
                      style={{
                        width: "55%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>No</IonLabel>
                      <IonRadio slot="start" value="no" />
                    </IonItem>
                    
                  </IonRadioGroup>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="Enter the cell name"
                    className="RegisterInput"
                    onIonChange={(e) => setCellName(e.target.value)}
                    value={cellName}
                  />
                </IonCol>
              </IonRow>
             
             
              <div>
                <p>
                 Have you been through foundation school?
                </p>
              </div>
              <IonRow>
                <IonCol>
                  <IonRadioGroup
                    value={fschool}
                    onIonChange={(e) =>setFSchool(e.target.value)}
                  >
                    <IonItem
                      style={{
                        width: "55%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>Yes</IonLabel>
                      <IonRadio slot="start" value="yes" />
                    </IonItem>

                    <IonItem
                      style={{
                        width: "55%",
                        border: "1px solid blue",
                        borderRadius: "49px",
                        margin: "6px",
                      }}
                    >
                      <IonLabel>No</IonLabel>
                      <IonRadio slot="start" value="no" />
                    </IonItem>
                    
                  </IonRadioGroup>
                </IonCol>
              </IonRow>
             
              <br />

              <IonButton type="submit" expand="block">
                Submit
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

export default MinInstitutionsRegistration;
