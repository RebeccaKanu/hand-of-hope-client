import logo from "./logo.svg";
import "./App.css";
import HomePage from '../src/pages/Homepage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  </div>;
}

export default App;
