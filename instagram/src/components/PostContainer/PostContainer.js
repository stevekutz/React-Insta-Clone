import React from 'react';
import PostContainerHeader from './PostContainerHeader';
import CommentSection from '../../components/CommentSection/CommentSection';

import PropTypes from 'prop-types';


import './postcontainer.css';

const PostContainer = (props) => {
 // console.log('Postcontainer props ', props);
// give components ONLY data they need, do not pass everything !!!
  console.log('***********  props.data.length', props.data.length);

  return (
    <div className = "postcontainerALL">


      {props.data.length > 0

        ? (
          props.data.map(dataItem => {

            return (
              <div key = {dataItem.timestamp}>

                <PostContainerHeader
                  user_name = {dataItem.username}
                  image_URL = {dataItem.imageUrl}
                  thumbnail_URL = {dataItem.thumbnailUrl}
                />

                <CommentSection
                  dataItem = {dataItem}
                />

              </div>

            )

          }))
        : (
          <h2> {props.loadingMSG} </h2>
        )}

    </div>
  )




};


// build this into shape!!!
PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)





};


export default PostContainer;

