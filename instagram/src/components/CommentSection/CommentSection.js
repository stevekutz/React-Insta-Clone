import React from 'react';
import CommentsHeader from './CommentsHeader';
import CommentsHeaderCLASS from './CommentsHeaderCLASS';
import Comment from './Comment';
import AddNewComment from './AddNewComment';
import moment from 'moment';
import "./commentsection.css";



class CommentSection extends React.Component {
  constructor(props) {
    console.log('CommentSection props ', props);


    super(props);
    this.state = {
      comments: [],
      newComment: '',
      likes: 0,
      searchTerm: '',
    };
    this.likesVar = 'likes';   // just for proof of concept
  //  this.likeIncrementHandler = props.likeIncrementHandler;
  }

  componentDidMount () {
 //   console.log('*** CommentSection ComponentDidMount called');
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes,
      newComment: this.props.newComment,
      searchTerm: this.props.searchTerm,
    })

  }


  componentDidUpdate(prevProps, prevState) {
    if( prevProps.searchTerm !== this.props.searchTerm) {
      console.log('search has changed to ', this.state.searchTerm);
      this.setState(
         {searchTerm: this.props.searchTerm}
      )
    }
  }

  selectedHandler = (event) => {
    alert('text chosen: ', event.value);



  };


  updateHandler = event => {
    console.log(
      '##### target name & value in updated handler',
      event.target.name,
      event.target.value
    );

    // use controlled component to manage events
    this.setState({[event.target.name]: event.target.value} );

  };

  handleSubmit = event => {
    event.persist();
    console.log(
      '##### event in handleSubmit',
      event
    );
    event.preventDefault();
    this.addNewComment(event);


  };


  addNewComment = (event) =>  {
    console.log('++++   addNewComment state ', event);
    let newCommentItem = {
      username: " webDude",
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

   console.log('render shows commments >>>>>> ', this.state.comments );

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



        {this.state.comments.length > 0 ?
          (
            this.state.comments.filter(comment => new RegExp(this.state.searchTerm).test(comment.username))
                                .map( (comment, i) => (
              <Comment
                comment = {comment}
                key = {i}
                selectedHandler = {this.selectedHandler}
              />
              )
            )
          )
          :
          (
            <h2> loading comments </h2>
          )
        }

        <form
          className = "newCommentForm"
          onSubmit = {this.handleSubmit}
        >
          {
/* changing value to defaultValue gets rid of warning */
  /* side-effect is that previous text persists instead of */
  /* displaying placeholder => 'Add a Comment'
  * */}

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