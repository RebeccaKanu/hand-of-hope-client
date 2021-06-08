import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import taylor from "../../assets/images/taylor.jpg";
import mainArticleOne from "../../assets/images/bon_prenatale_2.jpeg";
import mainArticleTwo from "../../assets/images/orphelinat_3.jpeg";
import mainArticleThree from "../../assets/images/distribution_club_2.jpeg";
import "../../assets/stylesheets/actuality.scss";
import { lastArticle } from "../../services/";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "280px",
      height: "400px",
      data: [], //data intialisé à vide car il n'y a pas encore de requête
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await lastArticle.getLastArticle();

      this.setState({
        data: response.data,
      });

      console.log("RESPONSE", response.data);
    } catch (e) {
      this.setState({
        error: "erreur server",
      });
    }
  }

  render() {
    return (
      <div className="actuality">
        <section>
          <h1>DERNIERES ACTUS</h1>
          <h2>Les dernières actualités de l’association </h2>
          <span></span>
        </section>

        <div>
          <article>
            <figure>
              <img
                className="imgcard"
                src={mainArticleOne}
                alt="taylor"
                style={{ width: this.state.width, height: this.state.height }}
              />
              <figcaption>CAMPAGNE DE DISTRIBUTION</figcaption>
              <a className="a1" href="#">
                Scolarité
              </a>
            </figure>
            <h3>TITRE DE L'ARTICLE</h3>
            <p>Article de la campagne de distribution</p>
            <button className="button1">
              <Link to="#">Lire la suite &nbsp; &rarr;</Link>
            </button>
          </article>

          <article>
            <figure>
              <img
                className="imgcard"
                src={mainArticleTwo}
                alt="taylor"
                style={{ width: this.state.width, height: this.state.height }}
              />
              <figcaption className="figcaption2">
                CAMPAGNE DE DISTRIBUTION
              </figcaption>
              <a className="a2" href="#">
                Enseignement
              </a>
            </figure>
            <h3>TITRE DE L'ARTICLE</h3>
            <p>Article de la campagne de distribution</p>
            <button className="button2">
              <Link to="#">Lire la suite &nbsp; &rarr;</Link>
            </button>
          </article>

          <article>
            <figure>
              <img
                className="imgcard"
                src={mainArticleThree}
                alt="taylor"
                style={{ width: this.state.width, height: this.state.height }}
              />
              <figcaption className="figcaption3">
                CAMPAGNE DE DISTRIBUTION
              </figcaption>
              <a className="a3" href="#">
                Scolarité
              </a>
            </figure>
            <h3>TITRE DE L'ARTICLE</h3>
            <p>Article de la campagne de distribution</p>
            <button className="button3">
              <Link to="#">
                Lire la suite &nbsp;<em>&rarr;</em>
              </Link>
            </button>
          </article>
        </div>
      </div>
    );
  }
}
