import React from 'react';
import Login from '../Login/Login';
import './authentication.css';


const withAuthenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        logged_IN: false

      }

    }

    componentDidMount() {
      console.log("Authenticate CDM called");

      if(!localStorage.getItem('userName')) {
        this.setState({logged_IN: false});
      } else {
        this.setState({logged_IN: true});
      }

    }

    render() {


        if(this.state.logged_IN) return <App/>;

        return <Login />


    }

  };

export default withAuthenticate;



