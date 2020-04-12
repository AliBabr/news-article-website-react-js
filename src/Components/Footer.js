import React from 'react';
import {Grid} from "@material-ui/core";
import Background from '../images/background.png';
import FooterImage from '../images/footer.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    addressDiv:{
        textAlign:'left',
        marginTop:'30px',
        padding:'10px',
        color:'white'
    },
    addressDivSmall:{
        textAlign:'left',
        marginTop:'30px',
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
                <Grid item xs={1} sm={0} md={1} lg={1}  ></Grid>
                <Grid item xs={11} sm={6} md={3} lg={3}  >
                <img src={FooterImage} style={{height:"300px",width:"300px"}} alt="footer"></img>
                </Grid>
                <Grid item xs={10} sm={5} md={4} lg={4}  >
                    <div className={props.viewWidth>=960?classes.addressDiv:classes.addressDivSmall}>
                        <h3>Our Company</h3>
                        <p>Address goes here</p>
                        <p>Address goes here</p>
                        <p>exampl@gmail.com</p>
                        <p>+102-2342-2342-2</p>
                    </div>
                </Grid>
                <Grid item xs={10} sm={10} md={4} lg={4} alignContent="flex-end"  >
                <div className={props.viewWidth>=960?classes.socialIcons:classes.socialIconsSmall}>
                    <a href="https://wwww.facebook.com"><img src={Facebook} style={{height:'50px',marginRight:'10px'}}></img></a>
                    <a href="https://wwww.instagram.com"><img src={Instagram} style={{height:'50px',marginRight:'10px'}}></img></a>
                    <a href="https://wwww.twitter.com"><img src={Twitter} style={{height:'50px'}}></img></a>
                </div>
                </Grid>
                <Grid item xs={10} sm={10} md={1} lg={1}  ></Grid>

            </Grid>            
        </div>
    )
}
