import React from 'react';
import {Grid} from "@material-ui/core";
import Background from '../images/footerbg.png';
import FooterImage from '../images/footer.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    addressDiv:{
        textAlign:'left',
        marginTop:'0px',
        padding:'10px',
        color:'white'
    },
    addressDivSmall:{
        textAlign:'left',
        marginTop:'25px',
        marginLeft:'20%',
        padding:'10px',
        color:'white'
    },
    socialIcons:{
        marginTop:"250px",textAlign:'center'
    },
    socialIconsSmall:{
        marginTop:"50px",textAlign:'center'
    },
  }));

export default function Footer(props) {
    const classes = useStyles();
    return (
        <div style={{backgroundImage:`url(${Background})`}} className="footer">
            <Grid container  justify="center">
                <Grid item xs={2} sm={0} md={1} lg={1}  ></Grid>
                <Grid item xs={10} sm={6} md={3} lg={3}  >
                <img src={FooterImage} style={{height:"270px",width:"250px",marginTop:"20px"}} alt="footer"></img>
                </Grid>
                <Grid item xs={10} sm={5} md={4} lg={4}  >
                    <div className={props.viewWidth>=960?classes.addressDiv:classes.addressDivSmall}>
                        <h3>Our Company</h3>
                        <p>Astro Box</p>
                        <p>8547 E. Arapahoe Rd. Ste J #429</p>
                        <p>Greenwood Village CO 80112</p>
                        <p>astropowerbox@gmail.com</p>
                        <p>(720)-239-2382</p>
                        <a  href="#"><p>Terms of Service</p></a>
                        <a href="#"><p>Privacy Policy</p></a>
                    </div>
                </Grid>
                <Grid item xs={10} sm={10} md={4} lg={4} alignContent="flex-end"  >
                <div className={props.viewWidth>=960?classes.socialIcons:classes.socialIconsSmall}>
                    <a href="https://www.facebook.com/astropowerbox/"><img src={Facebook} style={{height:'50px',marginRight:'10px'}}></img></a>
                    <a href="https://www.instagram.com/astropowerbox/"><img src={Instagram} style={{height:'50px',marginRight:'10px'}}></img></a>
                    <a href="https://www.twitter.com/astropowerbox/"><img src={Twitter} style={{height:'50px'}}></img></a>
                </div>
                </Grid>
                <Grid item xs={10} sm={10} md={1} lg={1}  ></Grid>

            </Grid>            
        </div>
    )
}
