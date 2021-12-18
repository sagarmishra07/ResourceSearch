import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "../css/About.css";
import logo from "../Images/login.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div class="about-section">
        <img className="logopics" src={logo}></img>
        <h1>Contact Us </h1>
        <h2>Get In Touch With Us</h2>
        <h3>Phone Number</h3>
        <p>01-4253535,01-1121212</p>
        <h3>Email Address</h3>
        <p>MaintenaceNepal@info.com</p>
        <h3>Come and Visit Our Office At</h3>
        <p>Paknajol,Kathmandu Nepal</p>
      </div>

      <h2
        style={{
          textAlign: "center",
          fontSize: "30px,",
          textDecoration: "underline",
        }}
      >
        Our Team
      </h2>
      <div class="row">
        <div class="column">
          <div class="card">
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"></img> */}
            <div class="container">
              <h2>Sagar Mihra</h2>
              <p class="title">Leader</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"></img> */}
            <div class="container">
              <h2>Robindra Karki</h2>
              <p class="title">Backend Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"></img> */}
            <div class="container">
              <h2>Gopi Subedi</h2>
              <p class="title">Front End Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"></img> */}
            <div class="container">
              <h2>Ujan Manandhar</h2>
              <p class="title">Front End Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"></img> */}
            <div class="container">
              <h2>Sulak Maharjan</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"></img> */}
            <div class="container">
              <h2>Rojmi Sthapit</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
