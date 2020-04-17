import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
      paddingLeft:'15px',
      border:'unset',
      marginLeft:'5%',
      borderRadius:'5px',
      backgroundColor:"#e7e7e7",
    },
    forgotPassword:{
      color:"#000745",
      marginLeft:'65%',
      width:'35%',
      marginBottom:'40px',
      fontFamily:'poppins'
    },
    forgotPasswordSmall:{
      color:"#000745",
      marginLeft:'55%',
      width:'45%',
      marginBottom:'40px',
      fontFamily:'poppins'
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

export default function Login( props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const classes = useStyles();
    function handleUser(e)
    {
      console.log("it coming here")
      setUser(e.target.value);
    }
    function handlePassword(e)
    {
      setPassword(e.target.value);
    }
    function handleLogin(e)
    {
      e.preventDefault();
      if(user=="jhon" && password =="jhon")
      {
        window.location.assign('/account')
      }
    }
    return (
        <div>
            <Paper elevation={2} className={classes.paper} >
            <form noValidate>
              <p style={{paddingTop:'30px'}} className={classes.labels} >Username (E-mail)</p>
              <input onChange={handleUser} value={user} className={classes.textFields}/>
              <p  className={classes.labels}>Password</p>
              <input  type="password" onChange={handlePassword} value={password}  className={classes.textFields}/>
              {/* <p className={classes.forgotPassword}>Forgot Password?</p> */}
              <Button className={props.viewWidth>=450?classes.forgotPassword:classes.forgotPasswordSmall} onClick={handleClick}>Forgot Password</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="E-mail sent"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
              <input className={classes.buttons} onClick={handleLogin} type="submit" value="Login"/>
            </form>
            </Paper>
        </div>
    )
}
