import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
import * as EmailValidator from 'email-validator';
// import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import { getToken,getUser, removeUserSession, setUserSession } from '../Components/Utils/Common';


const useStyles = makeStyles((theme) => ({
    paper: {
      width:'100%',
      // height:350,
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
    textFieldEmail:
    {
      width:'88%',
      height:'37px',
      paddingLeft:'15px',
      border:'unset',
      marginLeft:'4%',
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
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openSmackBar, setOpenSmackBar] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
      setEmail(e.target.value);

    }
    function handlePassword(e)
    {
      setPassword(e.target.value);
    }
    function handleEmail(e)
    {
      setEmail(e.target.value);
    }
      
    function handleLogin(e)
    {
      e.preventDefault();
      axios.post(`https://news-article-system.herokuapp.com/api/v1/users/web_sign_in?email=${email}&password=${password}`).then(response => {
        setUserSession(response.data.user_deatails[0].Authentication, response.data.user_deatails[0]);
        // sessionStorage.setItem('subscription', JSON.stringify(response.data.subscriptions[0]));
        localStorage.setItem('count', 1);
        window.location.assign('/account')
        sessionStorage.setItem('toogle', true);
      }).catch(error => {
        if (error.response.status === 400) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });

    }

  const handleSmackBarOpen = () => {
    if(email!="" && EmailValidator.validate(email))
    {
      setOpen(false);
      setMsg("E-mail Sent");
    }
    else
    {
      setMsg("Enter E-mail Again");
    }
    setOpenSmackBar(true);
  };
  const handleSmackBarClose=()=>{
    setOpenSmackBar(false);
  }
  const token = getToken()

  if (token != null) {
    window.location.assign('/account')
    
  }
  
    return (
        <div>
            <Paper elevation={2} className={classes.paper} >
            <form noValidate>
              {error && <><small style={{ color: 'red', marginLeft: '60px' }}>{error}</small></>}
              <p style={{paddingTop:'30px'}} className={classes.labels} >Email</p>
              <input onChange={handleUser} value={user} className={classes.textFields}/>
              <p  className={classes.labels}>Password</p>
              <input  type="password" onChange={handlePassword} value={password}  className={classes.textFields}/>
              {/* <p className={classes.forgotPassword}>Forgot Password?</p> */}
              <Button className={props.viewWidth>=450?classes.forgotPassword:classes.forgotPasswordSmall} onClick={handleClick}>
                  Forgot Password
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle style={{paddingBottom:"0px"}} id="alert-dialog-title">
                    <h6 style={{fontFamily:"poppins",fontWeight:"200",width:'280px', textAlign:'justify', paddingBottom:'-5px'}}>
                      Please enter your e-mail address and we'll send you a link to reset your password</h6></DialogTitle>
                  <input onChange={handleEmail} type="email" className={classes.textFieldEmail}/>
                  <DialogActions>
                    <Button onClick={handleSmackBarOpen} color="primary" autoFocus>
                      Send
                    </Button>
                  </DialogActions>
                </Dialog>
                        {/* <Button className={props.viewWidth>=450?classes.forgotPassword:classes.forgotPasswordSmall} onClick={handleClick}>Forgot Password</Button> */}
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  open={openSmackBar}
                  autoHideDuration={6000}
                  onClose={handleSmackBarClose}
                  message={msg}
                  action={
                    <React.Fragment>
                      <Button color="secondary" size="small" onClick={handleSmackBarClose}>
                        UNDO
                      </Button>
                      <IconButton size="small" aria-label="close" color="inherit" onClick={handleSmackBarClose}>
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
