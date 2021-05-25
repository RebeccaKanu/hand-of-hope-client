import React, { Component } from "react";
import "../../assets/stylesheets/header.scss";
import Header1 from "../../assets/images/Header1.jpg";
import Header2 from "../../assets/images/Header2.jpg";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <img className="imgHeader" src={Header2} alt="taylor" />
        <article>
          <p>
            "Une formidable aventure humaine, basée sur la générosité,
            l’énergie, une synergie de compétences et le don de soi.
          </p>
          <p className="tagline">
            <em>Hand of Hope</em> <br />
            rassemble des hommes et des femmes de cœur pour relever différents
            défis. Nous sommes tous Hand of Hope ! <br />
            <a href="/About" className="enSavoirPlus">
              En savoir plus <em>&rarr;</em>
            </a>
          </p>
        </article>
      </header>
    );
  }
}
