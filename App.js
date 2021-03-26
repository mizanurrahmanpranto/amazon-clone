import "./App.css";

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import Signup from "./Signup";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  "pk_test_51IXxuxSIhyiYFkQFBaCTzNJOw9lSAMRlOPRuav1swX5jew9XOqYIRpYZZubJHeI6BPEmAy54x5ca99p63Gxn2g4I00BZHglv6m"
);
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          {/*<Route path="/Signup">
            <Signup />
  </Route>*/}

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
