import React from 'react';
import PostContainerHeader from './PostContainerHeader';
import CommentSection from '../../components/CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
  return (
    <div>


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

                  name = {props.newComment}
                  searchTerm = {props.searchTerm}
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })

  )

};

export default PostContainer;

