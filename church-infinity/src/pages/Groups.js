import React, { useEffect, useState, useContext } from "react";
import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { person } from "ionicons/icons";
import GetGroups from "../services/GetGroups";
import { UserContext } from "../App";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

function Groups() {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useContext(UserContext);
  const [groups, setGroups] = useState([]);
  var id = {
    user_id: user.id,
  };
  useEffect(() => {
    GetGroups(id).done((res) => {
      setGroups(res.groups);
      console.log(res);

      setLoading(false);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start' >
            <IonBackButton />
          </IonButtons>
          <IonTitle>Groups</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="chat-content" >
        {loading && (
          <IonGrid>
            <IonRow
              style={{ height: "90vh" }}
              className="ion-align-items-center"
            >
              <IonCol className="ion-text-center">
                <SyncLoader
                  loading={loading}
                  css={override}
                  color="blue"
                  size={35}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        )}

        {groups ? (
          <IonList>
            {groups.map((group) => (
              // <IonItem key={group.group_id}>
              //   <IonLabel>{group.name}</IonLabel>
              //   <IonIcon slot="end" icon={person} />
              // </IonItem>

              <IonItem
                routerLink={`/Main/GroupChat/${group.group_id}`}
                button
                key={group.group_id}
              >
                <IonIcon
                  style={{ marginRight: "10px" }}
                  icon={person}
                  color="primary"
                />
                <IonLabel>
                  <h2>{group.name}</h2>
                  <p>{group.descrip}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        ) : (
          <h3 className="ion-text-center">No Groups</h3>
        )}
      </IonContent>
    </IonPage>
  );
}

export default Groups;
