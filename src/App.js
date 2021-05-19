import logo from "./logo.svg";
import "./App.css";
import HomePage from '../src/pages/Homepage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from '../src/components/Footer'

function App() {
  return <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer/>
    </Router>
  </div>;
}

export default App;


