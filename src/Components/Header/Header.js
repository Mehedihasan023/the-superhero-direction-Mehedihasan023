import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className="header-container" >
            <div className="logo">
                <img src="https://softwaresangli.files.wordpress.com/2015/06/logo.png" alt="" />
            </div>

            <div className="header" >
                <h2>Make a Programmers Club</h2>
                <h5>Try to make a programmers club with famous programmers to create a new it farm </h5>
                <h4>Total Budget : 20 Million</h4>
            </div>
        </div>
    );
};

export default Header;