import React from 'react';
import PropTypes from 'prop-types';


import './postcontainer.css';


const PostContainerHeader = (props) => {
  // console.log('PostContainerheader props  ' , props);

  return (

    <div className = "postcontainer"  key = {props.user_name}>
      <div
        key = {props.user_name}
        className = "postcontainer-header">
        <img
          className = "headerIMG"
          src = {props.thumbnail_URL}
          alt = "imageURL"/>
        <h3 className = "userName"> {props.user_name}</h3>
      </div>

      <div className = "postImage">
        <img
          className = "bodyIMG"
          src = {props.image_URL}
          alt = "imageURL"
        />
      </div>
    </div>


  )
};

PostContainerHeader.propTypes = {
  likes: PropTypes.number
};


export default PostContainerHeader;