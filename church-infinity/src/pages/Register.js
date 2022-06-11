import React from "react";
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  return (
    <IonPage>
      <IonContent>
        <div className="Register">
          <IonGrid style={{ width: "85%" }} className="ion-align-items-center">
            <IonRow>
              <IonCol>
                <h1>Register</h1>
              </IonCol>
            </IonRow>

            <div className="inputItem">
              <IonRow>
                <IonCol>
                  <IonLabel>Name</IonLabel>
                  <IonInput
                    placeholder=" Enter your full name"
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
                    className="RegisterSelect"
                    // value={gender}
                    placeholder="Select Title"
                    // onIonChange={(e) => setGender(e.detail.value)}
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
                    className="RegisterSelect"
                    // value={gender}
                    placeholder="Select your membership status"
                    // onIonChange={(e) => setGender(e.detail.value)}
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
                    type="email"
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
                    type="number"
                    placeholder="  Enter your cellphone number"
                    className="RegisterInput"
                  />
                </IonCol>
              </IonRow>
            </div>

            <IonRow>
              <p>Are new to Local Church (less than 2 months) ?</p>
              <IonCol size="1">
                <IonCheckbox
                // checked={}
                // onIonChange={(e) => console.log(e.detail.checked)}
                />
              </IonCol>
              <IonCol>
                <IonLabel>Yes</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="1">
                <IonCheckbox
                // checked={}
                />
              </IonCol>
              <IonCol>
                <IonLabel>No</IonLabel>
              </IonCol>
            </IonRow>
            <div>
              <p>
                Have you joined a cell? If yes, kindly state the name of your
                cell and cell leader
              </p>
            </div>
            <IonRow>
              <IonCol size="1">
                <IonCheckbox
                // checked={}
                // onIonChange={(e) => console.log(e.detail.checked)}
                />
              </IonCol>
              <IonCol>
                <IonLabel>Yes</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="1">
                <IonCheckbox
                // checked={}
                />
              </IonCol>
              <IonCol>
                <IonLabel>No</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  placeholder="  Enter the cell and cell leader"
                  className="RegisterInput"
                />
              </IonCol>
            </IonRow>
            <div>
              <p>Have you been baptised yet?</p>
            </div>
            <IonRow>
              <IonCol size="1">
                <IonCheckbox
                // checked={}
                // onIonChange={(e) => console.log(e.detail.checked)}
                />
              </IonCol>
              <IonCol>
                <IonLabel>Yes</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="1">
                <IonCheckbox
                // checked={}
                />
              </IonCol>
              <IonCol>
                <IonLabel>No</IonLabel>
              </IonCol>
            </IonRow>
            <br />

            <IonButton expand="block">Register</IonButton>
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
