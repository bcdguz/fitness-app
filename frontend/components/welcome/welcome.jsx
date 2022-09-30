import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  const username = props.user?.username;
  const loginMessage = () => {
    return (
      <Link to='/login'>Login here boi</Link>
    )
  }
  const loggedInMessage = () => {
    return (
      <div>
        <div>Wassup {username}</div>
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  }
  return (
    <>
      {props.user ? loggedInMessage() : loginMessage()}
    </>
  )
}

export default Welcome;
