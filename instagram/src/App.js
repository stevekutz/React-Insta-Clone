import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import {dummyData} from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dumdata: [],

    }



  }

  componentDidMount () {
    console.log('*** ComponentDidMount called');
    this.setState({dumdata: dummyData})

  }




  render() {
    console.log('**** render called');
    console.log('dumdata is ', this.state.dumdata);


    return (
      <div className="main-app">
          <SearchBar />
          <PostContainer
              data = {dummyData}


          />

      </div>
    );
  }
}

export default App;
