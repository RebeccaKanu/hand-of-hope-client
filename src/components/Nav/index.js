import React, { Component } from "react";
import "../../assets/stylesheets/nav.scss";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
//   // Link,
// } from "react-router-dom";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //on initialise le menu avec des strings vides car initialement il ne s'affiche pas tant que l'on a pas cliqué sur le burger menu
      contact: "",
      actualite: "",
      don: "",
      nous: "",
      sengager: "",
      //on initialise un compteur pour gérer l'affichage conditionnellement c'est à dire au premier(0) clique afficher le menu au deuxième le caher ainsi de suite
      compteur: 0,
      n: 1, //n va s'incrément de 1 à chaque clique,
    };
  }

  /************************/

  showAdress = () => {
    this.setState({
      contactAdressPart1: "5 allée de la Houdiarde",
      contactAdressPart2: "VEMARS 95470",
    });
  };

  hideAdress = () => {
    this.setState({
      contactAdressPart1: "",
      contactAdressPart2: "",
      contactHeight: 0,
      contactwidth: 0,
    });
  };

  /************************/

  //on remplie le menu qui était initialement vide pour que lorsque l'on clique les éléments du menu s'affiche
  showMenu = () => {
    this.setState({
      contact: "Contact",
      actualite: "Actualité",
      don: "Faire un don",
      nous: "Qui sommes nous ?",
      sengager: "S'engager",
      // style
      width: "80vw", //80vw
      backgroundColor: "white",
      opacity: 0.6,
      height: "97vh",
      transformTop: "rotate(45deg) translate(3px, 4px)",
      transformBottom: "rotate(-45deg) translate(3px, -4px)",
      background: "transparent",
    });
  };

  //on revide le menu pour qu'au clique pour le femer le menu disparaisse
  hideMenu = () => {
    this.setState({
      contact: "",
      actualite: "",
      don: "",
      nous: "",
      sengager: "",
      // opacity: 0.2,
      // transition: "all 0.1s ease-out",
      height: 0,
      //ce qui dans la fonction compteur
      width: 0,
      backgroundColor: "",
      opacity: 0,
      transition: "all 0.8s ease-out",
      transformTop: "",
      transformBottom: "",
      background: "black",
      color: "black",
      // backgroundColor: "transparent",//?
      boxShadow: "10px 5px 5px black",
      contactAdress: "",
    });
  };

  /************************/

  //on créer un compteur pour qu'au premier(0) clique le menu s'affiche au second(1) il disparaissent au troisième(2) il apparaissent etc...
  burgerMenuCompteur = () => {
    this.setState({
      compteur: this.state.compteur + this.state.n,
    });

    if (this.state.compteur % 2) {
      //au deuxième clique cacher le menu => deuxième clique = compteur à 2
      //autrement dit si le compteur = chiffre impair cacher le menu (soit 1 pour le deuxième clique, 3 pour le troisième clique etc...) sachant que le deuxième clique sera forcément pour fermer le menu
      this.hideMenu();
      this.hideAdress();
    } else {
      //au premier clique afficher le menu => premier clique = compteur à 1
      //autrement dit si compteur = chiffre pair afficher le menu
      this.showMenu();
    }
  };
  adressCompteur = () => {
    this.setState({
      compteur: this.state.compteur + this.state.n,
    });

    if (this.state.compteur % 2) {
      //au deuxième clique cacher le menu => deuxième clique = compteur à 2
      //autrement dit si le compteur = chiffre impair cacher le menu (soit 1 pour le deuxième clique, 3 pour le troisième clique etc...) sachant que le deuxième clique sera forcément pour fermer le menu
      this.showAdress();
    } else {
      //au premier clique afficher le menu => premier clique = compteur à 1
      //autrement dit si compteur = chiffre pair afficher le menu

      this.hideAdress();
    }
  };
  /************************/

  // componentDidMount() {
  //   // si la width de la window est > ou égale à 768 alors affiche la nav en display flex
  //   if (window.innerWidth >= 768) {
  //     this.setState({
  //       contact: "Contact",
  //       actualite: "Actualité",
  //       don: "Faire un don",
  //       nous: "Qui sommes nous ?",
  //       sengager: "S'engager",
  //       display: "flex",
  //       paddingLeft: "25px",
  //       marginLeft: "29px",
  //       fontSize: "0.8rem",
  //       marginTop: "46px",
  //       position: "",
  //     });
  //   }
  //   //le else est déjà gérer dans le component nav
  // }

  render() {
    return (
      <div
        className="BurgerLink"
        style={{
          backgroundColor: this.state.backgroundColor,
        }}
      >
        {/*au clique du menu burger soit le menu s'affiche (if) soit il
        disparait(else)*/}

        <ul
          style={{
            width: this.state.width,
            height: this.state.height,
            // display: this.state.display,
            // marginLeft: this.state.marginLeft,
            // marginTop: this.state.marginTop,
            // position: this.state.position,
          }}
        >
          {/* <div> */}
          {/*changement dynamique des va this.hideMenu();leurs des liens de nav en alternant entre string vide et valeur exemple au clique on passe de lien invisible c'est à dire "" à des liens qui deviennent visible comme "contact"*/}
          <li
          // style={{
          //   paddingLeft: this.state.paddingLeft,
          //   fontSize: this.state.fontSize,
          // }}
          >
            <a href="/actualite">{this.state.actualite}</a>
          </li>
          <li
          // style={{
          //   paddingLeft: this.state.paddingLeft,
          //   fontSize: this.state.fontSize,
          // }}
          >
            <a href="/don">{this.state.don}</a>
          </li>
          <li
          // style={{
          //   paddingLeft: this.state.paddingLeft,
          //   fontSize: this.state.fontSize,
          // }}
          >
            <a href="/nous">{this.state.nous}</a>
          </li>
          <li
          // style={{
          //   paddingLeft: this.state.paddingLeft,
          //   fontSize: this.state.fontSize,
          // }}
          >
            <a href="/sengager">{this.state.sengager}</a>
          </li>

          {/* <div className="contactContainer"> */}
          <li
            className="contacts"
            // style={{
            //   paddingLeft: this.state.paddingLeft,
            //   fontSize: this.state.fontSize,
            // }}
          >
            <a href="#" onClick={this.adressCompteur}>
              {this.state.contact}
            </a>
            <div className="contactPart1">
              <p>{this.state.contactAdressPart1}</p>
            </div>
            <div className="contactPart2">
              <p>{this.state.contactAdressPart2}</p>
            </div>
          </li>
          {/* </div> */}
        </ul>
        <div className="burgerMenu" onClick={this.burgerMenuCompteur}>
          <div style={{ transform: this.state.transformTop }}></div>
          <div style={{ background: this.state.background }}></div>
          <div style={{ transform: this.state.transformBottom }}></div>
        </div>
      </div>
    );
  }
}
// test
export default index;
