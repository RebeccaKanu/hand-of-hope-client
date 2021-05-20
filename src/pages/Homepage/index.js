import React, { Component } from "react";
import Nav from "../../components/Nav/";
import "../../assets/stylesheets/homepage.scss";
import Actuality from "../../components/Actuality"
export default class index extends Component {
  render() {
    return (
      <div className="homepage">
        <Nav/>
        <Actuality/>
      </div>
    );
  }
}
