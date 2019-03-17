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

  incrementHandler = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    });

  };


  componentDidUpdate(prevProps, prevState) {
    if( prevProps.searchTerm !== this.props.searchTerm) {
      console.log('search has changed to ', this.state.searchTerm);
      this.setState(
         {searchTerm: this.props.searchTerm}
      )
    }
  }



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
    console.log('++++   handleSubmit says ', event);

    event.preventDefault();
    this.addNewComment();
  };


  addNewComment = () =>  {
    let newCommentItem = {
      username: " webDude",
      text: this.state.newComment,
      id: Date.now(),
    };

    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newCommentItem],
        newComment: '',

      };

    });
  };





  likeIncrementHandler = () => {
    this.setState(prevState => {
      return {likes: prevState.likes + 1 }
    })

  };


  render() {

   console.log('render shows >>>>>> ', this.state.searchTerm );

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
          <label> COMMENT:
            <input
              className = "addComment"
              placeholder = "add a Comment"
              type = "text"
              name = 'newComment'
              value = {this.state.newComment}
              onChange = {this.updateHandler}

            />
          </label>


        </form>

      </div>


    )


  }



}

export default CommentSection;