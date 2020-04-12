import React from 'react'
import Cards from '../Components/Cards';
import { makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Background from '../images/background.png'
import PickTheme from '../images/comic.png';
import MoniterImage from '../images/commerce-and-shopping.png';
import Subscriptionimage from '../images/subscription(1).png';

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
        color:"white",
        fontSize:'20pt',
    },
    paperSubHeader:{
        color:"white",
        fontSize:'11pt',
    }
  }));

export default function HomePageSignup() {
    const classes = useStyles();
    const Headings = ['Pick Your Theme(s)','Select Monthly Plans','Checkout and Enjoy'];
    const SubHeadings =["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nec velit ac feugiat."];
    return (
        <section id={'section1'}>
            <div  style={{backgroundImage:`url(${Background})`}} className="homepageSignup">
            <Grid container justify="center">
                <Grid item sm={3} md={3} lg={3} xl={3} ></Grid>
                <Grid item sm={6} md={6} lg={6} xl={6} >
                    <h1 className="textSignup" >Here's How It Works!</h1>
                    <p className={classes.paperSubHeader} style={{textAlign:'justify'}}>“We ship all orders around the 10th of the month. When you sign up before the end of the month, you will get the following month’s mystery power box around the 10th of the following month. </p>
                    <p className={classes.paperSubHeader} style={{textAlign:'justify'}}>Quality is is our #1 goal! Every mystery power box will be hand selected with the hottest new items each month. Choose one or more of our three themes that interest you and we will customize the items we include in your box</p>
                    {/* <p className={classes.paperSubHeader} style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nec velit ac feugiat. Maecenas nibh magna, cursus pretium pulvinar non Maecenas nibh magna, pulvinar cursus pretium non</p> */}
                </Grid>
                <Grid item sm={3} md={3} lg={3} xl={3} ></Grid>
            </Grid>
            <Grid container spacing={2} justify="center">
                <Grid item lg={4} md={4} sm={10} xs={10} >
                    <Cards class={classes} image={PickTheme} heading={Headings[0]} subheading={SubHeadings[0]}/>
                </Grid>
                <Grid item lg={4} md={4} sm={10} xs={10} >
                    <Cards class={classes} image={Subscriptionimage} heading={Headings[1]} subheading={SubHeadings[0]}/>
                </Grid>
                <Grid item lg={4} md={4} sm={10} xs={10} >
                    <Cards class={classes} image={MoniterImage} heading={Headings[2]} subheading={SubHeadings[0]}/>
                </Grid>
            </Grid>
        </div>
        </section>
    )
}
