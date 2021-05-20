import React, { Component } from "react";
import logo from "../../assets/images/logo-hoh.png";
//import Nav from "../Nav";
import Contact from "../Contact";
import "../../assets/stylesheets/footer.scss";

export default class index extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       style: {
  //         width: "40px",
  //         height: "40px",
  //         border: "5px solid black",
  //       },
  //     };
  //   }

  render() {
    return (
      <>
        <footer>
          <div>
            <p>Hands of hope est une association caritative née en 2020</p>
            <img src={logo} alt="logo hoh" />
          </div>

          <span></span>

          <div className="copyrightNav">
            <p>
              Fait avec amour par NAWAL, JEROME ET REBECCA Tous droits réservés
              © 2021
            </p>
            <ul className="Nav_links">
          <li>
            <a href="/contact"></a>
          </li>
          <li>
            <a href="/actualite"></a>
          </li>
          <li>
            <a href="/don"></a>
          </li>
          <li>
            <a href="/nous"></a>
          </li>
          <li>
            <a href="/sengager"></a>
          </li>
        </ul>
          </div>
          <Contact />
        </footer>
      </>
    );
  }
}
