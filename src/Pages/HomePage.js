import React, { Component } from 'react';
import Header from '../Components/Header';
import HomePageCover from '../Containers/HomePageCover';
import HomePageHow from '../Containers/HomePageHow';
import HomePagePlans from '../Containers/HomePagePlans';
import Footer from '../Components/Footer';

export default class HomePage extends Component {
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
            
            <div>
                <Header/>
                <HomePageCover viewWidth={this.state.width}/>
                <HomePageHow  viewWidth={this.state.width}/>
                <HomePagePlans/>
                <Footer viewWidth={this.state.width} />
            </div>
        )
    }
}
