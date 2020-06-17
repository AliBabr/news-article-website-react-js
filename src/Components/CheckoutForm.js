import React from "react";
import {Grid} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import history from './history';
import Tick from '../images/tick.png';
import { getToken,getUser, removeUserSession, setUserSession } from '../Components/Utils/Common';



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
      errors: [],
      open: false,
      orderId: ''
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false})
    history.push('/');
    window.location.reload();
}
 handleClick = () => {
  this.setState({open: true})
  };
  
  
  handleSubmit = async event => {

    var gameChecked = localStorage.getItem('gameChecked')
    var comicChecked = localStorage.getItem('comicChecked')
    var animeChecked = localStorage.getItem('animeChecked')

    this.setState({loading: true})
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

      formData.append("gameChecked", gameChecked)
      formData.append("comicChecked", comicChecked)
      formData.append("animeChecked", animeChecked)


      axios({method: 'post', url: 'https://news-article-system.herokuapp.com/api/v1/web/checkout' , data: formData }).then(response => { 
        this.setState({orderId: response.data.subscriptions[0].order_no})
        setUserSession(response.data.user_deatails[0].Authentication, response.data.user_deatails[0]);

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
        this.setState({open: true}) 
      }).catch(error => {
        this.setState({saved: ''})
        this.setState({loading: false})      
        if (error.response.status === 400) this.setState({errors: error.response.data});
        else this.setState({error: "Something went wrong. Please try again later." });
      });
    }
  };

  handleEmail = (langValue) => {

    this.setState({email: langValue})
  }
  handlePassword = (langValue) => {
    this.setState({password: langValue})
  } 
  handleCity = (langValue) => {
    this.setState({city: langValue})
  }
  handeProvince = (langValue) => {
    this.setState({province: langValue})
  }
  handlePostalCode = (langValue) => {
    this.setState({postal_code: langValue})
  } 
  handleApt = (langValue) => {
    this.setState({apt: langValue})
  }
  handleCountry = (langValue) => {
    this.setState({country: langValue})
  }
  handlePassword = (langValue) => {
    this.setState({password: langValue})
  }
  handleFirstName = (langValue) => {
    this.setState({first_name: langValue})
  }
  handleLastName = (langValue) => {
    this.setState({last_name: langValue})
  }
  handleAddress = (langValue) => {
    this.setState({adderess: langValue})
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
              <input value={this.state.loading ? 'Loading...' : 'Checkout'} disabled={!this.props.stripe} className="btn-pay"  type="submit" />
              </Grid>
          </Grid>


        </form>


        
        <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle style={{paddingBottom:"0px"}} id="alert-dialog-title">
                    <div style={{textAlign:'center'}}>
                    <img src={Tick} style={{height:"130px",width:'130px'}}></img>
                    </div>
                    <h2 style={{fontFamily:"poppins",fontWeight:"200",width:'auto', textAlign:'center', paddingBottom:'-5px'}}>
                     Thank You!
                     </h2>
                     <h6 style={{fontFamily:"poppins",fontWeight:"200",width:'auto', textAlign:'center', marginTop:'-15px'}}>
                     Your Subscription has been setup and your Power Box is on it's way
                     </h6>
                     <h6 style={{fontFamily:"poppins",fontWeight:"200",width:'auto', textAlign:'center', marginTop:'-15px'}}>
                     Order Number:
                     </h6>
                     <div style={{width:"150px",marginLeft:"auto",marginRight:'auto'}}>
                         <h2 style={{fontFamily:"poppins",color:"white",backgroundColor:'gray',width:'50px', fontWeight:"200",width:'auto', textAlign:'center', marginTop:'-15px', width: '200px' , marginLeft: '-25px'}}>
                        {this.state.orderId}
                        </h2>
                     </div>
                     <h6 style={{fontFamily:"poppins",fontWeight:"200",width:'auto', textAlign:'center', marginTop:'-15px'}}>
                     You will receive an e-mail shortly with your order details
                     </h6>
                     <div style={{width:"300px",marginLeft:"auto",marginRight:'auto'}}>
                     <h6 style={{fontFamily:"poppins",fontWeight:"200",width:'auto', textAlign:'center', marginTop:'-15px'}}>
                     Please Note:All boxes will be renewed on the 10th of every month
                     </h6>
                     </div>
                     

                     </DialogTitle>
                     
                  <DialogActions>
                  <div style={{width:"300px",marginLeft:"auto",marginRight:'auto'}}>
                  <input 
                    className='buttonsDialogSmall' 
                    value="Continue"
                    onClick={this.handleClose}
                     type="button"></input>
                    </div>
                  </DialogActions>
                </Dialog>

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
