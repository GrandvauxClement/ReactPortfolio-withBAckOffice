import React, { Component} from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import TextField from "@material-ui/core/TextField";
import logo from "../assets/logo/monLogoBlancFondTransparent.png";
import PropTypes from "prop-types";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/admin");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        ( error.response &&
                          error.response.data &&
                          error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <div className="my-bg-blue">
            <div className="container" style={{height:100+'vh'}}>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-4 d-flex flex-column">
                        <img src={logo} className='img-fluid mx-auto' alt='logo grandvaux clement' style={{maxHeight: 200+'px'}}/>
                             <Form onSubmit={this.handleLogin} ref={c => { this.form = c;}}>
                                 <TextField variant="filled" onBlur={this.onChangeUsername}
                                            onChange={this.onChangeUsername}
                                            name="username" required={true} value={this.state.username}
                                            label="username" autoComplete="none"
                                            style={{width:25+'vw'}} type="text" className="my-2"
                                 />
                                 <TextField variant="filled" onBlur={this.onChangePassword}
                                            onChange={this.onChangePassword}
                                            name="password" required={true} value={this.state.password}
                                            label="password" autoComplete="none"
                                            style={{width:25+'vw'}} type="password" className="my-2"
                                 />

                                 <div className="form-group d-flex justify-content-center">
                                     <button className="btn btn-primary btn-block" disabled={this.state.loading}>
                                         {this.state.loading && (
                                             <span className="spinner-border spinner-border-sm"></span>
                                         )}
                                         <span>Login</span>
                                     </button>
                                 </div>
                                 {this.state.message && (
                                     <div className="form-group">
                                         <div className="alert alert-danger" role="alert">
                                             {this.state.message}
                                         </div>
                                     </div>
                                 )}
                                 <CheckButton style={{display: "none"}}
                                              ref={c => {
                                                  this.checkBtn = c;
                                              }}
                                 />
                             </Form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
Login.propTypes = {
    history: PropTypes.any
}

