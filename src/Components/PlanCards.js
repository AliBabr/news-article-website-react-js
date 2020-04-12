import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const useStyles = makeStyles((theme) => ({
    paper: {
      width:300,
      height:170,
        textAlign: 'center',
        borderRadius:'20px',
      margin:theme.spacing(6),
      backgroundColor:"white",
      color: theme.palette.text.secondary,
    },
    innerPaper: {
        width:300,
        height:145,
        textAlign: 'center',
        borderStartEndRadius:'0px',
        borderStartStartRadius:'0px',
        borderEndEndRadius:'20px',
        borderEndStartRadius:'20px',
        backgroundImage: "linear-gradient(to right, #890103, #04104e)",
        color: theme.palette.text.secondary,
      },

      paperSmall: {
        width:"100%",
        height:170,
          textAlign: 'center',
          borderRadius:'20px',
        backgroundColor:"white",
        color: theme.palette.text.secondary,
      },
      innerPaperSmall: {
          width:"100%",
          height:150,
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
        width:'105px',
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
        fontSize:"25pt",
        fontWeight:'600',
        margin:'unset',
        marginTop:"-14px",
        marginBottom:"6px"
    },
    innerPaperLeftText:{
        fontSize:'14pt',
        fontWeight:'700',
        color:'white',
    },
    
  }));

export default function PlanCards(props) {
    var [product] = React.useState({
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
    const classes = useStyles();
    console.log(props.viewWidth)
    return (
        <div>
            <Paper elevation={2} className={props.viewWidth>=960?classes.paper:classes.paperSmall} >
                <h1 className={classes.headerText}>{props.heading}</h1>
            <Paper elevation={2} className={props.viewWidth>=960?classes.innerPaper:classes.innerPaperSmall} >
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
                    <h1 className={classes.headerPrice}>{"$"+props.price}</h1>
                    <StripeCheckout
                        className={"checkoutButton"}
                        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                        amount={props.price * 100}
                        name={props.heading}
                        billingAddress
                        shippingAddress
                    />
                    {/* <Button style={{textTransform:'initial'}} className={classes.buttons} variant="contained" color="primary">
                        Select
                    </Button> */}
                    <Button style={{textTransform:'initial'}} className={"customButton"} variant="contained" color="primary">
                        Give As Gift
                    </Button>
                </Grid>
            </Grid>
            </Paper>
            </Paper>
        </div>
    )
}
