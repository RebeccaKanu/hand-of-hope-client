import React, { Component, useContext, useState } from "react";
import { userService } from '../../services/'
import { BrowserRouter as Link } from "react-router-dom";
import { ArticleService } from "../../services/";
import appContext from '../../store';


//const token = JSON.parse(localStorage.getItem('auth')).token
//  function () => {}
// const response = await /api/articles(token);
// if( token){

// } else{

// }
// const store = React.useContext(appContext);

export default class index extends Component {

  static contextType = appContext;

  constructor(props){
    super(props);
    this.state = {
    //  token: this.parse(localStorage.getItem('auth')).token ,
    data: [], //data intialisé à vide car il n'y a pas encore de requête
    error: null,
   };
   
 }

 async componentDidMount() {
   if(!this.context.isAuth){
     console.log("utilisateur non authentifié")
   }

   else{

    try {
      const response = await ArticleService.getAllArticle();
  
      this.setState({
        data: response.data,
      });
  
      console.log("RESPONSE", response.data);
    } catch (error) {
      console.log(error);
    }

   }
  
}
 

  render() {
    return (
      <div>
        <h1>Bonjour!</h1>

        {this.state.data.map((element, index) => {
          return (
            <div key={index}>

              <h2>{element.title}</h2>
            
            </div>
          );
        })}


      </div>
    );
  }
}

