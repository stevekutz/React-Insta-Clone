import React from 'react';
import PropTypes from 'prop-types';
import heart from '../img/heart-icon.png';
import chat from '../img/Bubble_chat.png';
import './commentsection.css';

const CommentsHeader = (props) => {

  return(
    <div className = "commentsHeader-container">
      <div className = "commentsHeaderIMG">
        <img
          className = "commentsImg"
          src = {heart}
          alt = "heartIMG"
          onClick = { props.likeIncrementHandler }
        />
        <img
          className = "commentsImg"
          src = {chat}
          alt = "Bubble_chat"/>
      </div>
      <h3 className = "commentsHeaderLikes"> {props.likes} {props.likesVar} </h3>
    </div>
  )

};


export default CommentsHeader;