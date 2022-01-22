import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import React, { Component } from "react";
import Navigation from "./Navbar";
import BannerHeader from "./BannerHeader";
import Body from "./body/Body";
import Footer from "./Footer";


export default class Home extends Component {
    constructor(props) {
        super(props);
       /* this.state = {
            content: ""
        };*/
    }

    componentDidMount() {
     /*   UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content: error.message
                });
            }
        );*/
    }

    render() {
        return (
            <div>
                <header className='bg-light'>
                     <Navigation />
                     <BannerHeader />
                </header>
                <Body />
                <Footer />
            </div>
        );
    }
}
