import React from 'react';
import CommentsHeader from './CommentsHeader';
import PropTypes from 'prop-types';
import CommentsHeaderCLASS from './CommentsHeaderCLASS';
import Comment from './Comment';
import moment from 'moment';
import "./commentsection.css";


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
      likes: 0,
      searchTerm: '',
      username: '',

    };
    this.likesVar = 'likes';
  }

  componentDidMount () {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes,
      newComment: this.state.newComment,   // NOT  newComment: this.props.newComment
      searchTerm: this.props.searchTerm,
      user: localStorage.getItem('username'),   //    Get LOCAL STORAGE username
    })

  }

  componentDidUpdate(prevProps, prevState) {
    if( prevProps.searchTerm !== this.props.searchTerm) {
      this.setState(
         {searchTerm: this.props.searchTerm}
      )
    }
  }

  selectedHandler = (comment) => {
    console.log('SELECTED COMMENT:', comment);


  };


  updateHandler = event => {
    // use controlled component to manage events
    this.setState({[event.target.name]: event.target.value} );

  };

  handleSubmit = event => {
    event.persist();
    event.preventDefault();
    this.addNewComment(event);
  };

  addNewComment = (event) =>  {
    let newCommentItem = {
      // username: " webDude",
      username: this.state.user,   // MAGIC happens here!!!
      text: this.state.newComment,
      id: Date.now(),
      selected: false,
      timeVal: moment().format('MMMM Do YYYY'),
    };


   if(this.state.newComment !== undefined){
      this.setState(prevState => {
        return {
          comments: [...prevState.comments, newCommentItem],
          newComment: '',
        };
      });
    }
  };


  likeIncrementHandler = () => {
    this.setState(prevState => {
      return {likes: prevState.likes + 1 }
    })

  };


  // *******  search methods ***
  // Ryan's cool way using RegEx for lazy searches
  // this.state.comments.filter(comment => new RegExp(this.state.searchTerm).test(comment.username))

  // my way with include, first character in searchTerm doesnot always match up with first char in username
  // this.state.comments.filter(comment => comment.username.includes(this.state.searchTerm))

  render() {
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
        />


        {this.state.comments.length > 0
          ?
          (this.state.comments.filter(comment => new RegExp(this.state.searchTerm).test(comment.username))
                              .map( (comment, i) =>
              (
              <Comment
                comment = {comment}
                commentSelected = {false}
                key = {i}
                selectedHandler = {this.selectedHandler}
              />
              )
            )
          )
          :
          (<h2> loading comments </h2>)
        }

        <form
          className = "newCommentForm"
          onSubmit = {this.handleSubmit}
        >

            <input
              className = "addComment"
              placeholder = "Add a Comment"
              type = "text"
              name = 'newComment'
              value = {this.state.newComment}
              onChange = {this.updateHandler}
            />

        </form>

      </div>

    )
  }

}

export default CommentSection;