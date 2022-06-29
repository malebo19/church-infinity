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
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { Geolocation } from "@capacitor/geolocation";
import {
  buildOutline,
  business,
  calendar,
  calendarNumber,
  cash,
  closeCircle,
  images,
  newspaper,
  notifications,
  searchCircle,
  timer,
  videocam,
} from "ionicons/icons";
import { UserContext } from "../App";

import add from "../assets/add.svg";
import explore from "../assets/explore.svg";
import businesss from "../assets/business.svg";
import events from "../assets/events.svg";
import gallery from "../assets/gallery.svg";
import paynow from "../assets/paynow.svg";
import registrations from "../assets/registrations.svg";
import watchlive from "../assets/watchlive.svg";
import searchIcon from "../assets/search.svg";

import dove from "../assets/dove.png";
import banner from "../assets/banner.png";
import testimony from "../assets/testimony.png";
import "./HomeMain.css";
import GetNews from "../services/GetNews";
import GetTestimonies from "../services/GetTestimonies";
import { IP } from "../services/config";

function HomeMain() {
  const { user, setUser } = useContext(UserContext);
  const [homeModal, sethomeModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [newsModalData, setNewsModalData] = useState({});
  const [testimonies, setTestimonies] = useState([]);
  let history = useHistory();

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  useEffect(() => {
    GetNews().done((res) => {
      console.log(res.data);
      setNews(res.data);
    });
    GetTestimonies().done((res) => {
      console.log(res.data);
      setTestimonies(res.data);
    });
    console.log(user);

    // async function getLocation() {
    //   const coordinates = await Geolocation.getCurrentPosition();
    //   console.log(coordinates);
    // }

    // getLocation();
  }, []);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <IonPage>
      <IonModal isOpen={homeModal}>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{newsModalData?.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {newsModalData?.content}

              <br />
              {/* <IonButton onClick={() => sethomeModal(false)} expand="block">
                Sign Up
              </IonButton> */}
              <div className="ion-text-right">
                <IonButton onClick={() => sethomeModal(false)} fill="outline">
                  <IonIcon icon={closeCircle} />
                  Close
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
              <img
                src={
                  user?.profile?.trim()?.length > 0
                    ? IP + "/" + user?.profile
                    : "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                }
              />
            </IonAvatar>
          </div>
          <div className="HomeSearch">
            <IonIcon slot="icon" icon={searchIcon}/>
            <IonInput placeholder="  Search" />
          </div>
          <div>
            <IonIcon size="large" color="primary" icon={notifications} />
          </div>
        </div>

        <IonSlides pager={true} options={slideOpts}>
          {news.map((item) => (
            <IonSlide key={item.id}>
              <IonCard
                button
                onClick={() => {
                  setNewsModalData(item);
                  sethomeModal(true);
                }}
              >
                <IonCardContent>
                  <img
                    style={{
                      height: "220px",
                      width: "100vw",
                      objectFit: "cover",
                    }}
                    src={IP + "/" + item.document}
                  />
                  <h2 style={{ fontWeight: "bold" }}>{item.title}</h2>{" "}
                  {item.content.substring(0, 30) + "..."}
                  <a>Read more</a>
                </IonCardContent>
              </IonCard>
            </IonSlide>
          ))}
        </IonSlides>

        {/* <IonCard button onClick={() => sethomeModal(true)}>
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
        </IonCard> */}
        <IonGrid>
          <div className="Main">
            <IonRow className="ion-text-center">
              <IonCol>
                <IonCard button routerLink="/Main/Home/Tab2">
                  <IonCardContent>
                    <div className="mainIcon ">
                      <IonIcon color="danger" icon={explore} />
                    </div>
                    <div>Explore updates</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard button routerLink="/Main/Home/Event">
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={events} />
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
                      <IonIcon color="danger" icon={watchlive} />
                    </div>
                    <div>Watch Live</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard button routerLink="/Main/Home/ActivitiesRegistration">
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={registrations} />
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
                      <IonIcon color="danger" icon={paynow} />
                    </div>
                    <div>Pay Online</div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard button routerLink="/Main/Home/BusinessLounge">
                  <IonCardContent>
                    <div className="mainIcon">
                      <IonIcon color="danger" icon={businesss} />
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
                      <IonIcon color="danger" icon={gallery} />
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
              {testimonies.map((item) => (
                <IonSlide key={item.id}>
                  <IonCard button className="ion-text-center">
                    <IonCardContent>
                      <img
                        style={{
                          height: "220px",
                          width: "100vw",
                          objectFit: "cover",
                        }}
                        src={IP + "/" + item.document}
                      />
                      {item.content}
                    </IonCardContent>
                  </IonCard>
                </IonSlide>
              ))}
            </IonSlides>
            {/* <IonSlides pager={true} options={slideOpts}>
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
            </IonSlides> */}
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
