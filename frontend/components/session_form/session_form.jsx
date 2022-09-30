import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SessionForm = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password
    }
    props.processForm(user);
  }

  const header = props.formType == 'login' ? 'Login' : 'Sign Up';
  const errors = props.errors.map((e, i) => <li key={i}>{e}</li>)
  const navLink = () => {
    if (props.formType == 'login') {
      return <Link to="/signup">Sign Up Instead</Link>
    }
    return <Link to="/login">Login Instead</Link>
  }
  return (
    <div>
      <h1>{header}</h1>
      {navLink()}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button>Submit</button>
      </form>
      {navLink}
      <ul>
        {errors}
      </ul>
    </div>
  )
}

export default SessionForm;
