import React from 'react';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
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

      if(!localStorage.getItem('username')) {
        this.setState({logged_IN: false});
      } else {
        this.setState({logged_IN: true});
      }

    }

/*
 if(this.state.logged_IN) return <App/>;

        return <Login />

 */


    render() {

        if(this.state.logged_IN) return <App/>;

        return <Login />


    }

  };

export default withAuthenticate;



