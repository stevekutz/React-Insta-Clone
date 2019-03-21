import React from 'react';
import PropTypes from 'prop-types';
// import './commentsection.css';

import {
  CommentContainer,
  Comment_h3,
  Comment_UserName,
  CommentDate
} from '../StyledComponents/CommentSection_Styled';

const Comment = (props) => {

  return(
    <CommentContainer
      onClick = {() => props.selectedHandler(props.comment)}
    >

      <Comment_h3>
        <Comment_UserName>{props.comment.username} </Comment_UserName>
        {props.comment.text}</Comment_h3>
      <CommentDate >  {props.comment.timeVal}</CommentDate>
    </CommentContainer>

  )

};


export default Comment;