import React from 'react';
import PostContainerHeader from './PostContainerHeader';
import CommentSection from '../../components/CommentSection/CommentSection';

import PropTypes from 'prop-types';


import './postcontainer.css';

const PostContainer = (props) => {
  console.log('Postcontainer props ', props);

  /*




  */

  return (
    <>
      {props.data.map(dataItem => (


        <div className = "postcontainer"
             key = {dataItem.username}
        >
          <div className = "postcontainer-header">
          <img
            className = "headerIMG"
            src = {dataItem.thumbnailUrl}
            alt = "imageURL"/>
          <h3 className = "userName"> {dataItem.username}</h3>
          </div>

        <div className = "postImage">
            <img
              className = "bodyIMG"
              src = {dataItem.imageUrl}
              alt = "imageURL"
            />
        </div>


        </div>
        ))}

    </>
  )




};


// build this into shape!!!
PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)





};


export default PostContainer;

