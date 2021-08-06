import React, { Component } from "react";
import {AllArticle} from "../../components/AllArticles";
import {AllTestimony} from "../../components/AllTestimony";
// import appContext from '../../store';
import axios from 'axios'
import '../../../src/assets/stylesheets/adminPage.scss'


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
     {/* <FormulaireArticle/> */}
     </section>
    );
  }
}

export default AdminPage;
