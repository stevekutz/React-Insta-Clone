import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import {dummyData} from '../../dummy-data';


import '../../App.css';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      dumdata: [],
      searchTerm: '',
    };

    this.loadingMSG = 'Loading Data';

  }

  componentDidMount() {
    this.setState({dumdata: dummyData})

  }


  updateHandler = event => {
    this.setState({[event.target.name]: event.target.value});

  };

  render() {

    return (
      <div className="main-app">

        <SearchBar
          name="searchTerm"
          value={this.state.searchTerm}
          updateHandler={this.updateHandler}
        />

        <PostContainer
          name="searchTerm"
          searchTerm={this.state.searchTerm}
          data={dummyData}
          loadingMSG={this.loadingMSG}
        />

      </div>
    )

  }
}

export default PostsPage;