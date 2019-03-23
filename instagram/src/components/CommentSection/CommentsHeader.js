import React from 'react';
import PropTypes from 'prop-types';
import heart from '../img/heart-icon.png';
import chat from '../img/Bubble_chat.png';

import {
  CommentHeaderContainer,
  CommentHeaderImage,
  CommentImage,
  CommentHeaderLikes
} from '../StyledComponents/CommentSection_Styled';


const CommentsHeader = (props) => {
  return(
    <CommentHeaderContainer>
      <CommentHeaderImage>
        <CommentImage
          src = {heart}
          alt = "heartIMG"
          onClick = { props.likeIncrementHandler }
        />
        <CommentImage
          src = {chat}
          alt = "Bubble_chat"/>
      </CommentHeaderImage>
      <CommentHeaderLikes> {props.likes} {props.likesVar} </CommentHeaderLikes>
    </CommentHeaderContainer>
  )

};


CommentsHeader.propTypes = {
  likes: PropTypes.number.isRequired,
  likesVar: PropTypes.string
};

export default CommentsHeader;