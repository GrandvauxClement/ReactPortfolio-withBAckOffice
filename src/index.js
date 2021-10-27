/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// core components
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";
import Home from "./srcPortfolio/src/components/home.component";
import Login from "./srcPortfolio/src/components/login.component";
import Profile from "./srcPortfolio/src/components/profile.component";

ReactDOM.render(
    <GoogleReCaptchaProvider
        useRecaptchaNet
        reCaptchaKey="6Le7cM0cAAAAAGa6uojXAsn5821fzC6ezXfqPLMZ"
        scriptProps={{ async: true, defer: true, appendTo: 'body'}}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Profile} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </GoogleReCaptchaProvider>,
  document.getElementById("root")
);
