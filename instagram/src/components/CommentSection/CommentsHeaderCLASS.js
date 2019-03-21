import React from 'react';
import heart from '../img/heart-icon.png';
import chat from '../img/Bubble_chat.png';

import {
  CommentHeaderContainer,
  CommentHeaderImage,
  CommentImage,
  CommentHeaderLikes
} from '../StyledComponents/CommentSection_Styled';


import './commentsection.css';

class CommentsHeaderCLASS extends React.Component {
  constructor(props) {
    console.log('!!!! CommentsHeaderCLASS props  ', props);
    super(props);
    this.state = {
      likes: 0,
    }

  }


 componentDidMount() {
    console.log('@@@@@  CommentsHeaderCLASS CDM ');

    this.setState({
      likes: this.props.likes
    })

 }



  render() {

    return(
      <CommentHeaderContainer>
        <CommentHeaderImage>
          <CommentImage
            src = {heart}
            alt = "heartIMG"
            onClick = { this.props.likeIncrementHandler }
          />
          <CommentImage
            src = {chat}
            alt = "Bubble_chat"/>
        </CommentHeaderImage>
        <CommentHeaderLikes> {this.state.likes} {this.props.likesVar} </CommentHeaderLikes>
      </CommentHeaderContainer>
    )

  }

}


export default CommentsHeaderCLASS;