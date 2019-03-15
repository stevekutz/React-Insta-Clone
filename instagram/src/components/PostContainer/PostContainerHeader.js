import React from 'react';
import PropTypes from 'prop-types';


import './postcontainer.css';


const PostContainerHeader = (props) => {
  console.log('PostContainerheader props  ' , props.dataItem);

  return (

    <div className = "postcontainer"  key = {props.dataItem.username}>
      <div
        key = {props.dataItem.username}
        className = "postcontainer-header">
        <img
          className = "headerIMG"
          src = {props.dataItem.thumbnailUrl}
          alt = "imageURL"/>
        <h3 className = "userName"> {props.dataItem.username}</h3>
      </div>

      <div className = "postImage">
        <img
          className = "bodyIMG"
          src = {props.dataItem.imageUrl}
          alt = "imageURL"
        />
      </div>
    </div>



  )






};

export default PostContainerHeader;