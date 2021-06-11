import React ,{ useState, Component} from "react";
import HomePage from "../src/pages/Homepage";
import Sengager from "../src/pages/Sengager";
import AboutUs from "../src/pages/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Actuality from "../src/components/Actuality";
import Login from "../src/pages/Authenticate/SigninPage";
import AdminLogin from "../src/pages/Authenticate/adminLogin";

import AdminPage from "../src/pages/AdminPage";
import TestimonyForm from "../src/pages/TestimonyForm";

import  AuthenticatedRoute  from '../src/components/AuthenticatedRoute';
import { hasAuthenticated } from './services/AuthApi';
import Auth from "./context/Auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
      <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }} > 
    <div className="App">
      <Router>
        <Nav />
        <Switch>
         
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sengager" component={Sengager} />
          <Route exact path="/aPropos" component={AboutUs} />
          <Route exact path="/dernierArticles" component={Actuality} />
          <Route exact path="/votremessage" component={TestimonyForm}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={HomePage} />
          {/* <Route exact path="/adminPage" component={AdminPage}/> */}
          <Route exact path="/adminlogin" component={AdminLogin}/>
          <AuthenticatedRoute exact path="/adminPage" component={AdminPage}/>

        </Switch>
        <Footer />
      </Router>

      {/* BEFORE UPDATE */}
      {/* <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sengager" component={Sengager} />
          <Route exact path="/aPropos" component={AboutUs} />
          <Route exact path="/dernierArticles" component={Actuality} />
          <Route exact path="/adminlogin" component={Login} />
          <Route exact path="/logout" component={HomePage} />
          <Route exact path="/adminPage" component={AdminPage} />
        </Switch>
        <Footer />
      </Router> */}
    </div>
    // </Auth.Provider>
  );
}

export default App;
