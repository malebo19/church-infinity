import React, { useEffect, useState, useContext } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { person } from "ionicons/icons";
import GetGroups from "../services/GetGroups";
import { UserContext } from "../App";

function Groups() {
  const { user, setUser } = useContext(UserContext);
  const [groups, setGroups] = useState([]);
  var id = {
    user_id: user.id,
  };
  useEffect(() => {
    GetGroups(id).done((res) => {
      setGroups(res.groups);
      console.log(res);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
          <IonTitle>Groups</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
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
