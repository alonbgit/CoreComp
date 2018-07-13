import React, { Component } from 'react';
import './Header.scss';
import Logo from './Images/logo.png';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <img src={Logo} alt="" className="logo"/>
                <span className="header-text">CompCore - React.JS Core components</span>
            </div>
        )
    }

}

export default Header;

