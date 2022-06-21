import React, { useContext, useEffect, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import GetMessages from "../services/GetMessages";

function GroupChat() {
  let { groupID } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  var data = {
    user_id: user.id,
    group_id: groupID,
  };
  useEffect(() => {
    GetMessages(data).done((res) => {
      // console.log(res);
      setMessages(res.data);
      console.log(messages);
      // if (res.status === true) {
      //   history.push("/home");
      //   localStorage.setItem("user", JSON.stringify(res.data));
      //   setUser(res.data);
      // } else {
      //   setError(true);
      //   console.log(res.message);
      // }
      // if (res.status === 200) {
      //   setUser(res.data);
      //   history.push("/home");
      // } else {
      //   setError(true);
      // }
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Group chat</IonTitle>
          <IonButtons>
            <IonBackButton defaultHref="/Main/Home/Profile" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Group Chat with the id of {groupID}</h1>
        {messages.length > 0 ? JSON.stringify(messages) : <h1>No messages</h1>}
      </IonContent>
    </IonPage>
  );
}

export default GroupChat;
