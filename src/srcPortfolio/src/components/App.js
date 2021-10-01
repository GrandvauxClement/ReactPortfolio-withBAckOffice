import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navbar";
import BannerHeader from "./BannerHeader";
import Body from "./body/Body";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Login from "./login.component";
import Profile from "./profile.component";
import Home from "./home.component";
function App() {
  return (
            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
  );
}

export default App;
