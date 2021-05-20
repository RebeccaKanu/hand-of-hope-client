import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import taylor from "../../assets/images/taylor.jpg";

export default class index extends Component {
//   constructor(){
//       super();
// //   this.state{
// //      backgroundImage: ""
// //   };
//   }
  render() {
    return (
      <div className="actuality">
        <figure>
          <div className="imgcard"
                // style={{
                //     backgroundImage: `url({taylor})`
                // }}
          ></div>
          <img className="img" src={taylor} alt="taylor" /> 
          <a href="#">Scolarité</a>
          <h2>TITRE DE L'ARTICLE</h2>
          <p>ÉCRIS PAR MARYSE CONDÉ</p>
          <p>Article de la campagne de distribution</p>
          <figcaption>CAMPAGNE DE DISTRIBUTION</figcaption>
          <button>
            <Link to="#">Lire la suite</Link>
          </button>
        </figure>

        <figure>
          <figcaption></figcaption>
        </figure>

        <figure>
          <figcaption></figcaption>
        </figure>
      </div>
    );
  }
}
