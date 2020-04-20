import React from 'react';
import { Switch, Route,BrowserRouter  } from 'react-router-dom';
import Home from "./Pages/HomePage";
import Login from "./Pages/LoginPage";
import Subscription from './Pages/SubscriptionPage';
import StripeCheckout from "react-stripe-checkout";
import CheckoutPage from './Pages/CheckoutPage';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/account" component={Subscription}></Route>
        <Route exact path="/checkout/:key" component={CheckoutPage}></Route>
      </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
