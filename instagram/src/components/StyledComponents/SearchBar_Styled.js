//import vertical_LINE from '../img/vertical_LINE_2.jpg';
//import heart from '../img/heart-icon.png';
//import person from '../img/person.png';
import logoIMG from '../img/instagram_LOGO.png';
// import compass from '../img/compass.png';
import styled from "styled-components";


const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  margin: .5rem 0;
  padding: .25rem;
`;

const LogoImage = styled.img.attrs({src: logoIMG, alt: 'logo'})`
  width: 30px;
  height: 30px;
  background: orange;
`;


const Logo = styled.h1`
  font-family: Lobster;
  display: flex;
  align-items: baseline;
  font-size: 2.25rem;
  line-height: 2.25rem;
`;

const IMG = styled.img`
  width: 30px;
  height: 30px;
  background: pink;
  
  ${props => props.alt === "compass"
  // ? `backgroundColor: "green";`    nope
  // ? `backgroundColor: "green";`    nope
  // ? `background: "green";`         nope 
  // ? `background: "green";`         nope
  //  ? `background: #4caf50;`  // works !!!
  ? `{background: green;}`    // works !!!
  : null
  }
  
  ${props => props.alt === "heart"
    ? `{background: dodgerblue;}`
    : null
  }
  
  ${props => props.alt === "person"
    ? `{background: salmon;}`
    : null
}
  
  
`;

const SearchInput = styled.input`
  width: 20%;
  line-height: 1.25rem;
  font-size: 1rem;
  font-style: italic;
  outline-style: none;
`;

export { Header, Content, LogoImage, IMG, SearchInput, Logo};