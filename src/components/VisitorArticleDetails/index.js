import React, { Component } from "react";
import { ArticleService } from "../../services";
import Nav from "../Nav/index";
import "../../assets/stylesheets/articleDetails.scss";

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
      <div>
        <section>
          {/* <Nav style={{ marginTop: "-205px" }} /> */}
          {this.state.data.map((element, index) => {
            return (
              <div key={index}>
                <article className="articleDetailsContainer">
                  <div>
                    <h2 className="visitorTitle">{element.title}</h2>
                    <hr
                      size="7"
                      width="90%"
                      color="#ff7e92"
                      border="1px solid black"
                      padding-bottom="10px"
                    />
                    {/* <strong><p className="pStylingVisitor">{element.resume_article}</p></strong> */}
                    <p className="pStylingVisitor">{element.content_article}</p>
                    <em>
                      <p className="pStylingVisitor">
                        {element.author_article}
                      </p>
                    </em>
                  </div>

                  <div>
                    <img
                      src={element.img}
                      className="imgcard actualityHover imgVisitor"
                    />
                  </div>
                </article>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
