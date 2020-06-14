import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Component } from 'react';
import CheckoutForm from "./CheckoutForm";
import "./styles.css";

// const stripePromise = loadStripe("pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA");

const stripePromise = loadStripe("pk_test_ZNWQ9H8TrCu5RDg3ebtHF2vU");


export default class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      politicians: 0,
      all_users: 0,
      one_access: 0,
      city_access: 0,
      country_access: 0,
      substr: '',
      error:'',
      saved: '',
      key: this.props.match.params.key
    }
  }

  handleEmail = (langValue) => {
    console.log("langValue:::", langValue)
  }

  render(){
    localStorage.setItem('myData', this.props.match.params.key);
    var params = new URLSearchParams(this.props.location.search);

    localStorage.setItem('gameChecked', params.get('gameChecked'));
    localStorage.setItem('comicChecked', params.get('comicChecked'));
    localStorage.setItem('animeChecked', params.get('animeChecked'));

    return(
        <div className="App">
        <div className="product">
          {/* <img
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
            alt="laptop"
            style={{ width: "100%", height: "auto" }}
          /> */}
          <div>
            <Elements stripe={stripePromise}  as={'as'}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    );
  }
}