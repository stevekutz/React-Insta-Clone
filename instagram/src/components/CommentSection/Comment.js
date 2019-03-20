import React from 'react';
import PropTypes from 'prop-types';
import './commentsection.css';


const Comment = (props) => {

  return(
    <div
      className = "comment-container"
      onClick = {() => props.selectedHandler(props.comment)}
    >

      <h3 className = "comment">
        <span className = "userName">{props.comment.username} </span>
              {props.comment.text}</h3>
      <h5 className = "commentDate" >  {props.comment.timeVal}</h5>
    </div>

  )

};


export default Comment;