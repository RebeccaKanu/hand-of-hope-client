
import React, { Component } from "react";
// import appContext from '../../store';
import { reviewService } from "../../services";
import connectedUser2 from "../../assets/images/connectedUser2.jpg";
import Nav from "../../pages/AdminPage/nav";
import axios from "axios";
import "../../../src/assets/stylesheets/adminPage.scss";

export class Testimonies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
  logout() {
    localStorage.clear();
    window.location.href = "/";
  }
  async componentDidMount() {
    try {
      const resAllTestimony = await reviewService.allTestimony();

      this.setState({
        data: resAllTestimony.data,
      });
    } catch (error) {
      console.error(error);
      this.setState({ error: error });
    }
  }

  render() {
    return (
      <div class="all">
        <div class="admin-header">
          <div class="header-text">
            <h3>Back-office</h3>

            <div class="header-greet">
              <span>
                Bonjour Mizou
              </span>

              <a href="/logout" onClick={this.logout} class="logout-btn white">
                <img
                  src={connectedUser2}
                  alt="admin profil picture"
                  class="AdminPhoto"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="admin-sidebar">
          <ul>
          <li>
              <a href="/adminPage" class="white">
                {" "}
                Accueil
              </a>
            </li>
            <li>
              <a href="/articles" class="white">
                {" "}
                Articles
              </a>
            </li>

            <li>
              <a href="/temoignages" class="white">
                Témoignages
              </a>
            </li>
            <li>
              <a href="/logout" onClick={this.logout} class="white">
                Déconnexion
              </a>
            </li>
          </ul>
        </div>

        <div class="center-content">
          <div class="all-border">
            <div class="shows-location">
              <div class="location-text">
                <span class="location">Tous les Témoignages</span>
              </div>
            </div>
          </div>

          {/*  */}
          <div style={{ border: "3px solid green" }}>
            {/* <Nav /> */}

            <section>
              <h1>Tous les commentaires</h1>
              {this.state.data.map((element, index) => {
                return (
                  <div key={index}>
                    <div>
                      <h1>{element.last_name}</h1>
                    </div>
                    <button>
                      <a href={"/votrePetitMot/" + element.id}>Details</a>
                    </button>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div> //
    );
  }
}
