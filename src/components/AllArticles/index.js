import React, { Component } from "react";
// import appContext from '../../store';
import axios from "axios";
import "../../../src/assets/stylesheets/adminPage.scss";

export class AllArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
  async componentDidMount() {
    try {
      const resAllArticle = await axios.get(
        `http://localhost:4000/api/articles`
      );
      this.setState({
        data: resAllArticle.data,
      });
      console.log("article response", resAllArticle.data);
    } catch (error) {
      console.error(error);
      this.setState({ error: error });
    }
  }

  render() {
    return (
      <div style={{ border: "3px solid pink" }}>
        <section>
          <h1>Tous les articles</h1>
        </section>

        {this.state.data.map((element, index) => {
          return (
            <div key={index}>
              <article>
                <button>Ajouter</button>
                <button>suprimer</button>
                <button>modifier</button>
                <h2>{element.title}</h2>
                <p>{element.resume_article}</p>
                <p>{element.content_article}</p>
                <p>{element.author_article}</p>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}


