import React from 'react';
import Grid from '@material-ui/core/Grid';
import CovereImage from '../images/headerNew.png';
import AstroBox from '../images/Astro Box-1.png';
import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    coverLarge:{
        height:'75vh',
        width:'65vw',
        float:"right",
    },
    coverMedium:{
        height:'60vh',
        width:'100vw',
        float:"right",
    },
    coverSmall:{
        height:'35vh',
        width:'100vw',
        float:"right",
    },
    coverImage:{
        marginLeft:'-50px',width:"400px"
    },
    coverImageSmall:{
        marginLeft:'-15px',width:"400px"
    },
    buttons:{
        backgroundImage: "linear-gradient(to right, #04104e, #890103)",
        fontWeight:'700',
        height:'37px',
        marginBottom:'15px',
        width:'350px',
        color:'white',
        borderRadius:'5px',
        border:'unset'
      },
  }));


export default function HomePageCover(props) {
    const classes = useStyles();
    return (
        <div className="homepage-cover-grid">
            <Grid container>
                <Grid  item  xs={12} sm={12} md={1} lg={1} xl={1}>
                </Grid>
                <Grid  item  xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div className={props.viewWidth>=960?"":"textCover"}>
                        <h1 style={{marginBottom:'-20px',marginTop:'50px',color:'#04104e',fontFamily:"poppins"}}>Welcome To</h1>
                        <img src={AstroBox}  className={props.viewWidth>=960?classes.coverImage:classes.coverImageSmall}></img>
                        <p style={{width:"350px",textAlign:'justify',color:'#04104e'}}>"Whether you are a gamer, comic fanatic or anime fan, we have got a box for you"</p>
                        <p style={{width:"350px",textAlign:'justify',color:'#04104e'}}>We make a bundle of collectibles, figures , comic books and more, that will be delivered
                         to your door every month. Each box will be a hand picked suprise of awesomeness!</p>
                         <a href="/#planSection"><input className={classes.buttons} value="Pick A Plan" type="button"></input></a>
                    </div>
                </Grid>
                <Grid  item  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img className={props.viewWidth>=960?classes.coverLarge:props.viewWidth>=400?classes.coverMedium:classes.coverSmall} src={CovereImage} alt="Cover"></img>
                </Grid>
                
                {/* <Grid item md={1} lg={1} xl={1}></Grid>
                <Grid item md={10} sm={12} lg={10} xl={10}>
                </Grid>
                <Grid item md={1} lg={1} xl={1}></Grid> */}
            </Grid>
        </div>
    )
}
