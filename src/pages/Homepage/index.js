import React, { Component } from "react";
import Nav from "../../components/Nav/";
import "../../assets/stylesheets/homepage.scss";

export default class index extends Component {
  render() {
    return (
      <div className="homepage">
        <Nav />
      </div>
    );
  }
}
