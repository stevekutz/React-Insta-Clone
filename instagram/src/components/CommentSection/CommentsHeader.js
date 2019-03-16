import React from 'react';
import heart from '../img/heart-icon.png';
import chat from '../img/Bubble_chat.png';



import './commentsection.css';

const CommentsHeader = (props) => {
   console.log('CommentsHeader props  ', props);

  return(
    <div className = "commentsHeader-container">
      <div className = "commentsHeaderIMG">
        <img
          src = {heart}
          alt = "heartIMG"
          onClick = { props.likeIncrementHandler }
        />
        <img src = {chat} alt = "Bubble_chat"/>
      </div>
      <h3 className = "commentsHeaderLikes"> {props.likes} {props.likesVar} </h3>
    </div>
  )




};


export default CommentsHeader;