import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonToolbar,
  IonRow,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonCol,
  IonIcon,
  IonLabel
} from "@ionic/react";
import construction from "../assets/construction.png";
import tiber from "../assets/tiber.svg";
import pavement from "../assets/pavement.png";
import { callOutline, earth, earthOutline, mailOutline, thumbsUp } from "ionicons/icons";


function BusinessInfo({name,subtitle}) {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start" >
                    <IonBackButton defaultHref="/Main/Home/"/>
                </IonButtons>
                <IonTitle color="primary">Tiber Construction</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard
            style={{
                padding: "0"
            }}
            >
                {/* <IonCardHeader> */}
                <IonImg width="100%" src={tiber}/>
                {/* </IonCardHeader> */}
                {/* <IonCardContent>
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
                </IonCardContent> */}
            </IonCard>
            <IonRow>
               <IonCol>
                    <IonIcon slot="start" icon={callOutline}/>
                    +27 11 000 0000
               </IonCol>
               
               <IonCol>
                    <IonIcon slot="start" color="primary" icon={earthOutline}/>
                    tiber.co.za
               </IonCol>
            </IonRow>

            <IonRow>
                <IonIcon slot="start" color="primary" icon={mailOutline}/>
                info@tiber.co.za
            </IonRow>
            <br/>

            <IonRow>
                <p>
                Tiber is a private and management owned company with a culture of loyalty and service, supported by our highly skilled and experienced management team and workforce, we are able to provide our clients with a hands-on approach to understanding and meeting their needs with superior and sustainable property solutions. <b>Read more...</b>
                </p>
            </IonRow>

            <IonLabel color="primary">
                <b>Our Services</b>
            </IonLabel>
            <br/>
            <IonRow>
                <IonRow>
                    <IonCol>
                        <IonImg src={tiber} width="80px"/>
                    </IonCol>
                    <IonCol>
                        <b>Painting</b><br/>
                        R115<br/>
                        per square meter
                    </IonCol>
                </IonRow>
            </IonRow>
            
            <IonRow>
                <IonRow>
                    <IonCol>
                        <IonImg src={tiber} width="80px"/>
                    </IonCol>
                    <IonCol>
                        <b>Tilling</b><br/>
                        R115<br/>
                        per square meter
                    </IonCol>
                </IonRow>
            </IonRow>
            
            <IonRow>
                <IonRow>
                    <IonCol>
                        <IonImg src={tiber} width="80px"/>
                    </IonCol>
                    <IonCol>
                        <b>Roofing</b><br/>
                        R115<br/>
                        per square meter
                    </IonCol>
                </IonRow>
            </IonRow>
            
            <IonRow>
                <IonRow>
                    <IonCol>
                        <IonImg src={tiber} width="80px"/>
                    </IonCol>
                    <IonCol>
                        <b>Capentry</b><br/>
                        R115<br/>
                        per square meter
                    </IonCol>
                </IonRow>
            </IonRow>
            
        </IonContent>
    </IonPage>
  );
}

export default BusinessInfo;
