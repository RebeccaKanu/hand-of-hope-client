import React, { Component } from "react";
import "../../assets/stylesheets/footer.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../assets/images/logo-hoh.png";
import Contact from "../Contact";

export default class index extends Component {
  constructor(props){
    super(props)
      this.state={
       fontSize: "16px",
       width: "60%",
       paddingTop:"5%",
       contactFont: "16px",
      }
  }
  // componentWillUnmount(){
    test = () => {
      console.log("BONJOUR");
    }
    // if(window.innerWidth >= 768) {
    //   this.setState({
    //     fontSize:"16px",
    //     width: "70%",
    //     border: "3px solid red"
    //   });
    // } 
  // }
  
  // componentDidMount () {
  //   window.addEventListener('load', this.handleLoad);
  // }

  // window.addEventListener('load', this.handleLoad);
  

  componentDidMount () {
   
    if(window.innerWidth >= 768) {
      this.setState({
        fontSize:"29px",
        width: "70%",
        border: "3px solid red"
      });
    } 
    else if(window.innerWidth = 540) {
      this.setState({
        fontSize:"20px",
        width: "70%",
        border: "3px solid red"
      });
    } 

  };
  
// this.fontSize:
//   }

  // variable qui ferait reference au style exemple fontSize mais sans unitée 
      
  
  render() {


    return (
      <>
      
        <footer>
          <div>
            <p style= {{fontSize: this.state.fontSize}}>Hands of hope est une association caritative née en 2020</p>
            <img src={logo} alt="logo hoh" />
          </div>
          <div>
            <div className="copyright">
              <p style= {{fontSize: this.state.fontSize}}>
                Fait avec amour par NAWAL, JEROME ET REBECCA <br />
                Tous droits réservés © 2021
              </p>
            </div>
            <ul style= {{fontSize: this.state.fontSize}} className="Nav">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/actualite">Actualitée</Link>
              </li>
              <li>
                <Link to="/don">Faire un don</Link>
              </li>
              <li>
                <Link to="/nous">Qui sommes-nous ?</Link>
              </li>
              <li>
                <Link to="/sengager">S'engager</Link>
              </li>
            </ul>
          </div>
          <Contact style={{fontSize:this.state.fontSize, width:"60%", paddingTop:"5%",}} li={{ fontFamily: "Muli-Bold"}} />
        </footer>
      </>
    );
  }
}
// font-size="1.2em" 
