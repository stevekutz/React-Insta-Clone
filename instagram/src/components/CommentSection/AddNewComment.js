import React from 'react';
import PropTypes from 'prop-types';
import './commentsection.css';

class AddNewComment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [],
      value: '',
    }
  }

  componentDidMount () {
    this.setState({
      comments: this.props.comments,
    })
  }


  updateHandler = event => {
    // use controlled component to manage events
    this.setState({[event.target.name]: event.target.value} );
  };

  handleSubmit = event => {
   // event.persist();
    event.preventDefault();
    this.addNewComment(event);
  };


  addNewComment = (event) =>  {
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




  render() {
    console.log('render shows commments ======> ', this.state.comments );
    return(
      <form onSubmit = {this.handleSubmit}>
        <label> ===>COMMENT:
          <input
            className = "addComment"
            placeholder = "add a Comment"
            type = "text"
            name = 'newComment'
            value = {this.state.newComment}
            onChange = {this.updateHandler}

          />
        </label>

        <input type = "submit" value = "===>SUBMIT COMMMENT"/>


      </form>



    )

  }


}

export default AddNewComment;