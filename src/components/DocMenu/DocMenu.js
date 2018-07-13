import React, { Component } from 'react';
import './DocMenu.scss';
import { Link } from 'react-router-dom';

class DocMenu extends Component {

    render() {
        return (
            <div className="doc-menu">
                <ul>
                    <li>
                        <Link to="/doc/Checkbox">Checkbox</Link>
                    </li>
                    <li>
                        <Link to="/doc/Dropdown">Dropdown</Link>
                    </li>
                </ul>
            </div>
        )
    }

}

export default DocMenu;