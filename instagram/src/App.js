import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import styled from 'styled-components';

import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

const Main_App = styled.div`
* {
  box-sizing: border-box;
}

.main-app{
  max-width: 880px;
  margin: .5% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 62.5%;
  /*  font-family: Benchnine;
    font-family: Karla;
    font-family: Lato;
    font-family: Hind;
     Lobster
     Pacifico
     Roboto */
  font-family: Comfortaa;

}

`;


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
