import React, { Component } from "react";
import Nav from "../../components/Nav";
import "../../assets/stylesheets/homepage.scss";
import Actuality from "../../components/Actuality";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Testimony from "../../components/Testimony";
import Video from "../../components/Video";

export default class index extends Component {
  render() {
    return (
      <div className="homepage">
        {/* <Nav/> */}
        <Header />
        <Actuality />
        <Video />
        <Testimony />
        <a href="/api/votrePetitMot">Témoignez!</a>
      </div>
    );
  }
}
