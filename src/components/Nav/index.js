import React, {Component} from 'react'
import {BrowserRouter as Link} from "react-router-dom"
import "../../assets/stylesheets/nav.scss"
  

class index extends Component {


    state = {  }
    render() {
        return (
            <div className= "LinkNav">
                <Link to="">&larr;</Link>
                <ul>
                    <li>Contact</li>
                    <li>Actualité</li>
                    <li>Faire un don</li>
                    <li>Qui sommes nous ?</li>
                    <li>S'engager</li>
                </ul>
            </div>
        );
    }
}

export default index;
