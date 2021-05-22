import HomePage from "../src/pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
        


import Footer from "../src/components/Footer";
import Video from "../src/components/Video";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
