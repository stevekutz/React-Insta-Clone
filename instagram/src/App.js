import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {

  render() {
    return (
      <div className="main-app">
          <PostsPage />
      </div>
    )
  }
}

export default Authenticate(App);
