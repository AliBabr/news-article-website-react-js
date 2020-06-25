import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Component } from 'react';
import AccountCheckoutForm from "./AccountFormCheckout";
import "./styles.css";

// const stripePromise = loadStripe("pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA");

const stripePromise = loadStripe("pk_test_ZNWQ9H8TrCu5RDg3ebtHF2vU");


export default class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      substr: '',
      error:'',
      saved: '',
      key: this.props.match.params.key
    }
  }

  handleEmail = (langValue) => {
 
  }

  render(){
    localStorage.setItem('key', this.props.match.params.key); 

    var params = new URLSearchParams(this.props.location.search);
    localStorage.setItem('AccountgameChecked', params.get('gameChecked'));
    localStorage.setItem('AccountcomicChecked', params.get('comicChecked'));
    localStorage.setItem('AccountanimeChecked', params.get('animeChecked'));  

    if ( params.get('gameChecked') == 'false' && params.get('comicChecked')== 'false' && params.get('animeChecked')== 'false' ) {
      window.location.assign('/account')
    }

    return(
        <div className="App">
        <div className="product">
          {/* <img
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
            alt="laptop"
            style={{ width: "100%", height: "auto" }}
          /> */}
          <div>
            <Elements stripe={stripePromise}  >
              <AccountCheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    );
  }
}