import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://www.amazon.com/ref=nav_logo" />
            <div className="header__search"></div>
        </div>
    )
}

export default Header
