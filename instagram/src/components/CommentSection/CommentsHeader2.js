import React from 'react';
import heart from '../img/heart-icon.png';
import chat from '../img/Bubble_chat.png';



import './commentsection.css';

class CommentsHeader2 extends React.Component {
  constructor(props) {
    console.log('!!!! CommentsHeader2 props  ', props);
    super(props);
    this.state = {
      likes : 0,
    }

  }


 componentDidMount() {
  //  console.log('@@@@@  CommentsHeader2 called ');

    this.setState({
      likes: this.props.likes
    })

 }


  render() {
    return(
      <div className = "commentsHeader-container">
        <div className = "commentsHeaderIMG">
          <img
            src = {heart}
            alt = "heartIMG"
            onClick = { this.likeIncrementHandler }
          />
          <img src = {chat} alt = "Bubble_chat"/>
        </div>
        <h3 className = "commentsHeaderLikes"> {this.likes} {this.likesVar} </h3>
      </div>
    )

  }

}


export default CommentsHeader2;