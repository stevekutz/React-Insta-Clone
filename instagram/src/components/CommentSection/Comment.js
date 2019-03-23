import React from 'react';
import PropTypes from 'prop-types';
// import './commentsection.css';

import {
  CommentContainer,
  CommentH3,
  CommentUserName,
  CommentDate
} from '../StyledComponents/CommentSection_Styled';

const Comment = (props) => {

  return(
    <CommentContainer
      onClick = {() => props.selectedHandler(props.comment)}
    >

      <CommentH3>
        <CommentUserName>{props.comment.username} </CommentUserName>
        {props.comment.text}</CommentH3>
      <CommentDate >  {props.comment.timeVal}</CommentDate>
    </CommentContainer>

  )

};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
    }
  )


};


export default Comment;