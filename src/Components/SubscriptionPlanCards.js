import React ,{ useLayoutEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const useStyles = makeStyles((theme) => ({
    paper: {
      width:"100%",
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
        height:130,
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
        width:'125px',
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
        marginTop:"-8px",
        marginBottom:"6px"
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
  
    console.log("The window is resizing",useWindowSize()[0])
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={2} className={useWindowSize()[0]>=960?classes.paper:classes.paperSmall} >
                <h1 className={classes.headerText}>{props.heading}</h1>
            <Paper elevation={2} className={classes.innerPaper} >
            <Grid container spacing={2} justify="center">
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <p className={classes.innerPaperLeftText}>
                        <ul class="checkmark">
                            <li>Games</li>
                        </ul>
                    </p>
                    <p className={classes.innerPaperLeftText}>
                        <ul class="checkmark">
                            <li>Comics</li>
                        </ul>
                    </p>
                    <p className={classes.innerPaperLeftText}>
                        <ul class="checkmark">
                            <li>Anime</li>
                        </ul>
                    </p>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <h1 className={classes.headerPrice}>{props.price}</h1>
                    <StripeCheckout
                        className={"checkoutButtonSub"}
                        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                        amount={product.price * 100}
                        name="Subscription"
                        billingAddress
                        shippingAddress
                    />
                </Grid>
            </Grid>
            </Paper>
            </Paper>
        </div>
    )
}
