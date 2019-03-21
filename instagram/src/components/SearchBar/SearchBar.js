import React from 'react';
import PropTypes from 'prop-types';

import vertical_LINE from '../img/vertical_LINE_2.jpg';
import compass from '../img/compass.png';
import heart from '../img/heart-icon.png';
import person from '../img/person_2.png';

import {
  Header,
  Content,
  LogoImage,
  Logo,
  IMG,
  SearchInput
} from '../StyledComponents/SearchBar_Styled' ;

const SearchBar = (props) => {

  return (
    <Header>
      <Content>
        <LogoImage/>
        <IMG src = {vertical_LINE} alt = "v_line"/>
        <Logo> Instagram </Logo>
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
        <IMG src = {heart} alt = "heart"/>
        <IMG src = {person} alt = "person"/>
      </Content>

    </Header>
  )

};

export default SearchBar;