import React from 'react';
import PostContainerHeader from './PostContainerHeader';
import CommentSection from '../../components/CommentSection/CommentSection';

import PropTypes from 'prop-types';


import './postcontainer.css';

const PostContainer = (props) => {
  console.log('Postcontainer props ', props);

  return (
    <div className = "postcontainerALL">
      {props.data.map(dataItem => {

        return (
          <div key = {dataItem.timestamp}>

            <PostContainerHeader

              dataItem = {dataItem}
            />

            <CommentSection

              dataItem = {dataItem}

            />

          </div>

        )

      })}

    </div>
  )




};


// build this into shape!!!
PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)





};


export default PostContainer;

