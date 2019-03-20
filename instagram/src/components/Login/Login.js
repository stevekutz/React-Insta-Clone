import React from 'react';
import PropTypes from 'prop-types';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: '',
      attempts: 0,   // just for fun later

    }

  }
  // need submitLoginHandler & changeHandler
  loginInputHandler = e => {
   console.log(
         'LOGIN  target name & value in updated handler',
         e.target.name,
         e.target.value
       );

    // use controlled component to manage events
    this.setState({[e.target.name]: e.target.value} );

  };


  loginHandleSubmitHandler  = e => {
    const username = this.state.username;
    // e.preventDefault();

    console.log("username LOGGED!!!! ");
    localStorage.setItem("username", username);
    window.location.reload();
};


  render() {
    return(
      <div className = "login-container">
        <h1 className = "loginTitle">Welcome to Instagram</h1>

        <form className = "loginForm">

          <input
            type = "text"
            placeholder = " enter username"
            name = "username"
            value = {this.state.username}
            onChange = {this.loginInputHandler}
            className = "loginFormat"
          />

        <input
          type = "password"
          placeholder = " enter password"
          name = "password"
          value = {this.state.password}
          onChange = {this.loginInputHandler}
          className = "loginFormat"
        />

        <button
          className = "loginButton"
          onClick = {this.loginHandleSubmitHandler}
        > Login
        </button>



        </form>

      </div>










    )


  }


}

export default Login;