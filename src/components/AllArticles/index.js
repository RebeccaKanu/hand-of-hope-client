import React, { Component } from "react";
// import appContext from '../../store';
import axios from "axios";
import { ArticleService } from "../../services";
import { ArticleForm } from "../ArticleForm";
import "../../assets/stylesheets/adminPage.scss";

export class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
  async componentDidMount() {
    this.GETALLARTICLE();
  }
  GETALLARTICLE = async () => {
    try {
      const getAllArticle = await ArticleService.getAllArticle();
   
      this.setState({
        data: getAllArticle.data,
      })
      //
     
    } catch (error) {
 
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div style={{ border: "3px solid pink" }}>
        <section>
          <h1>Tous les articles</h1>

          {this.state.data.map((element, index) => {
            return (
              <div key={index}>
                <article>
                  <h2><a href={'/adminArticleDetails/' + element.article_id}>{element.title}</a></h2>
                  <p><a href={'/adminArticleDetails/' + element.article_id}>{element.resume_article}</a></p>
                  <p><a href={'/adminArticleDetails/' + element.article_id}>{element.content_article}</a></p>
                  <p><a href={'/adminArticleDetails/' + element.article_id}>{element.author_article}</a></p>
                </article>
              </div>
            );
          })}
        </section>

        <section>
          <h1>Poster un article</h1>
              <ArticleForm/>
        </section>
      </div>
    );
  }
}
