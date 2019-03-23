import React from 'react';
import PropTypes from 'prop-types';
// import './postcontainer.css';

import {
  PostContainerDiv,
  PostContainerHeaderDiv,
  HeaderIMG,
  UserName,
  PostImage,
  BodyImage

} from '../StyledComponents/PostContainer_Styled';

const PostContainerHeader = (props) => {
  return (

    <PostContainerDiv
         key = {props.user_name}>
      <PostContainerHeaderDiv
        key = {props.user_name}
      >
        <HeaderIMG
          src = {props.thumbnail_URL}
          alt = "imageURL"/>
        <UserName> {props.user_name}</UserName>
      </PostContainerHeaderDiv>

      <PostImage>
        <BodyImage
          src = {props.image_URL}
          alt = "imageURL"
        />
      </PostImage>
    </PostContainerDiv>

  )
};

PostContainerHeader.propTypes = {
  user_name: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string
};

export default PostContainerHeader;