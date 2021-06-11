import React, { Component } from "react";
import appContext from '../../store';

//const token = JSON.parse(localStorage.getItem('auth')).token
//  function () => {}
// const response = await /api/articles(token);
// if( token){

// } else{

// }
const store = React.useContext(appContext);

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = {
    //  token: this.parse(localStorage.getItem('auth')).token ,
     error: null,
   };
 }
 

  render() {
    return (
      <div>
        <h1>Bonjour!</h1>
        {store.isAuth && <Nav />}
      </div>
    );
  }
}

