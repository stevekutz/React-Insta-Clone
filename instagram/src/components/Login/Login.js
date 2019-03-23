import React from 'react';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      attempts: 0,   // just for fun later

    }

  }
  loginInputHandler = e => {
    // use controlled component to manage events
    this.setState({[e.target.name]: e.target.value} );

  };

  loginHandleSubmitHandler  = e => {
     //e.preventDefault();   // no effect?

    console.log("username LOGGED!!!! ");
    localStorage.setItem("username", this.state.username);
    window.location.reload();  // we reload anyways from submit?
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