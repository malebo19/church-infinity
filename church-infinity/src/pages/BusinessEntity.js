import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg
} from "@ionic/react";
import construction from "../assets/construction.png";
import cooking from "../assets/cooking.png";
import pavement from "../assets/pavement.png";


function BusinessEntity({name,subtitle}) {
  return (
    <IonCard
      style={{
        padding: "0"
      }}
    >
    {/* <IonCardHeader> */}
      <IonImg width="100%" src={construction}/>
    {/* </IonCardHeader> */}
    <IonCardContent>
        <IonCardTitle
        style={{
          marginTop: "-50px",
          color: "blue",
          fontWeight: "bold"
        }}
        >{name}
        </IonCardTitle>
        <IonCardSubtitle
        style={{
          marginTop: "-5px",
          color: "black",
          fontWeight: "bold"
        }}
        >
          {subtitle}
        </IonCardSubtitle>
    </IonCardContent>
</IonCard>
  );
}

export default BusinessEntity;
