import React, { Component } from "react";
// import appContext from '../../store';
import axios from "axios";
import Nav from "../../components/Nav/index"
import { ArticleService } from "../../services";
import Footer from "../../components/Footer";
import "../../assets/stylesheets/adminPage.scss";

export class AllVisitorArticle extends Component {
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
    this.GETALLARTICLE();
  }
  GETALLARTICLE = async () => {
    try {
      const getAllArticle = await ArticleService.getAllVisitorArticle();
   
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

        <Nav/>
        <section>
          <h1>Tous les articles</h1>

          {this.state.data.map((element, index) => {
            return (
              <div key={index}>
                <article>
                  <h2><a href={'/article/' + element.article_id}>{element.title}</a></h2>
                  <a href={'/article/' + element.article_id}>
                      <img
                        className="imgcard actualityHover"
                        src={element.img}
                        alt="taylor"
                        style={{
                          width: this.state.width,
                          height: this.state.height,
                        }}
                      />
                    </a>
                  <p><a href={'/article/' + element.article_id}>{element.resume_article}</a></p>
                </article>
              </div>
            );
          })}
        </section>
        <Footer/>
      </div>
    );
  }
}
