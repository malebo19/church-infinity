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
import GetPosts from "../services/GetPosts";
import { UserContext } from "../App";
import { IP } from "../services/config";

function Update() {
  const [postModal, setPostModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const { user, setUser } = useContext(UserContext);
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
              <IonTextarea placeholder="What's on your mind?"></IonTextarea>
            </IonCardContent>
          </IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonInput type="file" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="block" onClick={() => setPostModal(false)}>
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
                              <img src={post.document.trim().length > 0 ? IP + "/" + post.document : "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" } />
                            </IonAvatar>
                          </div>
                          <div>
                            <h3>{post.username}</h3>
                            <p>12 mins ago</p>
                          </div>
                        </div>
                        <div className="post-content">
                          <p>
                            {post.content}
                          </p>
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
