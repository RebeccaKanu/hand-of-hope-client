import React, { Component } from "react";
import "../../assets/stylesheets/header.scss";
import Header1 from "../../assets/images/Header1.jpg";
import Header2 from "../../assets/images/Header2.jpg";
import logo from "../../assets/images/logo_hoh_officiel.jpeg";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width:"100px",
      height:"100px",
    };
  }

  render() {
    return (
      <header>
        <article>
          <div className="logo">
              <img src={logo}  style={{width: this.state.width, height: this.state.height}}/>
              <p>Ensemble pour un monde meilleur.</p>
          </div>
          <p className="tagline">
            <em className="titleTagline">Hand of Hope</em> <br />
            rassemble des hommes et des femmes de cœur pour relever différents
            défis. Nous sommes tous Hand of Hope ! <br />
          </p>
          <p>
            "Une formidable aventure humaine, basée sur la générosité,
            l’énergie, une synergie de compétences et le don de soi.
          </p>
          <a href="/About" className="enSavoirPlus">
            En savoir plus <em>&rarr;</em>
          </a>
        </article>  
        <section>
          <img className="imgHeader" src={Header2} alt="taylor" />
          <p>Ensemble pour un monde meilleur</p>
          <a className="facebookLink" href="facebookPage">retrouvez-nous sur facebook</a>   
        </section>
      </header>
    );
  }
}
