import React, { Component } from 'react'
// import "../../assets/stylesheets/testimony.scss";



export default class index extends Component {
    // constructor(props){
    //    super(props);
    //    this.state = {
    //     sectionLegende: "",
    //     sectionTitle: "",
    //     //
    //     boxTitle: "",
    //     boxTitle2: "", 
    //     boxTitle3: "", 
    //     boxParagraphe: ""
    //   };
    // }
  
    render() {
        return (
            <div className="testimony">

                <h2>Que pensez-vous de nous?</h2>
                <h1>TÉMOIGNAGES</h1>

                <div className="box pink">
                    <h3>Fally</h3>
                    <h4>Bénificiarire</h4>
                    <h5>De Kinkasha (ZAIRE)</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium libero vel e3it veh</p>
                </div>
                <div className="box green">
                    <h3>Fally</h3>
                    <h4>Bénificiarire</h4>
                    <h5>De Kinkasha (ZAIRE)</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium libero vel elit veh</p>
                </div>
                <div className="box blue">
                    <h3>Fally</h3>
                    <h4>Bénificiarire</h4>
                    <h5>De Kinkasha (ZAIRE)</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium libero vel elit veh</p>
                </div>
            </div>
        )
    }
}
