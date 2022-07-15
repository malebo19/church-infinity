import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonSlides,
  IonSlide,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,

  IonCol,
  IonToolbar,
} from "@ionic/react";

import BusinessEntity from "./BusinessEntity";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 1.2,
  loop: true
};

function BusinessLounge() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start" >
          <IonBackButton defaultHref="/Main/Home/BusinessLounge/"/>
        </IonButtons>
          <IonTitle>Business Lounge</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
      <IonLabel color="primary"
        style={{
          fontWeight: "bold"
        }}
      >Top Businesses</IonLabel>

      <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
              <a href="/Main/Home/BusinessLounge/Business/">
                <BusinessEntity name="Tiber Construction" subtitle="title2" />
              </a>
            </IonSlide>
            
          <IonSlide>
              <BusinessEntity name="Business 2 Name" subtitle="title2"/>
            </IonSlide>
            
        
      </IonSlides> 
      
      <IonLabel color="primary"
        style={{
          fontWeight: "bold"
        }}
      >Construction</IonLabel>

      <IonSlides pager={true} options={slideOpts}>
        
        <IonSlide>
          <BusinessEntity name="Tiber Construction" subtitle="title1"/>
        </IonSlide>
        <IonSlide>
          <BusinessEntity name="Tiber Construction" subtitle="title2"/>
        </IonSlide>
        
      </IonSlides> 
      
      <IonLabel color="primary"
        style={{
          fontWeight: "bold"
        }}
      >Marketing</IonLabel>

      <IonSlides pager={true} options={slideOpts}>
        
        <IonSlide>
          <BusinessEntity name="Tiber Marketings" subtitle="title2"/>
        </IonSlide>
        <IonSlide>
          <BusinessEntity name="Business 2 Marketing" subtitle="title2"/>
        </IonSlide>
        
      </IonSlides> 
      
      <IonLabel color="primary"
        style={{
          fontWeight: "bold"
        }}
      >Catering</IonLabel>

        <IonSlides pager={true} options={slideOpts}>
          
          <IonSlide>
            <BusinessEntity name="Catering Business 1" subtitle="title2"/>
          </IonSlide>
          <IonSlide>
            <BusinessEntity name="Catering Business 2" subtitle="title2"/>
          </IonSlide>
          
        </IonSlides> 
      </IonContent>
    </IonPage>
  );
}

export default BusinessLounge;
