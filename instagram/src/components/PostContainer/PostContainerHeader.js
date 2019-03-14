import React from 'react';
import PropTypes from 'prop-types';


import './postcontainer.css';


const PostContainerHeader = (dataItem) => {
  console.log('PostContainerheader props  ' , dataItem);

  return (

    <div className = "postcontainer"
         key = {dataItem.dataItem.username}
    >
      <div className = "postcontainer-header"
      >

        <img
          className = "headerIMG"
          src = {dataItem.thumbnailUrl}
          alt = "imageURL"/>
        <h3 className = "userName"> {dataItem.username}</h3>
      </div>



    </div>



  )






};

export default PostContainerHeader;