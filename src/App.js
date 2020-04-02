import React, { useState } from "react";
import "./App.css";
import "./css/global.scss";
import "animate.css/animate.min.css";

import HeaderNavigation from "./Components/HeaderNavigation/HeaderNavigation";
import Footer from "./Components/Footer/Footer";
import SlideOutNavigation from "./Components/SlideOutNavigation/SlideOutNavigation";
import Home from "./Pages/Home";
import Resume from "./Components/Resume/Resume";
import Modal from "./Components/Modal/Modal";
import RegistrationForm from "./Components/RegisterForm/RegisterForm";
import LoginContainer from "./Containers/LoginContainer/LoginContainer";
import Post from "./Pages/Post.js";
import { getAllDocs } from "./Firebase/firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// The to of the links is the string that is passed as
// title to a section in Home.js
const headerLinks = [
  {
    to: "work",
    text: "Work"
  },
  {
    to: "skills",
    text: "Skills"
  },
  {
    to: "contact",
    text: "Contact"
  },
  {
    to: "posts",
    text: "Posts"
  },
  {
    to: "about",
    text: "About"
  }
];

function App() {
  // GET DOCS FROM FIREBASE
  // getAllDocs().then(doc => console.log(doc));

  const [slideOutNavigationVisible, setSlideOutNavigationVisible] = useState(
    false
  );
  const [registerModalShown, setRegisterModalShown] = useState(false);

  // Open and close slideout menu handler
  function toggleSlideOutNavigation() {
    setSlideOutNavigationVisible(!slideOutNavigationVisible);
  }

  const toggleRegisterModal = () => {
    setRegisterModalShown(!registerModalShown);
  };

  return (
    <div className="App">
      <Router>
        <HeaderNavigation
          links={headerLinks}
          toggleNavigation={toggleSlideOutNavigation}
        />

        <SlideOutNavigation
          menuIsOpen={slideOutNavigationVisible}
          links={headerLinks}
          closeMenu={() => toggleSlideOutNavigation(false)}
        />

        <Switch>
          <Route path="/post">
            <Post />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/">
            {/* <LoginForm openRegisterModal={toggleRegisterModal}/> */}

            <LoginContainer openRegisterModal={toggleRegisterModal} />

            <Modal
              header="Register"
              shown={registerModalShown}
              closeModal={toggleRegisterModal}
            >
              <RegistrationForm toggleModal={setRegisterModalShown} />
            </Modal>

            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
