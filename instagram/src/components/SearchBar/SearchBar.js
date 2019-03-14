import React from 'react';
import './searchbar.css';
import logoIMG from '../img/instagram_LOGO.jpg';
import vertical_LINE from '../img/vertical_LINE_2.jpg';
import compass from '../img/compass.png';
import heart from '../img/heart-icon.png';
import person from '../img/person.png';

const SearchBar = (props) => {
  console.log('Search props ', props);


  return (
    <div className = "searchbar-container">
      <div className = "left-content">
        <img src = {logoIMG} alt = "logo"/>
        <img src = {vertical_LINE} alt = "v_line"/>
        <h1 className = 'logo'> Instagram </h1>
      </div>
      <div className= "right-content">
        <img src = {compass} alt = "compass"/>
        <img src = {heart} alt = "heart"/>
        <img src = {person} alt = "person" />
      </div>






    </div>


  )


};

export default SearchBar;