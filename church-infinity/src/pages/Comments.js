import React, { useContext, useState, useEffect, useRef } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonIcon,
} from "@ionic/react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import ReactTimeAgo from "react-time-ago";
import { heart } from "ionicons/icons";
import { IP } from "../services/config";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import CreateComment from "../services/CreateComment";

function Comments({ commentModal, setCommentModal, currentPost }) {
  const page = useRef(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);
  const { user, setUser } = useContext(UserContext);
  const [presentingElement, setPresentingElement] = useState(null);

  const data = [];

  return (
    <IonModal
      isOpen={commentModal}
      presentingElement={presentingElement}
      swipeToClose={false}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton fill="clear" onClick={() => setCommentModal(false)}>
              Close
            </IonButton>
            {/* <IonBackButton defaultHref="/Main/Home/Tab2"  /> */}
          </IonButtons>
          <IonTitle>Comments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardContent>
                <div className="post">
                  <div className="post-header">
                    <div>
                      <IonAvatar>
                        <img
                          src={
                            currentPost?.profile?.trim().length > 0
                              ? IP + "/" + currentPost.profile
                              : "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                          }
                        />
                      </IonAvatar>
                    </div>
                    <div>
                      <h3>
                        <b>{currentPost?.username}</b>
                      </h3>
                      <ReactTimeAgo date={currentPost?.time} locale="en-US" />
                    </div>
                  </div>
                  <div className="post-content">
                    <p>{currentPost?.content}</p>
                    {currentPost?.document?.trim().length > 0 && (
                      <img src={IP + "/" + currentPost?.document} />
                    )}
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <CommentSection
          currentUser={{
            currentUserId: user.id,
            currentUserImg:
              user.profile?.trim().length > 0
                ? IP + "/" + user.profile
                : "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
            currentUserProfile:
              "https://www.linkedin.com/in/riya-negi-8879631a9/",
            currentUserFullName: user.username,
          }}
          logIn={{
            loginLink: "http://localhost:3001/",
            signupLink: "http://localhost:3001/",
          }}
          commentData={data}
          // onSubmitAction={(data: {
          //   userId: string
          //   comId: string
          //   avatarUrl: string
          //   userProfile?: string
          //   fullName: string
          //   text: string
          //   replies: any
          //   commentId: string
          // }) => console.log('check submit, ', data)}
          // currentData={(data: any) => {
          //   console.log('curent data', data)
          // }}
        />
      </IonContent>
    </IonModal>
  );
}

export default Comments;
