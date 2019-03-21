import React from 'react';
import PropTypes from 'prop-types';
import './searchbar.css';
import logoIMG from '../img/instagram_LOGO.png';
import vertical_LINE from '../img/vertical_LINE_2.jpg';
import compass from '../img/compass.png';
import heart from '../img/heart-icon.png';
import person from '../img/person.png';
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
  margin: .5rem 2rem;
  padding: .25rem;
`;

const LogoImage = styled.img.attrs({src: logoIMG, alt: 'logo'})`
  width: 30px;
  height: 30px;
  background: orange;
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
`;

const SearchInput = styled.input`
  width: 20%;
  line-height: 1.25rem;
  font-size: 1rem;
  font-style: italic;
  outline-style: none;
`;

const SearchBar = (props) => {

  return (
    <Header>
      <Content>
        <LogoImage/>
        <IMG src = {vertical_LINE} alt = "v_line"/>
        <h1 className = 'logo'> Instagram </h1>
      </Content>


      <SearchInput
        type = "text"
        name = "searchTerm"
        value = {props.value}
        placeholder= " search here..."
        onChange = {props.updateHandler}
      />

      <Content>
        <IMG src = {compass} alt = "compass"/>
        <IMG alt = "compass" src = {compass} alt = "compass"/>
        <IMG src = {heart} alt = "heart"/>
        <IMG src = {person} alt = "person"/>
      </Content>


    </Header>
  )

};

export default SearchBar;