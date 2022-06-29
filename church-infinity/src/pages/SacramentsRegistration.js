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

function SacramentsRegistration() {
  const { user, setUser } = useContext(UserContext);

  // const auth = getAuth();
  const [babyName, setBabyName] = useState("");
  const [dob,setDOB] =  useState("");
  const [fatherName,setFatherName]  =  useState("");
  const [motherName,setMotherName]  =  useState("");
  const [fatherTitle, setFatherTitle] = useState("");
  const [motherTitle, setMotherTitle] = useState("");
  const [fatherStatus, setFatherStatus] = useState("");
  const [motherStatus, setMotherStatus] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [cell, setCell] = useState("");
  const [cellName, setCellName] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console log all the elements
    console.log(
      babyName,
      dob,
      email,
      fatherTitle,
      motherTitle,
      fatherStatus,
      motherStatus,
      fatherName,
      motherName,
      number,
      cell,
      cellName,
      address
    );
    // check if all the fields are filled
    if (babyName&&
        dob&&
        email&&
        fatherTitle&&
        motherTitle&&
        fatherStatus&&
        motherStatus&&
        fatherName&&
        motherName&&
        number&&
        cell&&
        cellName&&
        address
    ) {
      // create a new user

      var data = {
        baby_name : babyName,
        dob : dob,
        email : email,
        contact: number,
        address: address,
        cell : cell,
        cell_name : cellName,
        father_title : fatherTitle,
        mother_title : motherTitle,
        father_status : fatherTitle,
        mother_status : motherStatus,
        father_name: fatherName,
        mother_name: motherName,
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
          <IonTitle>Baby Dedication</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="Campaign">
          <IonGrid style={{ width: "85%" }} className="ion-align-items-center">
            <IonRow>
              <IonCol>
                <h1>Baby Dedication</h1>
              </IonCol>
            </IonRow>
            <form onSubmit={submitHandler}>

            <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Baby's Full Names</IonLabel>
                    <IonInput
                      onIonChange={(e) => setBabyName(e.target.value)}
                      required
                      value={babyName}
                      placeholder=" Enter your baby's full names"
                      className="RegisterInput"
                    />
                  </IonCol>
                </IonRow>
            </div>
            <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Date of birth</IonLabel>
                    <IonInput
                      onIonChange={(e) => setDOB(e.target.value)}
                      required
                      value={dob}
                      placeholder="DD/MM/YYYY"
                      className="RegisterInput"
                    />
                  </IonCol>
                </IonRow>
            </div>

            <IonRow>
              <IonCol>
                <h1>FATHER</h1>
              </IonCol>
            </IonRow>

            <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Father's Full Names</IonLabel>
                    <IonInput
                      onIonChange={(e) => setFatherName(e.target.value)}
                      required
                      value={fatherName}
                      placeholder=" Enter father's full name"
                      className="RegisterInput"
                    />
                  </IonCol>
                </IonRow>
              </div>
              
              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Father's Title</IonLabel>
                    <IonSelect
                      onIonChange={(e) => setFatherTitle(e.target.value)}
                      required
                      className="RegisterSelect"
                      value={fatherTitle}
                      placeholder="Select Father's Title"
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
                      onIonChange={(e) => setFatherStatus(e.target.value)}
                      required
                      className="RegisterSelect"
                      value={fatherStatus}
                      placeholder="Select father's membership status"
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
              

            <IonRow>
              <IonCol>
                <h1>MOTHER</h1>
              </IonCol>
            </IonRow>

            <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Mother's Full Names</IonLabel>
                    <IonInput
                      onIonChange={(e) => setMotherName(e.target.value)}
                      required
                      value={motherName}
                      placeholder=" Enter mother's full name"
                      className="RegisterInput"
                    />
                  </IonCol>
                </IonRow>
              </div>
              
              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Mother's Title</IonLabel>
                    <IonSelect
                      onIonChange={(e) => setMotherTitle(e.target.value)}
                      required
                      className="RegisterSelect"
                      value={motherTitle}
                      placeholder="Select Mother's Title"
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
                      onIonChange={(e) => setMotherStatus(e.target.value)}
                      required
                      className="RegisterSelect"
                      value={motherStatus}
                      placeholder="Select mother's membership status"
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

              <div className="inputItem">
                <IonRow>
                  <IonCol>
                    <IonLabel>Address</IonLabel>
                    <IonInput
                      required
                      value={address}
                      onIonChange={(e) => setAddress(e.target.value)}
                      type="text"
                      placeholder=" Street name, City, Province, Code"
                      className="RegisterInput"
                    />
                  </IonCol>
                </IonRow>
              </div>

    
              <div>
                <p>
                  Are you in a cell or fellowship? If yes, kindly state the name of your
                  cell and fellowship.
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
                    placeholder="Enter the cell name"
                    className="RegisterInput"
                    onIonChange={(e) => setCellName(e.target.value)}
                    value={cellName}
                  />
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

export default SacramentsRegistration;
