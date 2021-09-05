import React, { Component } from "react";
import "../../assets/stylesheets/header.scss";
import Header1 from "../../assets/images/Header1.jpg";
import Header2 from "../../assets/images/Header2.jpeg";
import logo from "../../assets/images/logo_hoh_officiel.jpeg";
import Headerprotablett from "../../assets/images/Header-tablette-pro.jpg";

import facebook from "../../assets/images/facebook.svg";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "100px",
      height: "100px",
    };
  }

  render() {
    return (
      <header>
        <article>
          {/* <div className="logo">
            <img
              src={logo}
              // style={{ width: this.state.width, height: this.state.height}}
            />
            <p>Ensemble pour un monde meilleur</p>
          </div> */}
          <br />
          <p className="tagline">
            <em className="titleTagline">Hand of Hope</em>
            {/* <h1>Hand of Hope</h1> */}
            <br />
            rassemble des hommes et des femmes de cœur pour relever différents
            défis. Nous sommes tous Hand of Hope ! <br />
          </p>
          <p className="taglineDesktop">
            <em className="titleTaglineDesktop">Hand of Hope</em>
            <span>HAND OF HOPE</span>
            <br />
            c'est une formidable aventure humaine, basée sur la générosité,
            l’énergie, une synergie de compétences et le don de soi.
          </p>

          {/* <a href="/About" className="enSavoirPlus">
            En savoir plus <em>&rarr;</em>
          </a> */}
        </article>
        <section className="HomepageImage">
          <img className="imgHeader" src={Header2} alt="taylor" />
           {/* <p
            style={{
              writingMode: "vertical-rl",
              transform: "unset",
            }}
            className="facebookLegend"
          >
            RETROUVEZ NOUS SUR{" "}
          </p>
        
          <a className="facebookLink" href="facebookPage">
            <img
              src={facebook}
              style={{
                writingMode: "vertical-rl",
                transform: "unset",
              }}
              alt="facebook logo"
            />
            
          </a>  */}
        </section>
      
      </header>
    );
  }
}
