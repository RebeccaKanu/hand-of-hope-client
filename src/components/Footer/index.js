import React, { Component } from 'react'
import logo from "../../assets/images/logo-hoh.png"
import Nav from "../Nav"
import Contact from '../Contact'
import "../../assets/stylesheets/footer.scss"
function Footer() {
    return <>
        <footer>
            <p>Hands of hope est une association caritative née en 2020</p>
            <img src={logo} alt="logo hoh"/>
            <span></span>
            <div>
                <p>
                    Fais avec amour par NAWAL, JEROME ET REBECCA
                    Tous droits réservés © 2021
                </p>
                <Nav/>
                <Contact/>
            </div>
        </footer>    
    </>;
  }
export default Footer;