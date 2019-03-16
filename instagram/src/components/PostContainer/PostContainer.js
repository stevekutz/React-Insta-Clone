import React from 'react';
import PostContainerHeader from './PostContainerHeader';
import CommentSection from '../../components/CommentSection/CommentSection';

import PropTypes from 'prop-types';


import './postcontainer.css';

const PostContainer = (props) => {
  console.log('Postcontainer props ', props);

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
                  comments = {dataItem.comments}
                  likes = {dataItem.likes}
                  value = {props.value}
                  name = {props.newComment}
                  updateHandler = {props.updateHandler}
                  handleSubmit = {props.handleSubmit}
                  likeIncrementHandler = {props.likeIncrementHandler}
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

