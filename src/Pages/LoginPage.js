import React, { Component } from 'react';
import Login from '../Components/Login';
import Grid from '@material-ui/core/Grid';
import Background from '../images/backgroundold.png';
import Header from '../Components/Header';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    render() {
        return (
            <div style={{backgroundImage:`url(${Background})`}} className="homepageSubscription">
                <Header></Header>
                <Grid container justify="center" alignContent="center">
                <Grid item lg={4} md={4} sm={12} xs={12} >
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} >
                <h1 className="textLogin" >Account Login</h1>
                <p className="textLoginP">Don't have an Account? Subscribe to <a style={{color:"white"}} href="/#planSection">SignUp</a> </p>
                    <Login viewWidth={this.state.width}></Login>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} >
                </Grid>
            </Grid>
            </div>
        )
    }
}
