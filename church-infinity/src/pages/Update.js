import React, { useState } from "react";
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
function Update() {
  const [postModal, setPostModal] = useState(false);
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
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <div className="post">
                      <div className="post-header">
                        <div>
                          <IonAvatar>
                            <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
                          </IonAvatar>
                        </div>
                        <div>
                          <h3>Malebo M</h3>
                          <p>4 mins ago</p>
                        </div>
                      </div>
                      <div className="post-content">
                        <img src={banner} />
                        <img src={testimony} />
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
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <div className="post">
                      <div className="post-header">
                        <div>
                          <IonAvatar>
                            <img src={Kenan} />
                          </IonAvatar>
                        </div>
                        <div>
                          <h3>Kenan K</h3>
                          <p>12 mins ago</p>
                        </div>
                      </div>
                      <div className="post-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit.
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
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Update;
