import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { userService } from "../../services/";
// import "../../assets/stylesheets/singInPage.scss";
import appContext from "../../store";
import "../../assets/stylesheets/loginForm.scss";


class ReactLabel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <label htmlFor={this.props.htmlFor}>{this.props.title}</label>;
  }
}

class ReactForm extends React.Component {
  
  // static contextType = appContext;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user_name: "",
      password: "",
      error: null,
      valid: true,
    };
  }

  handleChange = (e) => {
    //récupère les valeurs du champs de formulaire dynamiquement
    const { name, value } = e.target;
 
    this.setState({ [name]: value }); //met à jour email, user_name et password
    console.log("name", value);
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userService.signin(
        // on envoie les values comme paramètre de la fonction qui fait la requête post des éléments email, user_name et password.
        this.state.email, //ici on récupère les valeurs actualisées/mis à jour à chaque tentative de remplissage de l'input/champs de formulaire
        this.state.user_name,
        this.state.password
      );  

       localStorage.setItem('token', response.data.token);
      //  this.context.setAuth(true);
      
       this.props.history.push('/adminPage');

      //   this.context.setAuth(true); => commenté par moi
      //   const { email, user_name, password } = response.data.user;// commenté par moi
      //   this.context.setUserInfos(email, user_name, password); => commenté par moi
      // console.log(this.appContext); => commenté par moi
      //   console.log(this.context); => commenté par moi
    
    } catch (error) {
      console.error(error);
      this.setState({ error:error });
    }
  };

  // componentDidMount() {
  //   if (this.context.isAuth === true) {
  //     this.props.history.push("/");
  //   }
  //   console.log(this.context);
  // }

  render() {

    
    return (

    // <appContext.Consumer>
      // {(store) => (

      <form action="POST"  onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <ReactLabel htmlFor="user_name" title="Username:" />
          <input
            id="formName"
            className="form-input"
            name="user_name"
            type="text"
            value={this.state.user_name}
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <ReactLabel htmlFor="email" title="Email:" />
          <input
            id="formEmail"
            ref="myInput"
            className="form-input"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <ReactLabel htmlFor="password" title="Password:" />
          <input
            id="formPassword"
            ref="myInput"
            className="form-input"
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </fieldset>

        {!this.state.valid && <p className="alert-danger">Please try again </p>}
        <input
          id="formButton"
          className="btn btn-primary"
          type="submit"
          placeholder="Send message"
          onClick={this.handleSubmit}
        />
      </form>

    //   )}
    // {/* </appContext.Consumer> */}

      
    );
  }
}


export default ReactForm;
