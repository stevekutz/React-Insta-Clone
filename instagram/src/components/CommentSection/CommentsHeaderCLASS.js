import React from 'react';
import heart from '../img/heart-icon.png';
import chat from '../img/Bubble_chat.png';



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
      <div className = "commentsHeader-container">
        <div className = "commentsHeaderIMG">
          <img
            className = "commentsImg"
            src = {heart}
            alt = "heartIMG"
            onClick = { this.props.likeIncrementHandler }
          />
          <img
            className = "commentsImg"
            src = {chat}
            alt = "Bubble_chat"/>
        </div>
        <h3 className = "commentsHeaderLikes"> {this.state.likes} {this.props.likesVar} </h3>
      </div>
    )

  }

}


export default CommentsHeaderCLASS;