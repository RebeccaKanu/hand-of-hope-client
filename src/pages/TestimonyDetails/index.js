import React, { Component } from "react";
// import appContext from '../../store';
import { reviewService } from "../../services"
import axios from "axios";
import "../../../src/assets/stylesheets/adminPage.scss";

export class TestimonyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
  handleClick = async () => {
    const testimonyId = this.props.match.params.id;

    console.log("testi id", testimonyId);
    // this.props.history.push("/article/" + articleId);
    try{
      await reviewService.deleteOneTestimony(testimonyId);
      // this.props.history.push("/article/");
    }
    catch(error){
      this.setState({
        error: error
      });

    }
  };
  async componentDidMount() {
    this.GetOneTestimony();
  }
  GetOneTestimony = async () => {
    const testimonyId = this.props.match.params.id;

    // console.log("idd", articleId);

    try {
      const getAnArticle = await reviewService.getOneTestimony(testimonyId);
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
      <div style={{ border: "3px solid green" }}>
        <section>

          <h1>Bonjour</h1>
          {this.state.data.map((element, index) => {
            return (
              <div key={index}>
                <div>
                  <h1>{element.last_name}</h1>
                  <p>{element.role}</p>
                  <p>{element.opinion}</p>
                </div>
                <button onClick={this.handleClick}>supprimer</button>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}