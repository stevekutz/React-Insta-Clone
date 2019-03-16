import React from 'react';
import CommentsHeader from './CommentsHeader';
import "./commentsection.css";



class CommentSection extends React.Component {
  constructor(props) {
    console.log('CommentSection props ', props);


    super(props);
    this.state = {
      comments: [],
      newComment: '',
      likes: 0,



    };
    this.likesVar = 'likes';   // just for proof of concept

  }


  componentDidMount () {
    console.log('*** CommentSection ComponentDidMount called');
    this.setState({
      comments: this.props.dataItem.comments,
      likes: this.props.dataItem.likes
    })

  }


  render() {

    return(
      <div className = "commentsSection-container">
        <CommentsHeader
          likes = {this.state.likes}
          likesVar = {this.likesVar}
        />




      </div>




    )





  }






}

export default CommentSection;