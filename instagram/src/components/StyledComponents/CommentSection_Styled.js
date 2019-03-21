import styled from 'styled-components';


const CommentSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5%;
`;


const NewCommentForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const AddComment = styled.input`
  width: 90%;
  margin: 0 auto;
  outline-style: none;
  font-size: 1rem;
  border-radius: .5rem;

`;


const CommentHeaderContainer = styled.div`
  width: 40%;
  padding: .5rem;
`;

const CommentHeaderImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: .25rem;
  cursor: pointer;
`;

const CommentImage = styled.img`
  width: 30px;
  height: 30px;
  background: white;
`;

 const CommentHeaderLikes = styled.h3`
   width: 100%;
   display: flex;
   font-size: 1.5rem;
   line-height: 1.5rem;
   font-weight: bold;
 `;


 const CommentContainer = styled.div`
   width: 95%;
   display: flex;
   align-items: center;
   align-content: center;
   font-size: .25rem;
   cursor: pointer;
 `;

 const Comment_h3 = styled.h3`
   font-size: 1.25rem;
   line-height: 1.5rem;
   padding: 0 .5rem;
   vertical-align: baseline;
 `;

 const Comment_UserName = styled.span`
   font-size: 1.25rem;
   line-height: 1.5rem;
   font-weight: bold;
   width: 100%;
   padding: 0;
   vertical-align: baseline;
 `;

 const CommentDate = styled.h5`
   text-align: right;
   padding: 0 .5rem;
   font-family: Benchnine;
 
 `;



export {
  CommentSectionContainer,
  NewCommentForm,
  AddComment,
  CommentHeaderContainer,
  CommentHeaderImage,
  CommentImage,
  CommentHeaderLikes,
  CommentContainer,
  Comment_h3,
  Comment_UserName,
  CommentDate
};