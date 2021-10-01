import React, {Component} from "react";
import AuthService from "../services/auth.service";
import {Redirect} from "react-router-dom"
export default class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    render() {
        const {redirectUrl} = "/home"
        const {currentUser} = this.state;
        if (!currentUser){
            return <Redirect to={redirectUrl}/>

        } else {
            return (
                <div className="container">
                    <header className="jumbotron">
                        <h3>
                            <strong> {currentUser}</strong> Profile
                        </h3>
                    </header>
                    <p>
                        <strong>Id : </strong>{" "}
                        {currentUser.id}
                    </p>
                    <p>
                        <strong>Email : </strong>{" "}
                        {currentUser.email}
                    </p>
                    <strong>Authorities : </strong>
                    <ul>
                        {currentUser.roles &&
                        currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                    </ul>
                </div>
            );
        }

    }
}