import React, { Component } from "react";
import Nav from "../../components/Nav/index";

export default class ContactAssociation extends Component {
  render() {
    return (
      <div class="sengagerContainer">
        <Nav />
        <h1>NOUS CONTACTER</h1>

        <div className="ligne"></div>

        <p className="ContactP">
          <strong>Victoire Bilongo</strong>
          <br />
          36 rue veymars
          <br />
          95500<br />
          0709675534
        </p>
      </div>
    );
  }
}
