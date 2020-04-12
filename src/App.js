import React from 'react';
import { Switch, Route,BrowserRouter  } from 'react-router-dom';
import Home from "./Pages/HomePage";
import Login from "./Pages/LoginPage";
import Subscription from './Pages/SubscriptionPage';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/subscription" component={Subscription}></Route>
      </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
