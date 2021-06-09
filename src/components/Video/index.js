import React, { Component } from 'react'
import "../../assets/stylesheets/Video.scss"
// import ytb from "https://www.youtube.com/embed/BAMwbICU7G4" 


//nav





export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        };
    }
   

    render() {
        return (
            <div className="video">
                <h1>Les dernière actualités de l’association </h1>
                 <h2>VIDEO EXPLICATIVE DU CONTEXTE</h2>
                 <br/>
                <iframe controls  src="https://www.youtube.com/embed/BAMwbICU7G4"
                 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe> 
                 <br/>
                 <span></span>
                 
            </div>
        );
    }
}

