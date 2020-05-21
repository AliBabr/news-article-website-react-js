import React from "react";
import {Grid} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'


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
      saved: '',
      errors: []
    }

  }
  
  
  handleSubmit = async event => {
    event.preventDefault();
    const key = localStorage.getItem('myData')

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      var formData = new FormData();
      if (this.state.profile_photo != null)
      {
        formData.append("profile_photo", this.state.profile_photo);
      }
      formData.append("email", this.state.email)
      formData.append("password", this.state.password)
      formData.append("first_name", this.state.first_name)

      formData.append("last_name", this.state.last_name)
      formData.append("street_address", this.state.adderess)
      formData.append("city", this.state.city)

      formData.append("state", this.state.province)
      formData.append("zip_code", this.state.postal_code)
      formData.append("country", this.state.country)
      formData.append("plan_id", parseInt(key))
      formData.append("card_token", result.token.id)

      formData.append("apt", this.state.apt)
      console.log(result.token);

      axios({method: 'post', url: 'https://news-article-system.herokuapp.com/api/v1/web/checkout' , data: formData }).then(response => {
        this.setState({loading: false})
        debugger
        this.props.history.push('/account');
        this.setState({email: ''})
        this.setState({password: ''})
        this.setState({city: ''})
        this.setState({country: ''})
        this.setState({first_name: ''})
        this.setState({last_name: ''})
        this.setState({city: ''})
        this.setState({province: ''})
        this.setState({adderess: ''})
        this.setState({postal_code: ''})
        this.setState({apt: ''})
        this.setState({saved: 'Sub Admin has been created successfully..!'})
      }).catch(error => {
        debugger
        this.setState({saved: ''})
        this.setState({loading: false})      
        if (error.response.status === 400) this.setState({errors: error.response.data});
        else this.setState({error: "Something went wrong. Please try again later." });
      });

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
          <CardSection key={this.props.key} handleEmail={this.handleEmail} handlePassword={this.handlePassword} handleFirstName = {this.handleFirstName} handleLastName = {this.handleLastName}  handleAddress = {this.handleAddress} handleApt = {this.handleApt} handleCity = {this.handleCity} handeProvince = {this.handeProvince} handlePostalCode = {this.handlePostalCode} handleCountry = {this.handleCountry}   />

          {this.state.errors.map((val, index) => 
            <div>
              <li className="set-error-position">
                {val.message && <><small style={{ color: 'red', fontWeight: 400 }}>{val.message}</small><br /></>}
              </li>
              </div>
            )}

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
