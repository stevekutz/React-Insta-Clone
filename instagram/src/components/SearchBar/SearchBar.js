import React from 'react';
import './searchbar.css';
import logoIMG from '../img/instagram_LOGO.jpg';
import vertical_LINE from '../img/vertical_LINE_2.jpg';
;
const SearchBar = (props) => {
  console.log('Search props ', props);


  return (
    <div className = "searchbar-container">
      <div className = "left-content">
        <img src = {logoIMG} alt = "logo"/>
        <img src = {vertical_LINE} alt = "v_line"/>
        <h1 className = 'logo'> Instagram </h1>

      </div>





    </div>


  )


};

export default SearchBar;