import React, { Component } from "react";
import "../../assets/stylesheets/footer.scss";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import logo from "../../assets/images/logo-hoh.png";
import Contact from "../Contact";

export default class index extends Component {

  render() {
    return (
      <>
        <footer>
          <div>
            <p>Hands of hope est une association caritative née en 2020</p>
            <img src={logo} alt="logo hoh" />
          </div>

          <span></span>
          <div>
            <div className="copyrightNav">
              <p>
                Fait avec amour par NAWAL, JEROME ET REBECCA <span>Tous droits réservés
                © 2021</span>
              </p>
            </div>
            <div>
              <ul className="Nav_links">
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
          </div>
          <Contact/>
        </footer>
      </>
    );
  }
}
