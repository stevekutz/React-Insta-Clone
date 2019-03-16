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
      searchTerm: '',
    };

    this.loadingMSG = 'Loading Data';


  }

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

  /*
    handleSubmit = event => {
      console.log('++++   handleSubmit says ', event);

      event.preventDefault();
      this.newCommentHandler(event)    };

    /*
      newCommentHandler = () =>  {
        let newComment = {
          comment: this.state.newComment,
          id: Date.now(),
        };

        this.setState(prevState => {
          return {
            comments: [...prevState.comments, newComment]


        })

      };

      /*
      likeIncrementHandler = () => {
        console.log('>>>>>>>>>>>>> like handler fired !!!! ');

        this.setState(prevState => {
          return {likes: prevState.likes + 1 }
        })

      };
      */


  render() {
  //  console.log('**** render called');
  //  console.log('dumdata is ', this.state.dumdata);


    return (
      <div className="main-app">
          <SearchBar
            name = "searchTerm"
            value = {this.state.searchTerm}
            updateHandler = {this.updateHandler}
          />
          <PostContainer
              name = "searchTerm"
              value = {this.state.searchTerm}
              data = {dummyData}
              loadingMSG = {this.loadingMSG}

          />

      </div>
    );
  }
}

export default App;
