import React, { useEffect, useState, useContext } from "react";
import {
  IonAvatar,
  IonBackdrop,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { Geolocation } from "@capacitor/geolocation";
import {
  add,
  buildOutline,
  business,
  calendar,
  calendarNumber,
  cash,
  images,
  newspaper,
  notifications,
  searchCircle,
  timer,
  videocam,
} from "ionicons/icons";
import { UserContext } from "../App";

import dove from "../assets/dove.png";
import banner from "../assets/banner.png";
import testimony from "../assets/testimony.png";
import "./HomeMain.css";

function HomeMain() {
  const { user, setUser } = useContext(UserContext);
  const [homeModal, sethomeModal] = useState(false);
  let history = useHistory();

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  useEffect(() => {
    console.log(user);

    // async function getLocation() {
    //   const coordinates = await Geolocation.getCurrentPosition();
    //   console.log(coordinates);
    // }

    // getLocation();
  }, []);
  return (
    <IonPage>
      <IonModal isOpen={homeModal}>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>STPPL Program Coming Up</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Dear faith community - Some of our beloved parishioners are
              suffering extensive damages to their homes from the recent storm.
              Many have lost possessions, important resources, and even the use
              of their buildings. As a church, we must lift each other up and
              support our members through tragedy. <br /> <br /> Please consider
              adding an extra donation to our second collection this week. We
              will be offering all donations to church members in need.
              Donations will go to rebuilding homes and providing food and clean
              water to survivors. If you've found yourself in need of
              assistance, please contact the office at [phone number or email].{" "}
              <br /> <br />
              We will also be accepting donations of dry goods, baby necessities
              and clothing. If you'd like to donate items, please visit the
              office at [address or location]. Thank you for your continued
              generosity! <br />
              <IonButton onClick={() => sethomeModal(false)} expand="block">
                Sign Up
              </IonButton>
              <div className="ion-text-right">
                <IonButton onClick={() => sethomeModal(false)} fill="outline">
                  Home
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
      <IonContent>
        <h1>{user.username}</h1>
        <div className="dove">
          <img src={dove} />
        </div>

        <div className="home-header">
          <div>
            <IonAvatar
              onClick={() => {
                history.push("/Main/Home/Profile");
              }}
            >
              <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
            </IonAvatar>
          </div>
          <div className="HomeSearch">
            {/* <IonIcon slot="icon" icon={searchCircle} /> */}
            <IonInput placeholder="  Search" />
          </div>
          <div>
            <IonIcon size="large" color="primary" icon={notifications} />
          </div>
        </div>
        <IonCard button onClick={() => sethomeModal(true)}>
          <IonCardContent>
            <img src={banner} />
            <h2 style={{ fontWeight: "bold" }}>
              STPPL Program Coming Up{" "}
            </h2>{" "}
            Dear faith community - Some of our beloved parishioners are
            suffering extensive damages to their homes from the recent storm.
            <br />
            <a>Read more...</a>
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <div className="Main">
            <IonRow className="ion-text-center">
              <IonCol>
                <IonCard button routerLink="/Main/Home/Tab2">
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={timer} />
                    </div>
                    <div>Explore updates</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard button routerLink="/Main/Home/Event">
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={calendar} />
                    </div>
                    <div>Events</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol>
                <IonCard button>
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={videocam} />
                    </div>
                    <div>Watch Live</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard button routerLink="/Main/Home/ActivitiesRegistration">
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={newspaper} />
                    </div>
                    <div>Registrations</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol>
                <IonCard button>
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={cash} />
                    </div>
                    <div>Pay Online</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard button routerLink="/Main/Home/BusinessLounge">
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={business} />
                    </div>
                    <div>Business Lounge</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol>
                <IonCard button routerLink="/Main/Home/Gallery">
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={images} />
                    </div>
                    <div>Gallery</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard button>
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={add} />
                    </div>
                    <div>Add</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <h2 style={{ marginLeft: "25px" }}>Testimonies</h2>
            <IonSlides pager={true} options={slideOpts}>
              <IonSlide>
                <IonCard button className="ion-text-center">
                  <IonCardContent>
                    <img src={testimony} />
                    <h2 style={{ fontWeight: "bold" }}>
                      Eternal Life Is At Work In Me{" "}
                    </h2>{" "}
                    I refuse to succumb to the rudiments of this world; the
                    corrupting and destructive influences of this present world
                    of darkness...
                  </IonCardContent>
                </IonCard>
              </IonSlide>
              <IonSlide>
                <IonCard button className="ion-text-center">
                  <IonCardContent>
                    <img src={testimony} />
                    <h2 style={{ fontWeight: "bold" }}>Testimony 2 </h2>{" "}
                  </IonCardContent>
                </IonCard>
              </IonSlide>
              <IonSlide>
                <IonCard button className="ion-text-center">
                  <IonCardContent>
                    <img src={testimony} />
                    <h2 style={{ fontWeight: "bold" }}>Testimony 3</h2>{" "}
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            </IonSlides>
          </div>
          <div className="main-end">
            <IonRow className="ion-align-items-center">
              <IonCol size="4">
                <img src={banner} />
              </IonCol>
              <IonCol>
                <h6>The Name of Jesus Is Named Upon Me</h6>

                <p>Text Text... </p>
              </IonCol>
              <hr />
            </IonRow>
            <IonRow className="ion-align-items-center">
              <IonCol size="4">
                <img src={testimony} />
              </IonCol>
              <IonCol>
                <h6>The Name of Jesus Is Named Upon Me</h6>

                <p>Text Text</p>
              </IonCol>
              <hr />
            </IonRow>
            <IonRow className="ion-align-items-center">
              <IonCol size="4">
                <img src={banner} />
              </IonCol>
              <IonCol>
                <h6>The Name of Jesus Is Named Upon Me</h6>
                <p>Text Text </p>
              </IonCol>
              <hr />
            </IonRow>
            {/* <h1>Home Main</h1>
            <p>Notification and Testimonies(modal)</p>
            <Link to="/Main/Home/Event">Event</Link> <br />
            <Link to="/Main/Home/Profile">Profile</Link> <br />
            <Link to="/Main/Home/BusinessLounge">Business Lounge</Link> <br />
            <Link to="/Main/Home/ActivitiesRegistration">
              Activities Registration
            </Link>{" "}
            <br /> */}
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default HomeMain;
