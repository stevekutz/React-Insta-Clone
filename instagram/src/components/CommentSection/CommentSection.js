import React from 'react';
import CommentsHeader from './CommentsHeader';
import "./commentsection.css";
import {dummyData} from "../../dummy-data";


class CommentSection extends React.Component {
  constructor(props) {
    console.log('CommentSection props ', props);


    super(props);
    this.state = {
      comments: [],
      newComment: '',
      count: 0,



    }


  }


  componentDidMount () {
    console.log('*** CommentSection ComponentDidMount called');
    this.setState({comments: this.props.dataItem.comments})

  }


  render() {

    return(
      <div className = "commentsSection-container">
        <CommentsHeader
          props = {this.state.comments}
        />




      </div>




    )





  }






}

export default CommentSection;