import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "../css/About.css";
import logo from "../Images/login.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <div class="about-section">
        <img className="logopics" src={logo}></img>
        <h1>About Us </h1>
        <p>
          Maintenance Nepal is a online platform that tracks the service
          providers for the maintenance and service for household activities
        </p>
        <p>Paknajol,Kathmandu Nepal</p>
      </div>

      <h2
        style={{
          textDecoration: "underline",
          fontFamily: "Frankling Gothic Medium",
          fontSize: "30px",
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        The Importance Of Home Maintenance
      </h2>
      <p
        style={{
          fontFamily: "Frankling Gothic Medium",
          fontSize: "20px",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingBottom: "20px",
        }}
      >
        Whether you have recently purchased your home or have been living there
        for a while, home maintenance is an unavoidable part of owning a
        property that if you do right, can ensure that your home remains a safe,
        secure and cared for environment. Not only can staying on top of things
        avoid problems in the long term, but regular maintenance and repairs
        will provide the opportunity to make minor upgrades that can increase
        the value of your home, as well as improve on it as a living space. Home
        maintenance, in this instance, does not refer to general, everyday tasks
        such as cleaning and gardening – rather, tasks that may be considered as
        more of a hassle. This includes things such as: Checking safety and
        security features Maintaining plumbing, heating and other utilities
        Carrying out inspection of the structure of the home Maintaining
        exterior paint, materials and general aesthetics
      </p>

      <p
        style={{
          fontFamily: "Frankling Gothic Medium",
          fontSize: "20px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        Carrying out maintenance tasks sooner rather than later is important for
        a number of reasons. Firstly, you will ensure that you are living in a
        safe and functional home, while saving money in the process. In the long
        run, the avoidance of home maintenance tasks will mean that problems
        build up, eventually leading to significant damage or safety hazards in
        the form of poor structural integrity or ineffective safety features
        like smoke alarms. Furthermore, these problems will cost a significant
        amount in comparison to the minimal costs associated with regular
        maintenance and small repairs. You will also save time and maintain a
        flexible schedule if you stay on top of your home maintenance duties.
        While maintenance is able to be scheduled and worked around due to the
        non-urgent nature of the repairs, waiting for a problem to become more
        serious will mean that you have to move your schedule around, in order
        to take care of it as soon as possible. Additionally, being responsible
        for the upkeep of the general aesthetics of the inside and outside of
        your home will retain your homes’ image and atmosphere, resulting in a
        home that you, your family and visitors can enjoy. A final point here is
        that carrying out home maintenance will directly increase the value of
        your home. Whether you are considering selling your home or planning to
        stay, maximising the value of your home is important in being prepared
        for any unexpected changes. Any inspections that are carried out will
        result in higher valuations in a well maintained home.
      </p>
    </div>
  );
};

export default About;
