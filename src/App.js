import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Resource from "./Pages/Resource";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Dashboard from "./Authentication/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Myprofile from "./Components/Userdashboard/Myprofile";
import Addprofile from "./Components/Userdashboard/Addprofile";
import Editprofile from "./Components/Userdashboard/Editprofile";
import Userprofile from "./Components/Admindashboard/Userprofile";
import Edituserprofile from "./Components/Admindashboard/Edituserprofile";
import ProfileDetails from "./Components/Homepage/ProfileDetails";
import Locationfilter from "./Components/Resource/Locationfilter";
import Request from "./Components/Userdashboard/Request";
import Footer from "./Pages/Footer";

const App = () => {
  const Error = () => {
    return (
      <>
        <Navbar />
        <h1>
          {" "}
          <center>Oops!! Page Not Found</center>
        </h1>
        ;
      </>
    );
  };
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/resource">
            <Resource />
          </Route>

          <Route exact path="/">
            <Homepage />
            <Footer />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/myprofile">
            <Myprofile />
          </Route>
          <Route path="/addprofile">
            <Addprofile />
          </Route>
          <Route path="/editprofile/:id">
            <Editprofile />
          </Route>
          <Route path="/userprofile/:id">
            <Userprofile />
          </Route>
          <Route path="/edituserprofile/:id">
            <Edituserprofile />
          </Route>
          <Route path="/profiledetails/:id">
            <ProfileDetails />
          </Route>
          <Route path="/locationfilter">
            <Locationfilter />
          </Route>

          <Route path="">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
