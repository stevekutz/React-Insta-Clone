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

const LeftContent = styled.div`
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
  background: white;
`;


const IMG = styled.img`
  width: 30px;
  height: 30px;
  background: pink

`;

const SearchBar = (props) => {

  return (
    <Header>
      <LeftContent>
        <LogoImage/>
        <IMG src = {vertical_LINE} alt = "v_line"/>
        <h1 className = 'logo'> Instagram </h1>
      </LeftContent>


      <input
        type = "text"
        name = "searchTerm"
        value = {props.value}
        placeholder= " search here..."
        className = "searchInput"
        onChange = {props.updateHandler}
      />

      <div className= "right-content">

        <IMG src = {compass} alt = "compass"/>
        <img src = {compass} alt = "compass"/>
        <img src = {heart} alt = "heart"/>
        <img src = {person} alt = "person" />
      </div>


    </Header>
  )

};

export default SearchBar;