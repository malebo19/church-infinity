import React, { useState, useEffect, useContext } from "react";
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import firebase from "firebase/app";

import {
  chatbubble,
  document,
  heart,
  notifications,
  pencil,
  searchCircle,
} from "ionicons/icons";
import "./Update.css";
import Kenan from "../assets/Kenan.jpeg";
import dove from "../assets/dove.png";
import banner from "../assets/banner.png";
import testimony from "../assets/testimony.png";
import ReactTimeAgo from "react-time-ago";

import GetPosts from "../services/GetPosts";
import { UserContext } from "../App";
import { IP } from "../services/config";

import CreatePosts from "../services/CreatePosts";

function Update() {
  const db = firebase.firestore();
  const churchRef = firebase.firestore().collection("church");
  const [postModal, setPostModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState("");

  const newPostHandler = () => {
    var form_data = new FormData();
    var date = new Date();
    var data = {
      user_id: user.id,
      content: content,
      time: date,
      attachment: attachment,
    };

    Object.keys(data).map((key) => {
      form_data.append(key, data[key]);
    });
    console.log(data);

    CreatePosts(form_data);
    setPostModal(false);
    churchRef.add({ Kenan: "Name" });
  };

  useEffect(() => {
    GetPosts().done((res) => {
      console.log(res);
      setPosts(res.data);
    });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Updates</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonModal isOpen={postModal}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>New Post</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonTextarea
                value={content}
                placeholder="What's on your mind?"
                onIonChange={(e) => setContent(e.target.value)}
              ></IonTextarea>
            </IonCardContent>
          </IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <input
                  type="file"
                  onChange={(e) => setAttachment(e.target.files[0])}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="block" onClick={newPostHandler}>
                  Post
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="block" onClick={() => setPostModal(false)}>
                  Cancel
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
      <IonContent fullscreen>
        <div className="Update">
          <div className="new-post-container">
            <div className="new-post" onClick={() => setPostModal(true)}>
              <IonIcon color="light" icon={pencil} />

              <div>Write a post...</div>
            </div>
          </div>
          <IonGrid>
            <h4 style={{ marginLeft: "20px" }}>Latest Messages</h4>

            {posts.map((post) => (
              <IonRow key={post.id}>
                <IonCol>
                  <IonCard>
                    <IonCardContent>
                      <div className="post">
                        <div className="post-header">
                          <div>
                            <IonAvatar>
                              <img
                                src={
                                  post.profile?.trim().length > 0
                                    ? IP + "/" + post.document
                                    : "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                                }
                              />
                            </IonAvatar>
                          </div>
                          <div>
                            <h3>{post.username}</h3>
                            <ReactTimeAgo date={post.time} locale="en-US" />
                          </div>
                        </div>
                        <div className="post-content">
                          <p>{post.content}</p>
                          {post.document?.trim().length > 0 && (
                            <img src={IP + "/" + post.document} />
                          )}
                        </div>
                        <div className="post-footer">
                          <div className="footer-likes">
                            <IonIcon icon={heart} />
                            25 likes
                          </div>
                          <div className="footer-comments">
                            <IonIcon icon={chatbubble} />
                            13 comments
                          </div>
                        </div>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Update;
