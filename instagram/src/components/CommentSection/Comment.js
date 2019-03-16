import React from 'react';
import PropTypes from 'prop-types';
import './commentsection.css';


const Comment = (props) => {
  // console.log('Comment props  ', props);

  return(
    <div className = "comment-container">
      <h3 className = "comment">
        <span className = "userName">{props.comment.username} </span>
              {props.comment.text}</h3>
    </div>

  )

};


export default Comment;