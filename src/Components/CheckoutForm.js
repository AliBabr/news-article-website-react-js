import React from "react";
import {Grid} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

import CardSection from "./CardSection";

class CheckoutForm extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      province: '',
      adderess: '',
      postal_code: '',
      apt: '',
      city: '',
      country: '',
      email: '',
      password: '',
      substr: '',
      error:'',
      saved: ''
    }

  }
  
  
  handleSubmit = async event => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      debugger
      console.log(result.token);
    }
  };

  handleEmail = (langValue) => {
    console.log("langValue:::", langValue)
    this.setState({email: langValue})
  }
  handlePassword = (langValue) => {
    console.log("langValue:::", langValue)
    this.setState({password: langValue})
  } 
  handleCity = (langValue) => {
    this.setState({city: langValue})
    console.log("langValue:::", langValue)
  }
  handeProvince = (langValue) => {
    this.setState({province: langValue})
    console.log("langValue:::", langValue)
  }
  handlePostalCode = (langValue) => {
    this.setState({postal_code: langValue})
    console.log("langValue:::", langValue)
  } 
  handleApt = (langValue) => {
    this.setState({apt: langValue})
    console.log("langValue:::", langValue)
  }
  handleCountry = (langValue) => {
    this.setState({country: langValue})
    console.log("langValue:::", langValue)
  }
  handlePassword = (langValue) => {
    this.setState({password: langValue})
    console.log("langValue:::", langValue)
  }
  handleFirstName = (langValue) => {
    this.setState({first_name: langValue})
    console.log("langValue:::", langValue)
  }
  handleLastName = (langValue) => {
    this.setState({last_name: langValue})
    console.log("langValue:::", langValue)
  }
  handleAddress = (langValue) => {
    this.setState({adderess: langValue})
    console.log("langValue:::", langValue)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CardSection handleEmail={this.handleEmail} handlePassword={this.handlePassword} handleFirstName = {this.handleFirstName} handleLastName = {this.handleLastName}  handleAddress = {this.handleAddress} handleApt = {this.handleApt} handleCity = {this.handleCity} handeProvince = {this.handeProvince} handlePostalCode = {this.handlePostalCode} handleCountry = {this.handleCountry}   />
          


          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12} >
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} >
              {/* <input className="btn-pay"  type="submit" value="Checkout"/> */}
                <p>By clicking 'Checkout' you are agreeing to our Terms of Service</p>
              </Grid>
          </Grid>


          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12} >
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} >
              <input disabled={!this.props.stripe} className="btn-pay"  type="submit" value="Checkout"/>
              </Grid>
          </Grid>

         
            {/* <Grid item md={12} md={12} sm={12} xs={12}> */}
            {/* </Grid> */}
          {/* <button disabled={!this.props.stripe} className="btn-pay">
            Buy Now
          </button> */}
        </form>
      </div>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
