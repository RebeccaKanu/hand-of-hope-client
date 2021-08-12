import React, { Component } from "react";
import {AllArticle} from "../../components/AllArticles";
import {AllTestimony} from "../../components/AllTestimony";
import {ArticleForm} from "../../components/ArticleForm"
// import appContext from '../../store';
import axios from 'axios'
import '../../assets/stylesheets/adminPage.scss'


class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <section>
        <h1>Bonjour!</h1>
        <AllTestimony/>
        <AllArticle/>
        <ArticleForm/>
     </section>
    );
  }
}

export default AdminPage;
