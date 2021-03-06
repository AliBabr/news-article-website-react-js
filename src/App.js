import React from 'react';
import { Switch, Route,BrowserRouter  } from 'react-router-dom';
import Home from "./Pages/HomePage";
import Login from "./Pages/LoginPage";
import Subscription from './Pages/SubscriptionPage';
import StripeCheckout from "react-stripe-checkout";
import CheckoutPage from './Pages/CheckoutPage';
import HomeCheckout from './Components/HomeCheckout'
import AccountCheckout from './Components/AccountCheckout'

import history from './Components/history';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/account" component={Subscription}></Route>
        <Route exact path="/checkout/:key" component={CheckoutPage}></Route>
        <Route exact path="/home-checkout/:key" component={HomeCheckout}></Route>
        <Route exact path="/account-checkout/:key" component={AccountCheckout}></Route>
      </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
