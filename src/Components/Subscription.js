import React from 'react'
import Cards from '../Components/Cards';
import { makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Background from '../images/background.png';
import Paper from '@material-ui/core/Paper';
import PlanCard from "./PlanCards";

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
      border:'unset',
      borderRadius:'5px',
      backgroundColor:"#e7e7e7",
    },
    textAreas:
    {
      width:'90%',
      height:'80px',
      border:'unset',
      borderRadius:'5px',
      backgroundColor:"#e7e7e7",
    },
    paper: {
      width:"100%",
      height:"95%",
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
        paddingLeft:"30px",
    },
    paperSubHeader:{
        color:"white",
        fontSize:'11pt',
    }
  }));

export default function Subscription() {
    const classes = useStyles();
    const Headings =['1 Month Plan','3 Months Plan','6 Months Plan'];
    const Prices =["$30","$85.5","$162"];
    return (
        <div style={{backgroundImage:`url(${Background})`}} className="homepageSubscription">
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
                                <Grid item lg={1} md={1} sm={10} xs={10} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={10} xs={10} >
                                <p  className={classes.labels}>Username</p>
                                    <input className={classes.textFields}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={10} xs={10} >
                                <p  className={classes.labels}>Name</p>
                                    <input className={classes.textFields}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={10} xs={10} >
                                </Grid> 
                                {/* Second Row */}

                                <Grid item lg={1} md={1} sm={10} xs={10} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={10} xs={10} >
                                <p  className={classes.labels}>Email</p>
                                    <input className={classes.textFields}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={10} xs={10} >
                                <p  className={classes.labels}>Phone#</p>
                                    <input className={classes.textFields}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={10} xs={10} >
                                </Grid> 

                                {/* Third Row */}

                                <Grid item lg={1} md={1} sm={10} xs={10} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={10} xs={10} >
                                <p  className={classes.labels}>Password</p>
                                    <input className={classes.textFields}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={10} xs={10} >
                                </Grid>
                                <Grid item lg={1} md={1} sm={10} xs={10} >
                                </Grid>

                                {/* Fourth Row */}

                                <Grid item lg={1} md={1} sm={10} xs={10} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={10} xs={10} >
                                <p  className={classes.labels}>Adresss</p>
                                    <textarea className={classes.textAreas}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={10} xs={10} >
                                <p  className={classes.labels}>Billing Information</p>
                                    <textarea className={classes.textAreas}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={10} xs={10} >
                                </Grid>  
                        </Grid>
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={10} >
                    </Grid>
                    </Grid>
                    <Grid container spacing={4} >
                        <Grid item lg={3} md={3} sm={10} xs={10} >
                            <PlanCard heading={Headings[1]} price={Prices[1]} />
                        </Grid>
                        <Grid item lg={3} md={3} sm={10} xs={10} >
                            <PlanCard heading={Headings[1]} price={Prices[1]} />
                        </Grid>
                        <Grid item lg={3} md={3} sm={10} xs={10} >
                            <PlanCard heading={Headings[1]} price={Prices[1]} />
                        </Grid> 
                    </Grid>
                </Paper>
                </Grid>
                <Grid item lg={1} md={1} sm={10} xs={10} >
                </Grid>
            </Grid>
        </div>
    )
}
