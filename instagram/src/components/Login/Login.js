import React from 'react';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userName: '',
      passWord: '',
      attempts: 0,



    }
    // need submitLoginHandler & changeHandler



  }

  render() {
    return(
      <h1>LOGIN FORM</h1>
    )


  }


}

export default Login;