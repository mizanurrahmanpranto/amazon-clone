import "./Login.css";

import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

//import { Route } from "react-router-dom";
//import Signup from "./Signup";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
    //  firebase register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>

          <p>welcome to the fake Amazon</p>
          <button className="login__registerButton" onClick={"./register"}>
            Create your Amazon account
          </button>
          {/*<div>
            <ul role="nav">
              <li>
                <Link to="/Signup">Client Side</Link>
              </li>
            </ul>
            <div>
              <Route path="/Signup" component={Signup} />
            </div>
          </div>*/}
        </form>
      </div>
    </div>
  );
}

export default Login;
