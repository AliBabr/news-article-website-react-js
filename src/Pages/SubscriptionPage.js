import React ,{ useLayoutEffect, useState ,useEffect }  from 'react'
import Cards from '../Components/Cards';
import Head from '../Components/Head';
import { makeStyles} from '@material-ui/core/styles';
import {Hidden,TextField,Grid} from "@material-ui/core";
import Background from '../images/backgroundold.png';
import Paper from '@material-ui/core/Paper';
import PlanCard from "../Components/SubscriptionPlanCards";
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { getToken,getUser, removeUserSession, setUserSession } from '../Components/Utils/Common';
import { keys } from '@material-ui/core/styles/createBreakpoints';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundSize:"auto",
      backgroundPosition:"center",
    },
    labels:{
        fontSize:'10pt'
    },
    textFields:
    {
      width:'90%',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      borderRadius:'5px',
      backgroundColor:"#e7e7e7",
    },
    textAreas:
    {
      width:'90%',
      height:'80px',
      border:'unset',
      paddingLeft:'15px',
      paddingTop:'5px',
      borderRadius:'5px',
      backgroundColor:"#e7e7e7",
    },
    textFieldsSmall:
    {
      width:'95%',
      height:'30px',
      paddingLeft:'15px',
      border:'unset',
      borderRadius:'5px',
      backgroundColor:"#e7e7e7",
    },
    textAreasSmall:
    {
      width:'95%',
      paddingLeft:'15px',
      height:'80px',
      border:'unset',
      borderRadius:'5px',
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
        backgroundColor:"#000745",
        fontWeight:'700',
        height:'37px',
        marginBottom:'25px',
        width:'83%',
        color:'white',
        borderRadius:'5px',
        marginLeft:'15%',
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

export default function Subscription() {

  const subs = getUser()

  const [password, setPassword] = useState(null);

  const [email, setEmail] = useState(subs.email);
  const [city, setCity] = useState(subs.city);
  const [state, setState] = React.useState(subs.state);
  const [zipCode, SetzipCode] = React.useState(subs.zip_code);
  const [firstName, setfirstName] = useState(subs.first_name);
  const [lastName, SetlastName] = useState(subs.last_name);
  const [address, setAddress] = useState(subs.street_address);
  const [numberr, setNumberr] = useState(subs.plan_number);
  const [error, setError] = useState('');

  const [disabled, setDisabled] = useState(true);


  const [holder, setHolder] = useState('Ali');
  const [CardPostalCode, SetcardPostalCode] = useState('1234');
  const [ExpiryMonth, SetexpiryMonth] = useState('04');
  const [ExpiryYear, SetexpiryYear] = useState('20');
  const [CardNumberr, SetcardNumberr] = useState('***********2222');

  
  const [gameChecked, setgameChecked] = useState(subs.gameChecked);
  const [comicChecked, setcomicChecked] = useState(subs.comicChecked);
  const [animeChecked, setanimeChecked] = useState(subs.animeChecked);

  localStorage.setItem('game', subs.gameChecked);
  localStorage.setItem('comic', subs.comicChecked);
  localStorage.setItem('anime', subs.animeChecked);



  const handleEdit = (e) => {
    setDisabled(false)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };

  const handleFirstNameChange = (e) => {
    setfirstName(e.target.value)
  };

  const handleLastNameChange = (e) => {
    SetlastName(e.target.value)
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  };

  const handleCityChange = (e) => {
    setCity(e.target.value)
  };
  
  const handleProvinceChange = (e) => {
    setState(e.target.value)
  };

  const handleZipCodeChange = (e) => {
    SetzipCode(e.target.value)
  };
  

  const handleHolderChange = (e) => {
    setHolder(e.target.value)
  };

  const handleMonthChange = (e) => {
    SetexpiryMonth(e.target.value)
  };
  
  const handleYearChange = (e) => {
    SetexpiryYear(e.target.value)
  };

  const handlePostalCodeChange = (e) => {
    SetcardPostalCode(e.target.value)
  };

    function handleSubmit(e)
    {
        var game = localStorage.getItem('game');
        var comic = localStorage.getItem('comic');
        var anime = localStorage.getItem('anime');
        
        debugger

        var formData = new FormData();

        formData.append("email", email)

        if (password != null && password != ''){
          formData.append("password", password)
        }

        formData.append("first_name", firstName)
  
        formData.append("last_name", lastName)
        formData.append("street_address", address)
        formData.append("city", city)
  
        formData.append("state", state )
        formData.append("zip_code", zipCode)
  
        const user = getUser()

        axios({method: 'post', url: 'https://news-article-system.herokuapp.com/api/v1/web/update_subscription', headers: {UUID: user.UUID, Authentication: user.Authentication} , data: formData }).then(response => {

          setUserSession(response.data.user_deatails[0].Authentication, response.data.user_deatails[0]);
        }).catch(error => {
          this.setState({saved: ''})
          this.setState({loading: false})      
          if (error.response.status === 400) this.setState({errors: error.response.data});
          else this.setState({error: "Something went wrong. Please try again later." });
        });
    }

    
  const classes = useStyles();
  const Headings =['1 Month Plan','3 Month Plan','6 Month Plan'];
  const Keys =[0,1,2];
  const Prices =[30,85.50,162];
  const displayPrices =["$30","$85.50","$162"];
  const token = getToken()

    if (token == null) {
      window.location.assign('/')
      
    }

    return (
        <div style={{backgroundImage:`url(${Background})`}} className="homepageSubscription">
            <Head></Head>
            <Grid container spacing={2} justify="center">
                <Grid item lg={1} md={1} sm={10} xs={10} >
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} >
                <Paper elevation={2} className={classes.paper} >
                    <h1 className={classes.paperHeader}>My Account</h1>
                    <Grid container spacing={2} justify="center">
                        <Grid item lg={1} md={1} sm={10} xs={10} >
                        </Grid>
                        <Grid item lg={10} md={10} sm={10} xs={10} >
                            <Grid container>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>First Name</p>
                                    <input disabled={disabled} value={firstName} onChange={handleFirstNameChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Last Name</p>
                                    <input disabled={disabled} value={lastName} onChange={handleLastNameChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 
                                {/* Second Row */}

                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Email</p>
                                <input disabled={disabled} value={email} onChange={handleEmailChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Password</p>
                                    <input disabled={disabled} type="password" onChange={handlePasswordChange} value={password} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>

                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>City</p>
                                <input disabled={disabled} value={city} onChange={handleCityChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>State</p>
                                    <input disabled={disabled} value={state} onChange={handleProvinceChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 

                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Street Address</p>
                                <input disabled={disabled} value={address} onChange={handleAddressChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Postal Code</p>
                                    <input disabled={disabled} value={zipCode} onChange={handleZipCodeChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 

                                
                                <Grid item lg={12} md={12} sm={12} xs={12} >
                                  <br/>
                                </Grid> 

                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={10} md={10} sm={12} xs={12} >
                                    <h3>Billing Info</h3>
                                </Grid>

                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 


                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={2} md={2} sm={12} xs={12} >
                                <p  className={classes.labels}>Card Last four</p>
                                </Grid>
                                <Grid item lg={8} md={8} sm={12} xs={12} >
                                  <p  className={classes.labels}>{CardNumberr}</p>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 


                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Card Holder Name</p>
                                <input disabled={disabled} value={holder} onChange={handleHolderChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Card Postal Code</p>
                                    <input disabled={disabled} value={CardPostalCode} onChange={handlePostalCodeChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 


                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Expiry Month</p>
                                <input disabled={disabled} value={ExpiryMonth} onChange={handleMonthChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Expiry Year</p>
                                    <input disabled={disabled} value={ExpiryYear} onChange={handleYearChange} className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 


                                <Grid item lg={3} md={3} sm={12} xs={10} >
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12} >

                                <input className={classes.buttonEdit} onClick={handleEdit}  type="button" value="Edit"/>

                                {/* <input className={classes.buttonEdit} onClick={handleSubmit}  type="submit" value="Edit"/> */}
                                </Grid>
                                <Grid item lg={3} md={3} sm={12} xs={10} >
                                </Grid>  
                                
                        </Grid>



                        
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={10} >
                    </Grid>
                    </Grid>
                    <h6 style={{color:'gray',margin:"0px",fontSize:'12pt',textAlign:'center'}} >Upgrade Subscription!</h6>
                    
                    <Grid container spacing={0} >
                        <Grid item lg={1} md={1} sm={10} xs={10} >
                        </Grid>
                        <Grid item lg={10} md={10} sm={10} xs={10} >
                            <Grid container>
                            <Grid item lg={4} md={6} sm={12} xs={12} >
           
                              {numberr == 0 ?
                              <div>
                                <PlanCard selected="*" active={true} heading={Headings[0]} Keys={Keys[0]} price={Prices[0]} displayPrice={displayPrices[0]} gameChecked={gameChecked} comicChecked={comicChecked} animeChecked={animeChecked} />
                              </div>
                              : 
                              <PlanCard  heading={Headings[0]} Keys={0} price={Prices[0]} displayPrice={displayPrices[0]} gameChecked={true} comicChecked={true} animeChecked={true} />
                              }
                            </Grid>
                            
                            <Grid item lg={4} md={6} sm={12} xs={12} >
                              { numberr == 1 ?
                              <div>
                                <PlanCard selected="*"  active={true} heading={Headings[1]} Keys={Keys[1]} price={Prices[1]} displayPrice={displayPrices[1] } gameChecked={gameChecked} comicChecked={comicChecked} animeChecked={animeChecked} />
                              </div>
                              : 

                              <PlanCard  heading={Headings[1]} Keys={1} price={Prices[1]} displayPrice={displayPrices[1]} gameChecked={true} comicChecked={true} animeChecked={true} />
                              }
                            </Grid>

               

                            <Grid item lg={4} md={6} sm={12} xs={12} >
                              {numberr == 2 ?   
                              <div>
                                <PlanCard selected="*" active={true} heading={Headings[2]} Keys={Keys[2]} price={Prices[2]} displayPrice={displayPrices[2]} gameChecked={gameChecked} comicChecked={comicChecked} animeChecked={animeChecked} />
                              </div>
                              : 

                              <PlanCard  heading={Headings[2]} Keys={2} price={Prices[2]} displayPrice={displayPrices[2]} gameChecked={true} comicChecked={true} animeChecked={true} />
                              }
                            </Grid>

                            </Grid>
                        </Grid>
                        <Grid item lg={1} md={1} sm={10} xs={10} >
                        </Grid>
                        <Grid container spacing={0} >
                                <Grid item lg={3} md={3} sm={10} xs={10} >
                                </Grid>
                                <Grid item lg={6} md={6} sm={10} xs={11} >
                                <input className={classes.buttonEdit} onClick={handleSubmit}  type="submit" value="Done"/>

                                {/* <input className={classes.buttons} type="submit" value="Done"/> */}
                                </Grid>
                                <Grid item lg={3} md={3} sm={10} xs={10} >
                                </Grid> 
                            </Grid>
                    </Grid>
                </Paper>
                </Grid>
                <Grid item lg={1} md={1} sm={10} xs={10} >
                </Grid>
            </Grid>
        </div>
    )
  // }
  // else {
  //   return <Redirect to="/" />
  // }
}
