import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import React, { Component } from "react";

import UserService from "../services/user.service";
import Navigation from "./Navbar";
import BannerHeader from "./BannerHeader";
import Body from "./body/Body";
import Footer from "./Footer";



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contnt: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content: error.message
                        // (error.response && error.response.data) ||
                        // error.message || error.toString()
                });
            }
        );
    }

    render() {
        return (
            <div >
                <header>
                     <Navigation />
                     <BannerHeader />
                </header>
                <h3>{this.state.content}</h3>
                <Body />
                <Footer />
            </div>
        );
    }
}
