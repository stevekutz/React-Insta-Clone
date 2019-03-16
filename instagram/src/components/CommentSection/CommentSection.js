import React from 'react';
import CommentsHeader from './CommentsHeader';
import Comment from './Comment';
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
      comments: this.props.comments,
      likes: this.props.likes
    })

  }


  render() {

    return(
      <div className = "commentsSection-container">
        <CommentsHeader
          likes = {this.state.likes}
          likesVar = {this.likesVar}
        />

        {this.state.comments.length > 0 ?
          (
            this.state.comments.map( (comment, i) => (
              <Comment
                comment = {comment}
                key = {i}

              />
              )







            )
          )
          :
          (
            <h2> loading comments </h2>


          )





        }



      </div>




    )





  }






}

export default CommentSection;