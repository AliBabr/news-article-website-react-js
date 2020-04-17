import React ,{ useLayoutEffect, useState }  from 'react'
import Cards from '../Components/Cards';
import Header from '../Components/Header';
import { makeStyles} from '@material-ui/core/styles';
import {Hidden,TextField,Grid} from "@material-ui/core";
import Background from '../images/backgroundold.png';
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
    
    const classes = useStyles();
    const Headings =['1 Month Plan','3 Month Plan','6 Month Plan'];
    const Prices =[30,85.50,162];
    const displayPrices =["$30","$85.50","$162"];
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
                                <p  className={classes.labels}>Username (E-mail)</p>
                                    <input value="Jhon" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Name</p>
                                    <input value="Jhon" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 
                                {/* Second Row */}

                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Password</p>
                                <input type="password" value="Jhon" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Phone#</p>
                                    <input value="051-23232323" className={useWindowSize()[0]>=960?classes.textFields:classes.textFieldsSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={12} >
                                </Grid> 

                                {/* Third Row */}

                                <Grid item lg={1} md={1} sm={12} xs={10} >
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Address</p>
                                    <textarea value="Jhons Home" className={useWindowSize()[0]>=960?classes.textAreas:classes.textAreasSmall}/>
                                </Grid>
                                <Grid item lg={5} md={5} sm={12} xs={12} >
                                <p  className={classes.labels}>Billing Information</p>
                                    <textarea value="Jhons Account" className={useWindowSize()[0]>=960?classes.textAreas:classes.textAreasSmall}/>
                                </Grid>
                                <Grid item lg={1} md={1} sm={12} xs={10} >
                                </Grid>

                                {/* Fourth Row */}

                                <Grid item lg={3} md={3} sm={12} xs={10} >
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                <input className={classes.buttonEdit} type="submit" value="Edit"/>
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
                            <PlanCard heading={Headings[0]} price={Prices[0]} displayPrice={displayPrices[0]} />
                            </Grid>
                            <Grid item lg={4} md={6} sm={12} xs={12} >
                                <PlanCard selected="*" heading={Headings[1]} price={Prices[1]} displayPrice={displayPrices[1]} />
                            </Grid>
                            <Hidden only={['xs','lg','xl']}>
                            <Grid item lg={4} md={3} sm={12} xs={10} >
                            </Grid> 
                            </Hidden>
                            <Grid item lg={4} md={6} sm={12} xs={12} >
                                <PlanCard heading={Headings[2]} price={Prices[2]} displayPrice={displayPrices[2]} />
                            </Grid> 
                            </Grid>
                        </Grid>
                        <Grid item lg={1} md={1} sm={10} xs={10} >
                        </Grid>
                        <Grid container spacing={0} >
                                <Grid item lg={3} md={3} sm={10} xs={10} >
                                </Grid>
                                <Grid item lg={6} md={6} sm={10} xs={11} >
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
