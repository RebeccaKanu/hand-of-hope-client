import React, { Component } from "react";
import { ArticleService } from "../../services";
import { useHistory } from "react-router-dom";
import connectedUser2 from "../../assets/images/connectedUser2.jpg";
import "../../assets/stylesheets/test.scss";
//

//
export default class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }

  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  //
  handleClick =  () => {
    const articleId = this.props.match.params.article_id;
    
    this.props.history.push("/article/" + articleId);
    //
    // try {
    //   this.props.history.push("/article/" + articleId);
    // } catch (error) {
    //   this.setState({
    //     error: error,
    //   });
    // }
  };

  //

  handleSuppressClick = async () => {
    const articleId = this.props.match.params.article_id;
    this.props.history.push("/articles/");
    try {
      await ArticleService.deleteOneArticle(articleId);
      // localStorage.setItem("token", ArticleService.data.token);////////////////////
      console.log("history", this.props);
     
    } catch (error) {
      this.setState({
        error: error,
      });
    }
    // window.location.reload();
  };
  //
  async componentDidMount() {
    this.GetAnArticle();
  }
  //
  GetAnArticle = async () => {
    const articleId = this.props.match.params.article_id;

    try {
      const getAnArticle = await ArticleService.getOneArticle(articleId);
      //
      //
      this.setState({
        data: getAnArticle.data,
      });
      //
    } catch (error) {
      this.setState({ error: error });
    }
  };
  render() {
    return (
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
              <a href="/articles" class="white">
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
                <span class="location">Détails d'un article</span>
              </div>
            </div>
          </div>

          {/* <ArticleForm /> */}
          <div style={{ border: "3px solid pink" }}>
            <section>
              {this.state.data.map((element, index) => {
                return (
                  <div key={index}>
                    <article>
                      <h2>{element.title}</h2>
                      <p>{element.resume_article}</p>
                      <p>{element.content_article}</p>
                      <p>{element.author_article}</p>
                    </article>
                  </div>
                );
              })}
            </section>

            <button onClick={this.handleSuppressClick}>suprimer</button>
            <button onClick={this.handleClick}>modifier</button>
          </div>
        </div>
      </div>
    );
  }
}
