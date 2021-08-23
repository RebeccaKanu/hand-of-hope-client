import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import taylor from "../../assets/images/taylor.jpg";
import mainArticleOne from "../../assets/images/bon_prenatale_2.jpeg";
import mainArticleTwo from "../../assets/images/orphelinat_3.jpeg";
import mainArticleThree from "../../assets/images/distribution_club_2.jpeg";
import "../../assets/stylesheets/actuality.scss";
import { ArticleService } from "../../services";
// import { threadId } from "../../../../Backend/src/db";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "280px",
      height: "400px",
      data: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await ArticleService.getLastArticle();

      this.setState({
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="actuality">
        <section>
          <h1>DERNIERES ACTUS</h1>
          <h2>Les dernières actualités de l’association </h2>
        </section>
        <div className="allBox">
          {this.state.data.map((element, index) => {
            return (
              <div key={index}>
                <article>
                  <figure className="article">
                    <img
                      className="imgcard actualityHover"
                      // src={mainArticleOne}
                      src={element.img}
                      alt="taylor"
                      style={{
                        width: this.state.width,
                        height: this.state.height,
                      }}
                    />
                   
                    {/* <a className="a1" href="#">
                      {element.tags}
                    </a> */}
                  </figure>

                  <h3>{element.title}</h3>
                  <a href={'/article/' + element.article_id}><p>{element.resume_article}</p></a>

                  {/* <button className="button1">
                    <a href={'/article/' + element.article_id}>Lire la suite &nbsp; &rarr;</a>
                  </button> */}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
