import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import {dummyData} from '../../dummy-data';
import '../../App.css';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dumdata: [],
      searchTerm: '',
    };

    this.loadingMSG = 'Loading Data';


  }

  componentDidMount() {
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
    this.setState({[event.target.name]: event.target.value});

  };

  render() {
    //  console.log('**** render called');
    //  console.log('dumdata is ', this.state.dumdata);


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