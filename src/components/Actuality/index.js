import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import taylor from "../../assets/images/taylor.jpg";
// import "../../assets/stylesheets/actuality.scss";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  backgroundImage: taylor,
    };
  }

  // test = () => {
  //   this.setState({
  //     backgroundImage: taylor,
  //   });

  // }
  render() {
    return (
      <div className="actuality">
        <section>
          <h1>DERNIERE ACTUS</h1>
          <h2>Les dernières actualités de l’association </h2>
          <span></span>
        </section>

        <article>
          <figure>
            <img className="imgcard" src={taylor} alt="taylor" />
            <figcaption>CAMPAGNE DE DISTRIBUTION</figcaption>
            <a href="#">Scolarité</a>
          </figure>
          <h3>TITRE DE L'ARTICLE</h3>
          <p>ÉCRIS PAR MARYSE CONDÉ</p>
          <p>Article de la campagne de distribution</p>
          <button>
            <Link to="#">Lire la suite &nbsp; &rarr;</Link>
          </button>
        </article>

        <article>
          <figure>
            <img className="imgcard" src={taylor} alt="taylor" />
            <figcaption className="figcaption2">
              CAMPAGNE DE DISTRIBUTION
            </figcaption>
            <a className="a2" href="#">
              Enseignement
            </a>
          </figure>
          <div className="box">
            <h3>TITRE DE L'ARTICLE</h3>
            <p>ÉCRIS PAR MARYSE CONDÉ</p>
            <p>Article de la campagne de distribution</p>
            <button>
              <Link to="#">Lire la suite &nbsp; &rarr;</Link>
            </button>
          </div>
        </article>

        <article>
          <figure>
            <img className="imgcard" src={taylor} alt="taylor" />
            <figcaption className="figcaption3">
              CAMPAGNE DE DISTRIBUTION
            </figcaption>
            <a className="a3" href="#">
              Scolarité
            </a>
          </figure>
          <h3>TITRE DE L'ARTICLE</h3>
          <p>ÉCRIS PAR MARYSE CONDÉ</p>
          <p>Article de la campagne de distribution</p>
          <button>
            <Link to="#">
              Lire la suite &nbsp;<em>&rarr;</em>
            </Link>
          </button>
        </article>
      </div>
    );
  }
}
