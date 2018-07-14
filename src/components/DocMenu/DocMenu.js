import React, { Component } from 'react';
import './DocMenu.scss';
import { NavLink } from 'react-router-dom';

class DocMenu extends Component {

    render() {
        return (
            <div className="doc-menu">
                <ul>
                    <li>
                        <NavLink to="/doc/Checkbox" activeClassName="selected">Checkbox</NavLink>
                    </li>
                    <li>
                        <NavLink to="/doc/Dropdown" activeClassName="selected">Dropdown</NavLink>
                    </li>
                    <li>
                        <NavLink to="/doc/ToggleButton" activeClassName="selected">ToggleButton</NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}

export default DocMenu;