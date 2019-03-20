import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/* import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import {dummyData} from './dummy-data';*/
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  /*
  constructor() {
    super();
    this.state = {
      dumdata: [],
      searchTerm: '',
    };

    this.loadingMSG = 'Loading Data';


  }
  */
  /*
  componentDidMount () {
  //  console.log('*** App ComponentDidMount called');
    this.setState({dumdata: dummyData})

  }


  updateHandler = event => {
    console.log(
      '******** target name & value in updated handler',
      event.target.name,
      event.target.value
    );

    // use controlled component to manage events
    this.setState({[event.target.name]: event.target.value} );

  };

*/
  render() {
    return (
      <div className="main-app">
          <PostsPage />
      </div>
    )
  }
}

export default Authenticate(App);
