import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Container from "./components/Container";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Best from "./components/Best"
import Country from "./components/Country";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import HeadSubject from "./components/HeadSubject";
import image from '../src/components/images/image22.png'
import NavBar from "./components/CustomNavBar";
function App() {

  return (
    <div className="background">
      {/* <Container>
        <NavBar/>
      </Container> */}
      <Container>
        <Banner />
      </Container>
      <Container>
        <Service />
      </Container>
      <Container>
        <Heading text="BEST OF ASIA" />
      <HeadSubject text="Explore the top spots of Asia" />
        <Best imageMain={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg"} name={"Great Wall of China"} image={"https://vignette.wikia.nocookie.net/cyberpunk/images/3/3e/255px-Flag_of_the_People%27s_Republic_of_China.svg.png/revision/latest?cb=20180830132455"} discription={"Greate Wall of China is one of the most beautiful place in the world.Here beauty and clean everywhere.And those unimaginable forests are super awesome."}/>
        <Best imageMain={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"} name={"New York"} image={"https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"} discription={"New York one of the mst modern City in the world.Here beauty and clean everywhere.And those unimaginable buildings are super awesome."} />
        {/* <Best imageMain={""} name={""} image={""} discription={""} /> */}
      </Container>
      <Container>
        <Country />
      </Container>
      <Container>
        <Review />
      </Container>
      <Container>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
