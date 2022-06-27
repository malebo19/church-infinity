import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
// import "~react-image-gallery/styles/css/image-gallery.css";
import banner from "../assets/banner.png";
import event from "../assets/event.png";
import testimony from "../assets/testimony.png";
import dove from "../assets/dove.png";

function Gallery() {
  const images = [
    {
      original: banner,
      thumbnail: banner,
    },
    {
      original: event,
      thumbnail: event,
    },
    {
      original: testimony,
      thumbnail: testimony,
    },
    {
      original: dove,
      thumbnail: dove,
    },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow style={{ height: "90vh" }} className="ion-align-items-center">
            <IonCol>
              <ImageGallery items={images} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Gallery;
