import React ,{ useLayoutEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Caution from "../images/warning.jpg";

const useStyles = makeStyles((theme) => ({
    paper: {
      width:"95%",
      height:170,
        textAlign: 'center',
        borderRadius:'20px',
      margin:theme.spacing(5),
      backgroundColor:"white",
      color: theme.palette.text.secondary,
    },
    paperSmall: {
        width:"100%",
        height:170,
          textAlign: 'center',
          borderRadius:'20px',
        margin:theme.spacing(4),
        backgroundColor:"white",
        color: theme.palette.text.secondary,
      },
    innerPaper: {
        width:"100%",
        height:145,
        textAlign: 'center',
        borderStartEndRadius:'0px',
        borderStartStartRadius:'0px',
        borderEndEndRadius:'20px',
        borderEndStartRadius:'20px',
        backgroundImage: "linear-gradient(to right, #890103, #04104e)",
        color: theme.palette.text.secondary,
      },
      buttons:{
        backgroundColor:"#e80644",
        width:'110px',
        margin:'5px',
        borderRadius:"25px",
        fontWeight:'700',
        height:'37px',
        marginBottom:'15px',
      },
    buttonsSmall:{
        backgroundColor:"#e80644",
        width:'100px',
        borderRadius:"25px",
        fontWeight:'700',
        height:'37px',
        marginBottom:'15px',
      },
    headerText:{
        color:"#e80644",
        fontSize:'18pt', 
    },
    headerPrice:{
        color:'white',
        fontSize:"28pt",
        fontWeight:'600',
        margin:'unset',
        marginTop:"5px",
        marginBottom:"6px"
    },
    buttonsDialog:{
      backgroundImage: "linear-gradient(to right, #04104e, #890103)",
      fontWeight:'700',
      height:'37px',
      marginBottom:'15px',
      width:'250px',
      color:'white',
      borderRadius:'5px',
      border:'unset'
    },
    buttonsDialogSmall:{
      backgroundImage: "linear-gradient(to right, #04104e, #890103)",
      fontWeight:'700',
      height:'37px',
      marginBottom:'15px',
      width:'200px',
      color:'white',
      borderRadius:'5px',
      border:'unset'
    },
    innerPaperLeftText:{
        fontSize:'14pt',
        fontWeight:'700',
        color:'white',
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



  

export default function PlanCards(props) {
  console.log(props)
  const [openNo, setOpenNo] = useState("");
  const [selected,setSelected] = useState(props.selected)
  const [openYes, setOpenYes] = useState("");
  const [msg, setMsg] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openSmackBar, setOpenSmackBar] = React.useState(false);
  const [gameChecked, setGameCheck] = useState(true);
  const [checkCount, setCheckCount] = useState(3);
  const [animeChecked, setAnimeCheck] = useState(true);
  const [comicChecked, setComicCheck] = useState(true);
  const [product] = React.useState({
    name: "Your Plan",
    price: 30,
    description: "News Plan"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  const handleCloseYes = () => {
    setOpenYes(false);
  };

  const handleOpenYes = () => {
    setOpen(false);
    setSelected(null);
    setOpenYes(true);
  };

  const handleOpenNo = () => {
    setOpen(false);
  };

const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  function handleGameClick()
      {
        if(gameChecked==false)
        {
          setGameCheck(!gameChecked);
          setCheckCount(checkCount+1);
        }
        else if(checkCount>1)
        {
          setGameCheck(!gameChecked);
          setCheckCount(checkCount-1);
        }
      }
      function handleComicClick()
      {
        if(comicChecked==false)
        {
          setComicCheck(!comicChecked);
          setCheckCount(checkCount+1);
        }
        else if(checkCount>1)
        {
          setComicCheck(!comicChecked);
          setCheckCount(checkCount-1);
        }
      }
      function handleAnimeClick()
      {
        if(animeChecked==false)
        {
          setAnimeCheck(!animeChecked);
          setCheckCount(checkCount+1)
        }
        else if(checkCount>1)
        {
          setAnimeCheck(!animeChecked);
          setCheckCount(checkCount-1)
        }
      }
      const handleSmackBarOpen = () => {
        setMsg("Enter E-mail Again");
        setOpenSmackBar(true);
      };
      const handleSmackBarClose=()=>{
        setOpenSmackBar(false);
      }
  
    console.log("The window is resizing",useWindowSize()[0])
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={2} className={useWindowSize()[0]>=960?classes.paper:classes.paperSmall} >
                <h1 className={classes.headerText}>{selected!=null?props.selected+props.heading:props.heading}</h1>
            <Paper elevation={2} className={classes.innerPaper} >
            <Grid container spacing={2} justify="center">
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <p className={classes.innerPaperLeftText}>
                        <ul className={gameChecked?"checkmark":"uncheckmark"}>
                            <li onClick={handleGameClick}>Gaming</li>
                        </ul>
                    </p>
                    <p className={classes.innerPaperLeftText}>
                        <ul className={comicChecked?"checkmark":"uncheckmark"}>
                            <li onClick={handleComicClick}>Comics</li>
                        </ul>
                    </p>
                    <p className={classes.innerPaperLeftText}>
                        <ul className={animeChecked?"checkmark":"uncheckmark"}>
                            <li onClick={handleAnimeClick}>Anime</li>
                        </ul>
                    </p>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <h1 className={classes.headerPrice}>{props.displayPrice}</h1>
                    {
                      props.selected!=null && selected!=null?<Button style={{textTransform:'initial'}} className={classes.buttons} onClick={handleClick} variant="contained" color="primary">
                        Cancel
                    </Button>:
                    <a href={`/checkout/${props.Keys}`}><Button style={{textTransform:'initial'}} className={"customButton"} variant="contained" color="primary">
                    Select
                </Button></a>
                //     <StripeCheckout
                //     className={"checkoutButtonSub"}
                //     stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                //     amount={product.price * 100}
                //     name="Subscription"
                //     billingAddress
                //     shippingAddress
                // />
                    }
                    
                    
                </Grid>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle style={{paddingBottom:"0px"}} id="alert-dialog-title">
                    <div style={{textAlign:'center'}}>
                    <img src={Caution} style={{height:"130px",width:'130px'}}></img>
                    </div>
                    <h6 style={{fontFamily:"poppins",fontWeight:"200",width:'auto', textAlign:'justify', paddingBottom:'-5px'}}>
                     Are you sure you want to cancel you monthly blast of Awesomeness?</h6></DialogTitle>
                  <DialogActions>
                  <input 
                    className={props.viewWidth>=450?classes.buttonsDialog:classes.buttonsDialogSmall} 
                    value="Yes, Cancel Subscription"
                    onClick={handleOpenYes}
                     type="button"></input>
                  <input 
                    className={props.viewWidth>=450?classes.buttonsDialog:classes.buttonsDialogSmall} 
                    onClick={handleOpenNo}
                    value="No Keep it going" 
                    type="button"></input>
                  </DialogActions>
                </Dialog>

                <Dialog
                  open={openYes}
                  onClose={handleCloseYes}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle style={{paddingBottom:"0px"}} id="alert-dialog-title">
                    {/* <div style={{textAlign:'center'}}>
                    <img src={Caution} style={{height:"130px",width:'130px'}}></img>
                    </div> */}
                    <h6 style={{fontFamily:"poppins",fontWeight:"200",width:'auto', textAlign:'justify', paddingBottom:'-5px'}}>
                     Subscription cancelled successfully. We are sorry to see you go!</h6></DialogTitle>
                  <DialogActions>
                    {/* <div style={{textAlign:'center'}}>
                      <input 
                    className={classes.buttonsDialog}
                    value="Close"
                    style={{width:'100%'}}
                    onClick={handleCloseYes}
                    type="button"></input>
                    </div> */}
                  
                  </DialogActions>
                </Dialog>
                        {/* <Button className={props.viewWidth>=450?classes.forgotPassword:classes.forgotPasswordSmall} onClick={handleClick}>Forgot Password</Button> */}
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  open={openSmackBar}
                  autoHideDuration={6000}
                  onClose={handleSmackBarClose}
                  message={msg}
                  action={
                    <React.Fragment>
                      <Button color="secondary" size="small" onClick={handleSmackBarClose}>
                        UNDO
                      </Button>
                      <IconButton size="small" aria-label="close" color="inherit" onClick={handleSmackBarClose}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
                />
            </Grid>
            </Paper>
            </Paper>
        </div>
    )
}
