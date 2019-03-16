import React from 'react';
import CommentsHeader from './CommentsHeader';
import CommentsHeaderCLASS from './CommentsHeaderCLASS';
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
      searchItem: '',
    };
    this.likesVar = 'likes';   // just for proof of concept
  //  this.likeIncrementHandler = props.likeIncrementHandler;
  }

  componentDidMount () {
 //   console.log('*** CommentSection ComponentDidMount called');
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes
    })

  }


  componentDidUpdate(prevProps, prevState) {
    if( prevState.comments !== this.state.comments) {
      console.log('something has changed');
    }

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

  handleSubmit = event => {
    console.log('++++   handleSubmit says ', event);

    event.preventDefault();
    this.newCommentHandler(event);
  };


  newCommentHandler = () =>  {
    let newComment = {
      comment: this.state.newComment,
      id: Date.now(),
    };

    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment]
      }

    })

  };


  likeIncrementHandler = () => {
    this.setState(prevState => {
      return {likes: prevState.likes + 1 }
    })

  };


  render() {

   // console.log('render shows >>>>>> ', this.state.likes  );

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
         // likeIncrementHandler = {this.likeIncrementHandler}
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

        <form onSubmit = {this.handleSubmit}>
          <input
            className = "addComment"
            placeholder = "add a Comment"
            type = "text"
            name = 'newComment'
            value = {this.state.newComment}
            onChange = {this.updateHandler}

          />
          <button type = "submit"> Submit </button>

        </form>

      </div>


    )


  }



}

export default CommentSection;