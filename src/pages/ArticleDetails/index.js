import React, { Component } from "react";
import { ArticleService } from "../../services";

export default class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
  //
  handleClick = async () => {
    const articleId = this.props.match.params.article_id;
    console.log("titi", articleId);
    this.props.history.push("/article/" + articleId);
   
  };

  //

  handleSuppressClick = async () => {
    const articleId = this.props.match.params.article_id;

    console.log("titi", articleId);
    // this.props.history.push("/article/" + articleId);
    try{
      await ArticleService.deleteOneArticle(articleId);
       this.props.history.push("/article/" + articleId);
    }
    catch(error){
      this.setState({
        error: error
      });

    }
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

        <button onClick={this.handleSuppressClick}>suprimer</button>
        <button onClick={this.handleClick}>modifier</button>
      </div>
    );
  }
}
