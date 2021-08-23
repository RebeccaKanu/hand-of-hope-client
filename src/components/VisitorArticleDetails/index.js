import React, { Component } from "react";
import { ArticleService } from "../../services";

export default class VisitorArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }

  async componentDidMount() {
    this.GetAnArticle();
  }
  //
  GetAnArticle = async () => {
    const articleId = this.props.match.params.article_id;

    console.log("ID", articleId);

    try {
      const getAnArticle = await ArticleService.VisitorGetOneArticle(articleId);
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

      </div>
    );
  }
}
