import React, { Component } from "react";
// import appContext from '../../store';
import axios from "axios";
import { ArticleService } from "../../services";
import { ArticleForm } from "../ArticleForm";
import Nav from "../../pages/AdminPage/nav";
import connectedUser2 from "../../assets/images/connectedUser2.jpg";
import "../../assets/stylesheets/adminPage.scss";

export class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      width: "280px",
      height: "400px",
    };
  }
  logout() {
    localStorage.clear();
    window.location.href = "/";
  }
  async componentDidMount() {
    this.GETALLARTICLE();
  }
  GETALLARTICLE = async () => {
    try {
      const getAllArticle = await ArticleService.getAllArticle();

      this.setState({
        data: getAllArticle.data,
      });
      //
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      //
      <div class="all">
        <div class="admin-header">
          <div class="header-text">
            <h3>Back-office</h3>

            <div class="header-greet">
              <span>
                <i class="fa">&#xf007;</i> Bonjour Mizu
              </span>

              <a href="/logout" onClick={this.logout} class="logout-btn white">
                <img
                  src={connectedUser2}
                  alt="admin profil picture"
                  class="AdminPhoto"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="admin-sidebar">
          <ul>
            <li>
              <a href="/adminPage" class="white">
                {" "}
                Accueil
              </a>
            </li>
            <li>
              <a href="/articles" class="white">
                {" "}
                Articles
              </a>
            </li>

            <li>
              <a href="/temoignages" class="white">
                Témoignages
              </a>
            </li>
          </ul>
        </div>

        <div class="center-content">
          <div class="all-border">
            <div class="shows-location">
              <div class="location-text">
                <span class="location">Tous les Articles</span>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="actuality">
            <div className="allBox">
              {this.state.data.map((element, index) => {
                return (
                  <div key={index}>
                    <article className="AdminArticle">
                      <figure className="article">
                        <a href={"/adminArticleDetails/" + element.article_id}>
                          <img
                            className="imgcard"
                            // src={mainArticleOne}
                            src={element.img}
                            alt="taylor"
                            style={{
                              width: this.state.width,
                              height: this.state.height,
                            }}
                          />
                        </a>
                      </figure>

                      <h4>
                        <a
                          href={"/adminArticleDetails/" + element.article_id}
                          className="titleAdmin"
                        >
                          {element.title}
                        </a>
                      </h4>

                      <button className="AdminDetails">
                        <a href={"/adminArticleDetails/" + element.article_id}>
                          Contenu de l'article
                        </a>
                      </button>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
