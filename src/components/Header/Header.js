import React, { Component } from 'react';
import './Header.scss';
import Logo from './Images/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <Link to="/">
                    <img src={Logo} alt="" className="logo"/>
                </Link>
                <span className="header-text">CompCore - React.JS Core components</span>
            </div>
        )
    }

}

export default Header;

