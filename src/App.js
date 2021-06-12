import React ,{ useState, Component} from "react";
import HomePage from "../src/pages/Homepage";
import Sengager from "../src/pages/Sengager";
import AboutUs from "../src/pages/AboutUs";
import { BrowserRouter as Router, Route, Switch , Redirect } from "react-router-dom";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Actuality from "../src/components/Actuality";
import Login from "../src/pages/Authenticate/SigninPage";
import AdminPage from "../src/pages/AdminPage";


function PrivateRoute (props) {
  const token = localStorage.getItem('token');
  if (token){
    return <Route exact path ={props.path} component = {props.component} />
  }
  return <Route render = {()=> <Redirect to = "/"/>}/>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sengager" component={Sengager} />
          <Route exact path="/aPropos" component={AboutUs} />
          <Route exact path="/dernierArticles" component={Actuality} />
          <Route exact path="/adminlogin" component={Login} />
          <Route exact path="/logout" component={HomePage} />
          <PrivateRoute path="/adminPage" component={AdminPage}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
