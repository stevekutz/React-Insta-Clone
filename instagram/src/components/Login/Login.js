import React from 'react';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userName: '',
      passWord: '',
      attempts: 0,   // just for fun later



    }



  }
  // need submitLoginHandler & changeHandler
  loginInputHandler = e => {
   console.log(
         'LOGIN  target name & value in updated handler',
         event.target.name,
         event.target.value
       );

    // use controlled component to manage events
    this.setState({[e.target.name]: e.target.value} );

  };


  loginHandleSubmitHandler  = e => {
    const userName = this.state.userName;
    // e.preventDefault();

    console.log("userName LOGGED!!!! ");
    localStorage.setItem("userName", userName);
    window.location.reload();
};



  render() {
    return(
      <div className = "login-container">
        <h1 className = "loginTitle">Welcome to Instaclone</h1>

        <form className = "loginForm">

          <input
            type = "text"
            placeholder = "enter username"
            name = "userName"
            value = {this.state.userName}
            onChange = {this.loginInputHandler}

          />

        <input
          type = "password"
          placeholder = "enter password"
          name = "passWord"
          value = {this.state.passWord}
          onChange = {this.loginInputHandler}

        />

        <button
          onClick = {this.loginHandleSubmitHandler}
        > Submit
        </>



        </form>

      </div>










    )


  }


}

export default Login;