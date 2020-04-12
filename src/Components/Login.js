import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    paper: {
      width:'100%',
      height:350,
        borderRadius:'20px',
      backgroundColor:"white",
      color: theme.palette.text.secondary,
    },
    textFields:
    {
      width:'90%',
      height:'37px',
      border:'unset',
      marginLeft:'5%',
      borderRadius:'5px',
      backgroundColor:"#e7e7e7",
    },
    forgotPassword:{
      color:"#000745",
      marginLeft:'65%',
      marginBottom:'40px',
    },
    labels:{
      color:"#000745",
      marginLeft:'5%',
    },
    buttons:{
        backgroundColor:"#000745",
        fontWeight:'700',
        height:'37px',
        marginBottom:'15px',
        width:'90%',
        color:'white',
        borderRadius:'5px',
        marginLeft:'5%',
        border:'unset'
      },
    headerText:{
        color:"#e80644",
        fontSize:'22pt', 
    }
    
  }));

export default function Login() {
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={2} className={classes.paper} >
            <form noValidate>
              <p style={{paddingTop:'30px'}} className={classes.labels} >Username (E-mail)</p>
              <input className={classes.textFields}/>
              <p  className={classes.labels}>Name</p>
              <input  className={classes.textFields}/>
              <p className={classes.forgotPassword}>Forgot Password?</p>
              <input className={classes.buttons} type="submit" value="Login"/>
            </form>
            </Paper>
        </div>
    )
}
