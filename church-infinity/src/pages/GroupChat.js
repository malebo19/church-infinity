import React, { useContext, useEffect, useState, useRef } from "react";
import firebase from "firebase/app";
import $ from "jquery";
import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";

import GetMessages from "../services/GetMessages";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import "./GroupChat.css";
import { fileTray, send } from "ionicons/icons";
import SendMessage from "../services/SendMessage";
import { IP } from "../services/config";

function GroupChat() {
  const db = firebase.firestore();
  const churchRef = firebase.firestore().collection("church");

  const fileRef = useRef(null);
  let { groupID } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [attachment, setAttachment] = useState(null);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const [loading, setLoading] = useState(true);
  const sendMessageHandler = () => {
    var form_data = new FormData();
    var data = {
      user_id: user.id,
      group_id: groupID,
      username: user.username,
      msg_date: "2020-01-01",
      msg: newMessage,
      attachment: attachment,
    };
    Object.keys(data).map((key) => {
      form_data.append(key, data[key]);
    });

    SendMessage(form_data);
    churchRef.add({ Kenan: "Name" });
  };

  var data = {
    user_id: user.id,
    group_id: groupID,
  };
  useEffect(() => {
    churchRef.onSnapshot(function (snapshot) {
      GetMessages(data).done((res) => {
        // console.log(res);
        setMessages(res.data);
        console.log(messages);
        console.log(res.data);
        setLoading(false);
      });

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
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Main/Home/Profile" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading && (
          <IonGrid>
            <IonRow
              style={{ height: "90vh" }}
              className="ion-align-items-center ion-justify-content-center"
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
        <h1>Group Chat with the id of {groupID}</h1>
        {/*  chatbox */}
        <IonGrid>
          <IonRow style={{ marginBottom: "40px" }}>
            <IonCol>
              <div className="chatbox">
                {messages.map((message) => (
                  <div key={message.id}>
                    <div
                      className={
                        message.member_id === user.id
                          ? "chatbox-msg right"
                          : "chatbox-msg left"
                      }
                    >
                      {message.document.trim().length > 0 && (
                        <img src={IP + "/" + message.document} />
                      )}
                      {message.msg && message.msg}
                    </div>
                  </div>
                ))}
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-bottom">
            <IonCol>
              <div className="chat-input ion-text-center ">
                <IonInput
                  value={newMessage}
                  placeholder="Text Message..."
                  onIonChange={(e) => setNewMessage(e.target.value)}
                />
                <input
                  type="file"
                  ref={fileRef}
                  style={{ display: "none" }}
                  onChange={(e) => setAttachment(e.target.files[0])}
                />
                <div className="chat-icon">
                  <IonIcon
                    size="large"
                    icon={fileTray}
                    color="primary"
                    onClick={() => fileRef.current.click()}
                  />
                </div>
                <div className="chat-icon">
                  <IonIcon
                    size="large"
                    icon={send}
                    color="primary"
                    onClick={sendMessageHandler}
                  />
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* {messages.length > 0 ? JSON.stringify(messages) : <h1>No messages</h1>} */}
      </IonContent>
      {/* <div id="scroll" style={{ marginTop: "150px", paddingTop: "20px" }}></div> */}
    </IonPage>
  );
}

export default GroupChat;
