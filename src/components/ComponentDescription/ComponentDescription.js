import React, { Component } from 'react';
import './ComponentDescription.scss';

class ComponentDescription extends Component {

    renderChild(key) {
        return this.props.children.filter((c) => c.key === key);
    }

    render() {
        return (
            <div className="component-description">
                <div className="description">
                    {this.renderChild('description')}
                </div>
                {this.renderChild('component')}
            </div>
        )
    }

}

export default ComponentDescription;