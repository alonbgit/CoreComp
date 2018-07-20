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
                    <li>
                        <NavLink to="/doc/TabSelector" activeClassName="selected">TabSelector</NavLink>
                    </li>
                    <li>
                        <NavLink to="/doc/ListView" activeClassName="selected">ListView</NavLink>
                    </li>
                    <li>
                        <NavLink to="/doc/TreeView" activeClassName="selected">TreeView</NavLink>
                    </li>
                    <li>
                        <NavLink to="/doc/Popup" activeClassName="selected">Popup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/doc/Buttons" activeClassName="selected">Buttons</NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}

export default DocMenu;