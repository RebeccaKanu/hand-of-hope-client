import React, {  useEffect, useState, useContext } from "react";
import Auth from "../../context/Auth";
import "../../assets/stylesheets/loginForm.scss";
// import { render } from "@testing-library/react";






const AdminLogin = ({ history }) => {
    const { isAuthenticated } = useContext (Auth);

    const[user, setUser ] = useState({
        email: "",
        user_name: "",
        password: "",
        error: null,
        valid: true
    })

    const handleChange = (currentTarget) => {
        
        const { name, value } = currentTarget;
        
        setUser({...user , [name]: value})
    };

    const handleSubmit =  (e) => {
        e.preventDefault();

        // console.group();
        // console.log(user);
        // console.groupEnd();
        
        }

    
        //    localStorage.setItem('token', response.data.token);
        //    this.props.history.push('/adminPage');

        useEffect(() =>{
            if(isAuthenticated) {

                history.replace('/adminPage');
            }
        }, [history, isAuthenticated]);
        
  
      
        
    return (
        <form action="POST" className="react-form" onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="user_name" title="Username:" />
          <input
            id="formName"
            className="form-input"
            name="user_name"
            type="text"
            placeholder="Entrer votre pseudos"
            // value={this.state.user_name}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="email" title="Email:" />
          <input
            id="formEmail"
            ref="myInput"
            className="form-input"
            name="email"
            type="text"
            placeholder="Entrer votre email"
            // value={this.state.email}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="password" title="Password:" />
          <input
            id="formPassword"
            ref="myInput"
            className="form-input"
            name="password"
            type="text"
            placeholder="Entrer votre mot de passe"
            // value={this.state.password}
            onChange={handleChange}
          />
        </fieldset>

        <input
          id="formButton"
          className="btn btn-primary"
          type="submit"
          placeholder="Send message"
          onClick={handleSubmit}
        />
      </form>
    );
    
    
};
  

export default AdminLogin;
