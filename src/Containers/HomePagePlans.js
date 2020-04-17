import {Grid} from '@material-ui/core';
import React from 'react';
import PlanCard from "../Components/PlanCards";
import { makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundSize:"auto",
      backgroundPosition:"center",
    },
    paper: {
      width:"80%",
      height:450,
      margin:theme.spacing(5),
      textAlign: 'center',
      backgroundColor:"rgba(0, 0, 0, 0.5)",
      color: theme.palette.text.secondary,
    },
    paperImage:{
        marginTop:theme.spacing(6),
    },
    paperHeader:{
        color:"black",
        fontSize:'20pt',
    },
    paperSubHeader:{
        color:"black",
        fontSize:'11pt',
    }
  }));

export default function HomePagePlans(props) {
    const Prices =[30,85.50,162];
    const displayPrices =["$30","$85.50","$162"];
    const classes = useStyles();
    const Headings =['1 Month Plan','3 Month Plan','6 Month Plan'];
    const monthlyAmount = ['$28.50 per month','$27 per month']
    return (
        <section id={'planSection'}>
            <div>
            <Grid container justify="center">
                <Grid item sm={3} md={3} lg={3} xl={3} ></Grid>
                <Grid item sm={6} md={6} lg={6} xl={6} >
                    <h1 className="textPlan" style={{color:'#04104e'}} >Pick Your Plan!</h1>
                    <p className={classes.paperSubHeader} style={{textAlign:'center',margin:'auto',width:"80%"}}>Pick Your Theme(s)!</p>
                    <p className={classes.paperSubHeader} style={{textAlign:'center',margin:'auto',width:"80%"}}>Pay for additional months to save money.</p>
                </Grid>
                <Grid item sm={3} md={3} lg={3} xl={3} ></Grid>
            </Grid>
            <Grid container spacing={2} justify="center">
                <Grid item lg={1} md={1} sm={10} xs={10} >
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} >
                    <Grid container justify="center" >
                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <PlanCard viewWidth={props.viewWidth} heading={Headings[0]} price={Prices[0]} displayPrice={displayPrices[0]} />
                        </Grid>
                        <Grid item item lg={4} md={4} sm={12} xs={12}>
                            <p className="planList">
                                <h2>1 Month Plan</h2>
                                <ul>
                                    <li>Recurring 1 Month Plan</li>
                                    <li>Select desired box theme(s)</li>
                                    <li>Cancel Anytime</li>
                                </ul>
                            </p>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>

                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <PlanCard viewWidth={props.viewWidth}  heading={Headings[1]} price={Prices[1]} perMonth={monthlyAmount[0]} displayPrice={displayPrices[1]} />
                        </Grid>
                        <Grid item item lg={4} md={4} sm={12} xs={12}>
                        <p className="planList">
                                <h2 style={{maginBottom:'5px'}}>3 Month Plan</h2>
                                <ul>
                                    <li>Recurring 3 Month Plan</li>
                                    <li>Select desired box theme(s)</li>
                                    <li>You save $1.50 per month</li>
                                </ul>
                            </p>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>

                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <PlanCard viewWidth={props.viewWidth}  heading={Headings[2]} price={Prices[2]} perMonth={monthlyAmount[1]} displayPrice={displayPrices[2]}/>
                        </Grid>
                        <Grid item item lg={4} md={4} sm={12} xs={12}>
                        <p className="planList">
                                <h2>6 Month Plan</h2>
                                <ul>
                                    <li>Recurring 6 Month Plan</li>
                                    <li>Select desired box theme(s)</li>
                                    <li>You save $3 per month</li>
                                </ul>
                            </p>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={1} md={1} sm={10} xs={10} >
                </Grid>
            </Grid>
        </div>
        </section>
    )
}
