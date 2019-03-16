import React from 'react';
import CommentsHeader from './CommentsHeader';
import CommentsHeaderCLASS from './CommentsHeaderCLASS';
import Comment from './Comment';
import "./commentsection.css";



class CommentSection extends React.Component {
  constructor(props) {
 //   console.log('CommentSection props ', props);


    super(props);
    this.state = {
      comments: [],
      newComment: '',
      likes: 0,

    };
    this.likesVar = 'likes';   // just for proof of concept

  }

  componentDidMount () {
 //   console.log('*** CommentSection ComponentDidMount called');
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes
    })

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


  likeIncrementHandler = () => {
    this.setState(prevState => {
      return {likes: prevState + 1 }
    })

  };


  render() {

    console.log('>>>>>> ', this.state.likes  );

    return(
      <div className = "commentsSection-container">

        <CommentsHeader
          likes = {this.state.likes}
          likesVar = {this.likesVar}
          likeIncrementHandler = {this.likeIncrementHandler}
        />

        <CommentsHeaderCLASS
          likes = {this.state.likes}
          likesVar = {this.likesVar}
          likeIncrementHandler = {this.likeIncrementHandler}
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