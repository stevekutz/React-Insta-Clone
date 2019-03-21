import styled from "styled-components";

const PostContainer_div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const PostContainerHeader_div = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

const HeaderIMG = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  padding: 1rem;
`;

const UserName = styled.h3`
  padding: 1rem;
  font-family: Roboto;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const PostImage = styled.div`
  width: 100%;
`;

const BodyImage = styled.img`
  width: 100%;
  height: 100%;
`;


export {PostContainer_div,
  PostContainerHeader_div,
  HeaderIMG,
  UserName,
  PostImage,
  BodyImage


};