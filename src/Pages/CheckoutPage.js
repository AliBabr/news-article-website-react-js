import React ,{ useLayoutEffect, useState }  from 'react'
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

export default function CheckoutPage(props) {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    }
    const handleClick = () => {
        setOpen(true);
      };



    console.log(props)
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
    return (
        <div  className="homepageSubscription" style={{textAlign:"center"}}>
            {/* <Header></Header> */}
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <img src={AstroBox}  className={useWindowSize()[0]>=960?classes.coverImage:classes.coverImageSmall}></img>
                <h2>Order Summary</h2>
                <Grid container>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                        <h3>{Headings[parseInt(props.match.params.key)]}</h3>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                    <h3>{displayPrices[parseInt(props.match.params.key)]}</h3>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                        <p>{plan[props.match.params.key]} {perMonth[props.match.params.key]}/mo</p>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                    <h3></h3>
                    </Grid>
                    <Grid item md={6} md={6} sm={6} xs={6}>
                        <p>{deliveries[parseInt(props.match.params.key)]} {deliveriesEnglish[parseInt(props.match.params.key)]} auto-renewing</p>
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
                    <h1>{displayPrices[parseInt(props.match.params.key)]}</h1>
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
                                <input placeholder="First Name" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                    <input placeholder="Last Name" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                
                                <Grid item lg={9} md={9} sm={12} xs={12} >
                                    <input placeholder="Street Address" className={useWindowSize()[0]>=960?classes.textFieldADDRESS:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={3} md={3} sm={12} xs={12} >
                                    <input placeholder="Apt/Unit" className={useWindowSize()[0]>=960?classes.textFieldAPT:classes.textFieldsSmall}/>
                                </Grid>

                                <Grid item lg={3} md={3} sm={12} xs={12} >
                                    <input placeholder="City" className={useWindowSize()[0]>=960?classes.textFieldCITY:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                    <input placeholder="Select Province"  className={useWindowSize()[0]>=960?classes.textFieldProvice:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={3} md={3} sm={12} xs={12} >
                                    <input placeholder="Postal Code" className={useWindowSize()[0]>=960?classes.textFieldAPT:classes.textFieldsSmall}/>
                                </Grid>

                                <Grid item lg={9} md={9} sm={12} xs={12} >
                                <select placeholder="Canada" type="select" id="" className={`${useWindowSize()[0]>=960?classes.textFieldPostalCode:classes.selectSmall}`}>
                                    <option>Canada</option>
                                    <option>England</option>
                                    <option>Pakistan</option>
                                    <option>America</option>
                                    <option>Australia</option>
                                    </select>
                                    {/* <input placeholder="Canada" className={useWindowSize()[0]>=960?classes.textFieldCountry:classes.textFieldsSmall}/> */}
                                </Grid>

                                {/* Start of Billing Information */}

                                <Grid item lg={9} md={7} sm={12} xs={12} >
                                    <p  className={classes.labels} style={{marginTop:"15%"}} >Billing Information</p>
                                    <p  className={classes.subLabels} >Plans automatically renew. You can cancel anytime</p>
                                </Grid>
                                
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                <input placeholder="Credit Card Number" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                   <img src={CheckCards} style={{marginTop:"10px",height:'35px'}}></img>
                                </Grid>

                                <Grid item lg={4} md={3} sm={12} xs={12} >
                                    <input placeholder="CVC" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={4} md={4} sm={12} xs={12} >
                                    <input placeholder="1-JAN" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={4} md={3} sm={12} xs={12} >
                                    <input placeholder="2020" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>


                                <Grid item lg={4} md={3} sm={12} xs={12} >
                                    <input placeholder="Postal Code" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={8} md={8} sm={12} xs={12} >
                                    {/* <CountrySelect></CountrySelect> */}
                                    <select placeholder="Canada" type="select" id="" className={`${useWindowSize()[0]>=960?classes.textFieldCountry:classes.selectSmall}`}>
                                    <option>Canada</option>
                                    <option>England</option>
                                    <option>Pakistan</option>
                                    <option>America</option>
                                    <option>Australia</option>
                                    </select>
                                </Grid>


                                <Grid item lg={9} md={7} sm={12} xs={12} >
                                    <p  className={classes.labels} style={{marginTop:"15%"}} >Create Account (Required)</p>
                                 
                                </Grid>
                                
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                <input placeholder="E-mail Address" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                <input placeholder="Password" type="password" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                <input className={`${useWindowSize()[0]>=960?classes.buttons:classes.buttonsSmall}`} onClick={handleClick} type="submit" value="Checkout"/>
                                </Grid>
                                <Grid item md={12} md={12} sm={12} xs={12}>
                                    <p>By clicking 'Checkout' you are agreeing to our Terms of Service</p>
                                </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                </Grid>
            </Grid>
            <Dialog
                  open={open}
                  onClose={handleClose}
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
                         <h2 style={{fontFamily:"poppins",color:"white",backgroundColor:'gray',width:'50px', fontWeight:"200",width:'auto', textAlign:'center', marginTop:'-15px' , width: '200px' , marginLeft: '-25px'}}>
                        {orderId}
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
                    className={useWindowSize()[0]>=450?classes.buttonsDialog:classes.buttonsDialogSmall} 
                    value="Continue"
                    onClick={handleClose}
                     type="button"></input>
                    </div>
                  </DialogActions>
                </Dialog>
        </div>
    )
}
