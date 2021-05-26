import React, { Component } from "react";
import "../../assets/stylesheets/footer.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../assets/images/logo-hoh.png";
import Contact from "../Contact";

export default class index extends Component {
  constructor(props){
    super(props)
      this.state={
        fontSize: "1.2em",
       
      }
  }

  render() {
    return (
      <>
        <footer>
          <div>
            <p>Hands of hope est une association caritative née en 2020</p>
            <img src={logo} alt="logo hoh" />
          </div>
          <div>
            <div className="copyright">
              <p>
                Fait avec amour par NAWAL, JEROME ET REBECCA <br />
                Tous droits réservés © 2021
              </p>
            </div>
            <ul className="Nav">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/actualite">Actualitée</Link>
              </li>
              <li>
                <Link to="/don">Faire un don</Link>
              </li>
              <li>
                <Link to="/nous">Qui sommes-nous ?</Link>
              </li>
              <li>
                <Link to="/sengager">S'engager</Link>
              </li>
            </ul>
          </div>
          <Contact style={{ fontSize: '1.7em', width:"60%", paddingTop:"5%",}} li={{ fontFamily: "Muli-Bold"}} />
        </footer>
      </>
    );
  }
}
// font-size="1.2em" 
