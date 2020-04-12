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
      height:400,
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
    const Prices =[30,85.5,162];
    const classes = useStyles();
    const Headings =['1 Month Plan','3 Months Plan','6 Months Plan'];
    return (
        <div>
            <Grid container justify="center">
                <Grid item sm={3} md={3} lg={3} xl={3} ></Grid>
                <Grid item sm={6} md={6} lg={6} xl={6} >
                    <h1 className="textPlan" style={{color:'#04104e'}} >Pick Your Plan!</h1>
                    <p className={classes.paperSubHeader} style={{textAlign:'justify',margin:'auto',width:"80%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nec velit ac feugiat.</p>
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
                            <PlanCard viewWidth={props.viewWidth} heading={Headings[0]} price={Prices[0]} />
                        </Grid>
                        <Grid item item lg={4} md={4} sm={12} xs={12}>
                            <p className="planList">
                                <h2>1 Month Plan</h2>
                                <ul>
                                    <li>Enjoy One Month</li>
                                    <li>Enjoy One Month</li>
                                    <li>Enjoy One Month</li>
                                </ul>
                            </p>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>

                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <PlanCard viewWidth={props.viewWidth}  heading={Headings[1]} price={Prices[1]} />
                        </Grid>
                        <Grid item item lg={4} md={4} sm={12} xs={12}>
                        <p className="planList">
                                <h2 style={{maginBottom:'5px'}}>3 Months Plan</h2>
                                <ul>
                                    <li>Enjoy One Month</li>
                                    <li>Enjoy One Month</li>
                                    <li>Enjoy One Month</li>
                                </ul>
                            </p>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>

                        <Grid item lg={2} md={2} sm={12} xs={12}>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <PlanCard viewWidth={props.viewWidth}  heading={Headings[2]} price={Prices[2]}/>
                        </Grid>
                        <Grid item item lg={4} md={4} sm={12} xs={12}>
                        <p className="planList">
                                <h2>6 Months Plan</h2>
                                <ul>
                                    <li>Enjoy One Month</li>
                                    <li>Enjoy One Month</li>
                                    <li>Enjoy One Month</li>
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
    )
}
