import React from "react";
import HomePage from "../src/pages/Homepage";
import Sengager from "../src/pages/Sengager";
import AboutUs from "../src/pages/AboutUs";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Actuality from "../src/components/Actuality";
import Login from "../src/pages/Authenticate/SigninPage";
import AdminPage from "../src/pages/AdminPage";
import TestimonyForm from "../src/components/TestimonyForm";

//Admin
import {Articles} from "./components/AllArticles";
import {Testimonies} from "./components/AllTestimony";
import ArticleDetails from "./pages/ArticleDetails";
import {TestimonyDetails} from "./pages/TestimonyDetails";
import {ArticleUpdateForm} from "./pages/ArticleUpdateForm";


function PrivateRoute(props) {
  const token = localStorage.getItem("token");
  if (token) {
    return <Route exact path={props.path} component={props.component} />;
  }
  return <Route render={() => <Redirect to="/" />} />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
           {/*Visitor*/}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/logout" component={HomePage} />
          <Route exact path="/sengager" component={Sengager} />
          <Route exact path="/aPropos" component={AboutUs} />
          <Route exact path="/derniersArticles" component={Actuality} />
          {/* <Route exact path="/adminArticleDetails/:article_id" component={ArticleDetails} /> */}
          <Route exact path="/adminlogin" component={Login} />
          <Route exact path="/votrePetitMot"component={TestimonyForm}/>
          
          {/*Admin*/}
          <PrivateRoute path="/adminPage" component={AdminPage} />
          <PrivateRoute path="/articles" component={Articles} />
          <PrivateRoute path="/temoignages" component={Testimonies} />
          <PrivateRoute path="/votrePetitMot/:id" component={TestimonyDetails}/>
          <PrivateRoute path="/adminArticleDetails/:article_id" component={ArticleDetails} />
          <PrivateRoute path="/article/:article_id" component={ArticleUpdateForm}/>
       

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;