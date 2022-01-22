import React, {Component} from "react";
import AuthService from "../services/auth.service";
import {Redirect} from "react-router-dom"
import Admin from "../../../layouts/Admin";
export default class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    render() {
        const {redirectUrl} = "/"
        const {currentUser} = this.state;
        if (!currentUser){
            return <Redirect to={redirectUrl}/>

        } else {
            return (
                <Admin />
            );
        }

    }
}
