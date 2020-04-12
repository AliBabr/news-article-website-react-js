import React ,{ useLayoutEffect, useState }  from 'react'
import Cards from '../Components/Cards';
import Header from '../Components/Header';
import { makeStyles} from '@material-ui/core/styles';
import {Hidden,TextField,Grid} from "@material-ui/core";
import Background from '../images/background.png';
import Paper from '@material-ui/core/Paper';
import PlanCard from "../Components/SubscriptionPlanCards";

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
      width:'100%',
      height:'30px',
      border:'unset',
      borderRadius:'5px',
      backgroundColor:"#e7e7e7",
    },
    textAreasSmall:
    {
      width:'100%',
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
        width:'80%',
        color:'white',
        borderRadius:'5px',
        marginLeft:'15%',
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
    
    const classes = useStyles();
    const Headings =['1 Month Plan','3 Months Plan','6 Months Plan'];
    const Prices =["$30","$85.5","$162"];
    return (
        <div style={{backgroundImage:`url(${Background})`}} className="homepageSubscription">
            <Header></Header>
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
                                <p  className={classes.labels}>Username</p>
                                    <input className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Name</p>
                                    <input className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 
                                {/* Second Row */}

                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Email</p>
                                    <input className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Phone#</p>
                                    <input className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 

                                {/* Third Row */}

                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Password</p>
                                    <input className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={10} >
                                </Grid>

                                {/* Fourth Row */}

                                <Grid item lg={1} md={1} sm={12} xs={10} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Adresss</p>
                                    <textarea className={useWindowSize()[0]>=960?classes.textAreas:classes.textAreasSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Billing Information</p>
                                    <textarea className={useWindowSize()[0]>=960?classes.textAreas:classes.textAreasSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={10} >
                                </Grid>  
                        </Grid>
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={10} >
                    </Grid>
                    </Grid>
                    <h6 style={{color:'gray',margin:"0px",fontSize:'12pt',textAlign:'center'}} >Upgrage Subscription!</h6>
                    
                    <Grid container spacing={0} >
                        <Grid item lg={1} md={1} sm={10} xs={10} >
                        </Grid>
                        <Grid item lg={10} md={10} sm={10} xs={10} >
                            <Grid container>
                            <Grid item lg={4} md={6} sm={12} xs={12} >
                            <PlanCard heading={Headings[0]} price={Prices[0]} />
                            </Grid>
                            <Grid item lg={4} md={6} sm={12} xs={12} >
                                <PlanCard heading={Headings[1]} price={Prices[1]} />
                            </Grid>
                            <Hidden only={['xs','lg','xl']}>
                            <Grid item lg={4} md={3} sm={12} xs={10} >
                            </Grid> 
                            </Hidden>
                            <Grid item lg={4} md={6} sm={12} xs={12} >
                                <PlanCard heading={Headings[2]} price={Prices[2]} />
                            </Grid> 
                            </Grid>
                        </Grid>
                        <Grid item lg={1} md={1} sm={10} xs={10} >
                        </Grid>
                        <Grid container spacing={0} >
                                <Grid item lg={3} md={3} sm={10} xs={10} >
                                </Grid>
                                <Grid item lg={6} md={6} sm={10} xs={10} >
                                <input className={classes.buttons} type="submit" value="Done"/>
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
}
