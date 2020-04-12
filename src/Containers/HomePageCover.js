import React from 'react';
import Grid from '@material-ui/core/Grid';
import CovereImage from '../images/header.png';
import AstroBox from '../images/Astro Box-1.png';
import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    coverLarge:{
        height:'70vh',
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
    }
  }));


export default function HomePageCover(props) {
    console.log("This is width",props.viewWidth);
    const classes = useStyles();
    return (
        <div className="homepage-cover-grid">
            <Grid container>
                <Grid  item  xs={12} sm={12} md={1} lg={1} xl={1}>
                </Grid>
                <Grid  item  xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div className={props.viewWidth>=960?"":"textCover"}>
                        <h1 style={{marginBottom:'-20px',marginTop:'50px',color:'#04104e'}}>Welcome To</h1>
                        <img src={AstroBox}  className={props.viewWidth>=960?classes.coverImage:classes.coverImageSmall}></img>
                        <p style={{width:"350px",textAlign:'justify',color:'#04104e'}}>Quality is is our #1 goal! Every mystery power box will be hand selected with the hottest new items each month. Choose one or more of our three themes that interest you and we will customize the items we include in your box</p>
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
