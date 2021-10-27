import React from 'react'
import "../CSS/Header.css";
const Header = (props) => {
    return (
        <div className="header-container">
            <h1> So, <span>What's your plan today ?</span> </h1>
            <h4>Mark your items in the {props.title} and go ahead.</h4>
            
        </div>
    )
}

export default Header;
