import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_container";
import WelcomeContainer from "./welcome/welcome_container";

const App = () => {
  return (
    <div>
      <header>
        <h1>Fit Lyfe</h1>
        <WelcomeContainer />
      </header>

      <Route path="/login" component={LoginFormContainer}></Route>
      <Route path="/signup" component={SignUpFormContainer}></Route>
    </div>
  )
}

export default App;
