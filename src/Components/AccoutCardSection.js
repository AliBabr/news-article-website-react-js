
import { CardElement, CardNumberElement, CardCvcElementComponent } from "@stripe/react-stripe-js";

import React ,{ useLayoutEffect, useState ,useEffect }  from 'react'

import { makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import AstroBox from '../images/Astro Box-1.png';
import Tick from '../images/tick.png';
import CheckCards from '../images/checkCards.jpg'
import PaypalButton from "../Components/PaypalButton";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Caution from "../images/warning.jpg";
import axios from 'axios'
import { Link } from 'react-router-dom'

import { getToken,getUser, removeUserSession, setUserSession } from '../Components/Utils/Common';

// import {CardCVCElement, CardExpiryElement, CardNumberElement, PostalCodeElement, StripeProvider, Elements} from '@stripe/react-stripe-js';
// import {CardElement} from 'react-stripe-elements';
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#303238",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
};


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundSize:"auto",
      backgroundPosition:"center",
    },
    labels:{
        fontSize:'17pt'
    },
    textFields:
    {
      width:'90%',
      marginTop:'15px',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    textFieldAPT:
    {
      width:'80%',
      marginTop:'15px',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    textFieldCITY:
    {
        width:'80%',
      marginTop:'15px',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    textFieldADDRESS:
    {
        width:'92%',
      marginTop:'15px',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    textFieldCountry:
    {
        width:'99%',
      marginTop:'15px',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    textFieldProvice:
    {
        width:'88.5%',
      marginTop:'15px',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    textFieldPostalCode:
    {
        width:'95%',
      marginTop:'15px',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    textFieldsSmall:
    {
      width:'85%',
      marginTop:'15px',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      backgroundColor:"#e7e7e7",
    },
    paper: {
      width:"100%",
      height:"98%",
      backgroundColor:"white",
      color: theme.palette.text.secondary,
    },
    paperImage:{
        marginTop:theme.spacing(6),
    },
    paperHeader:{
        color:"#04104e",
        fontSize:'16pt',
        paddingTop:"30px",
        paddingLeft:"50px",
    },
    paperSubHeader:{
        color:"white",
        fontSize:'11pt',
    },
    buttons:{
        marginTop:'15px',
        backgroundColor:"#000745",
        fontWeight:'700',
        height:'37px',
        marginBottom:'25px',
        width:'95%',
        color:'white',
        borderRadius:'5px',
        border:'unset'
      },
      buttonEdit:{
        backgroundColor:"#000745",
        fontWeight:'700',
        height:'37px',
        marginBottom:'25px',
        marginTop:"25px",
        width:'95%',
        color:'white',
        borderRadius:'5px',
        border:'unset'
      },
      buttonsSmall:{
        backgroundColor:"#000745",
        fontWeight:'700',
        height:'37px',
        marginBottom:'25px',
        marginTop:"25px",
        width:'88%',
        color:'white',
        borderRadius:'5px',
        border:'unset'
      },
      selectSmall:{
        width:'89%',
        marginTop:'15px',
        height:'30px',
        paddingLeft:'15px',
        border:'unset',
        backgroundColor:"#e7e7e7",
      },
      coverImage:{
        marginLeft:'-50px',width:"400px"
    },
    coverImageSmall:{
        marginLeft:'-15px',width:"400px"
    },
    buttonsDialog:{
        backgroundImage: "linear-gradient(to right, #04104e, #890103)",
        fontWeight:'700',
        height:'37px',
        marginBottom:'15px',
        width:'300px',
        color:'white',
        borderRadius:'5px',
        border:'unset'
      },
      buttonsDialogSmall:{
        backgroundImage: "linear-gradient(to right, #04104e, #890103)",
        fontWeight:'700',
        height:'37px',
        marginBottom:'15px',
        width:'100%',
        color:'white',
        borderRadius:'5px',
        border:'unset'
      },
  }));
  
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

function CardSection(props) {
    const [open, setOpen] = React.useState(false);
    const subs = getUser()
  
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState(subs.city);
    const [state, setState] = React.useState(subs.state);
    const [zipCode, SetzipCode] = React.useState(subs.zip_code);
    const [firstName, setfirstName] = useState(subs.first_name);
    const [lastName, SetlastName] = useState(subs.last_name);
    const [address, setAddress] = useState(subs.street_address);
    const [numberr, setNumberr] = useState(subs.plan_number);
    const [apt, setApt] = useState(subs.apt);

    const [error, setError] = useState('');
  

    // useEffect(() => {
    //   // var value = localStorage.setItem('count', 0);
    //   // var value = localStorage.getItem('count')
    //   // localStorage.setItem('count', value + 1);
    //   var value = localStorage.getItem('count')
  
    //   getDetails()
    //   if (value == 1)
    //   {
    //   }
    // });
    
    function getDetails(e)
    
    {
        const value = localStorage.getItem('count')
        localStorage.setItem('count', value + 1);
        const user = getUser()
        axios({method: 'get', url: 'https://news-article-system.herokuapp.com/api/v1/web/get_subscription', headers: {UUID: user.UUID, Authentication: user.Authentication} }).then(response => {
          setEmail(response.data.email)
          setNumberr(response.data.plan_number)
          setfirstName(response.data.first_name)
          SetlastName(response.data.last_name)
          setAddress(response.data.street_address)
          setCity(response.data.city)
          setState(response.data.state)
          SetzipCode(response.data.zip_code)
          sessionStorage.setItem('toogle', true);
        }).catch(error => {
          if (error.response.status === 400) setError(error.response.data.message);
          else setError("Something went wrong. Please try again later.");
        });
  
      }

 
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    }
    const handleClick = () => {
        setOpen(true);
      };

      const handleEmailChange = (e) => {
        
        props.handleEmail(e.target.value)
      };

      const handlePasswordChange = (e) => {
        props.handlePassword(e.target.value)
      };

      const handleFirstNameChange = (e) => {
        props.handleFirstName(e.target.value)
        setfirstName(e.target.value)
      };

      const handleLastNameChange = (e) => {
        props.handleLastName(e.target.value)
        SetlastName(e.target.value)
      };

      const handleAddressChange = (e) => {
        props.handleAddress(e.target.value)
        setAddress(e.target.value)
      };

      const handleAptChange = (e) => {
        props.handleApt(e.target.value)
        setApt(e.target.value)
      };

      const handleCityChange = (e) => {
        props.handleCity(e.target.value)
        setCity(e.target.value)
      };
      
      const handleProvinceChange = (e) => {
        props.handeProvince(e.target.value)
        setState(e.target.value)
      };

      const handlePostalCodeChange = (e) => {
        props.handlePostalCode(e.target.value)
        SetzipCode(e.target.value)
      };

      const handleCountryCodeChange = (e) => {
        props.handleCountry(e.target.value)
      };

      const Headings =['1 Month Plan','3 Month Plan','6 Month Plan'];
      const Keys =['0','1','2'];
      const orderId = '12345';
      const Prices =[30,85.50,162];
      const displayPrices =["$30","$85.50","$162"];
      const perMonth = ['$30','$28.50','$27'];
      const plan = ['Month to Month Plan @',"3 month Prepay Plan @","6 month Prepay Plan @"]
      const deliveries = ['1','3','6']
      const deliveriesEnglish =['delivery','deliveries','deliveries']
      const classes = useStyles();
      const key = localStorage.getItem('key')

      var gameChecked = localStorage.getItem('AccountgameChecked')
      var comicChecked = localStorage.getItem('AccountcomicChecked')
      var animeChecked = localStorage.getItem('AccountanimeChecked')

  return (
    

    <div  className="homepageSubscription" style={{textAlign:"center"}}>
            {/* <Header></Header> */}
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>

                <Link to="/"><img src={AstroBox}  className={useWindowSize()[0]>=960?classes.coverImage:classes.coverImageSmall}></img></Link>
                <h2>Order Summary</h2>
                <p> Gaming: {gameChecked == 'true' ? ' YES': ' NO'} </p>
                <p>Comics: {comicChecked == 'true' ? ' YES' : ' NO'} </p>
                <p>Anime: {animeChecked == 'true'?  ' YES' : ' NO'} </p>
                <Grid container>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                        <h3>{Headings[parseInt(key)]}</h3>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                    <h3>{displayPrices[parseInt(key)]}</h3>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                        <p>{plan[key]} {perMonth[key]}/mo</p>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                    <h3></h3>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                        <p>{deliveries[parseInt(key)]} {deliveriesEnglish[parseInt(key)]} auto-renewing</p>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                    <h3></h3>
                    </Grid>
                    <Grid item md={12} md={12} sm={12} xs={12}>
                        <hr></hr>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                        <p>Estimated Shipping</p>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                    <h3>$--.--</h3>
                    </Grid>
                    <Grid item md={12} md={12} sm={12} xs={12}>
                        <hr></hr>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                        <h1>Total</h1>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                    {/* <h1>{displayPrices[parseInt(key)]}</h1> */}
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} >
                        <input placeholder="COUPON OR GIFT CODE" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid container>
                        <Grid item lg={7} md={7} sm={12} xs={12} >
                            <p style={{marginTop:"8%"}}></p>
                            <PaypalButton style={{marginTop:"5%"}} ></PaypalButton>
                            <p  className={classes.labels} style={{marginTop:"15%"}} >Shipping Address</p>
                        </Grid>
                        
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                        <input placeholder="First Name" value={firstName} onChange={handleFirstNameChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <input placeholder="Last Name" value={lastName} onChange={handleLastNameChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                        </Grid>
                        
                        <Grid item lg={9} md={9} sm={12} xs={12} >
                            <input placeholder="Street Address" value={address} onChange={handleAddressChange} className={useWindowSize()[0]>=960?classes.textFieldADDRESS:classes.textFieldsSmall}/>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <input placeholder="Apt/Unit" value={apt} onChange={handleAptChange} className={useWindowSize()[0]>=960?classes.textFieldAPT:classes.textFieldsSmall}/>
                        </Grid>

                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <input placeholder="City" value={city} onChange={handleCityChange} className={useWindowSize()[0]>=960?classes.textFieldCITY:classes.textFieldsSmall}/>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <input placeholder="Select Province" value={state} onChange={handleProvinceChange}  className={useWindowSize()[0]>=960?classes.textFieldProvice:classes.textFieldsSmall}/>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <input placeholder="Postal Code" value={zipCode} onChange={handlePostalCodeChange} className={useWindowSize()[0]>=960?classes.textFieldAPT:classes.textFieldsSmall}/>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12} onChange={handleCountryCodeChange} >
                            {/* <CountrySelect></CountrySelect> */}
                            <select placeholder="Canada" type="select" id="" className={`${useWindowSize()[0]>=960?classes.textFieldCountry:classes.selectSmall}`}>
                            <option>Canada</option>
                            <option>England</option>
                            <option>Pakistan</option>
                            <option>America</option>
                            <option>Australia</option>
                            </select>
                        </Grid>


                        {/* Start of Billing Information */}

                        <Grid item lg={9} md={7} sm={12} xs={12} >
                            <p  className={classes.labels} style={{marginTop:"15%"}} >Billing Information</p>
                            <p  className={classes.subLabels} >Plans automatically renew. You can cancel anytime</p>
                        </Grid>
          
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <img src={CheckCards} style={{marginTop:"10px",height:'35px'}}></img>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <CardElement options={CARD_ELEMENT_OPTIONS} />
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12}  className='set-border' >
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            

        </div>
  );
}

export default CardSection;