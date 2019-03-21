import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';

import {
  PostContainer_div,
  PostContainerHeader_div,
  HeaderIMG,
  UserName,
  PostImage,
  BodyImage

} from '../StyledComponents/PostContainer_Styled';

const PostContainerHeader = (props) => {

  return (

    <PostContainer_div
         key = {props.user_name}>
      <PostContainerHeader_div
        key = {props.user_name}
      >
        <HeaderIMG
          src = {props.thumbnail_URL}
          alt = "imageURL"/>
        <UserName> {props.user_name}</UserName>
      </PostContainerHeader_div>

      <PostImage>
        <BodyImage
          src = {props.image_URL}
          alt = "imageURL"
        />
      </PostImage>
    </PostContainer_div>

  )
};

PostContainerHeader.propTypes = {
  likes: PropTypes.number
};

export default PostContainerHeader;