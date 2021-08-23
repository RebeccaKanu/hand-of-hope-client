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
import TestimonyForm from "../src/components/TestimonyForm";
import VisitorArticleDetails from "./components/VisitorArticleDetails";
import { AllVisitorArticle } from "./pages/AllArticleVisitor";
//Stripe
import { StripeContainer } from "./components/Don/StripeContainer";

//Admin
// import AdminPage from "./pages/AdminPage/indexPause";
import AdminPage from "./pages/AdminPage/index";
import { Articles } from "./components/AllArticles";
import { Testimonies } from "./components/AllTestimony";
import ArticleDetails from "./pages/ArticleDetails";
import { TestimonyDetails } from "./pages/TestimonyDetails";
import { ArticleUpdateForm } from "./pages/ArticleUpdateForm";

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
        <Switch>
          {/*Visitor*/}

          <Route exact path="/" component={HomePage} />
          {/* <Nav /> */}
          <Route exact path="/logout" component={HomePage} />
          <Route exact path="/sengager" component={Sengager} />
          <Route exact path="/aPropos" component={AboutUs} />
          <Route exact path="/adminlogin" component={Login} />
          <Route exact path="/votrePetitMot" component={TestimonyForm} />
          {/* <Route exact path="/article/:article_id" component={VisitorArticleDetails}/> */}
          <Route exact path="/allArticles" component={AllVisitorArticle} />
          {/*Admin*/}
          <PrivateRoute path="/adminPage" component={AdminPage} />
          <PrivateRoute path="/articles" component={Articles} />
          <PrivateRoute path="/temoignages" component={Testimonies} />
          <PrivateRoute
            path="/votrePetitMot/:id"
            component={TestimonyDetails}
          />
          <PrivateRoute
            path="/adminArticleDetails/:article_id"
            component={ArticleDetails}
          />
          <PrivateRoute
            path="/article/:article_id"
            component={ArticleUpdateForm}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
