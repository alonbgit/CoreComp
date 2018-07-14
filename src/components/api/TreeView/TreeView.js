import React, { Component } from 'react';
import './TreeView.scss';
import PropTypes from 'prop-types';

class TreeView extends Component {

    state = {
        visibleItems: []
    }

    componentWillMount() {
        let visibleItems = [];
        this.props.items.forEach(item => {
            visibleItems.push(item);
        });
        this.setState({
            visibleItems: visibleItems
        })
    }

    render() {
        return (
            <div className="tree-view">
                {this.props.items.map(item => (
                    this.renderItem(item, 0)
                ))}
            </div>
        )
    }

    renderItem = (item, level) => {
        let n = level;
        n++;
        return (
            <div className={this.getItemClasses(item)}
                 key={item.id}
                 style={{paddingLeft: (n * 7) + 'px'}}
                 onClick={(e) => this.onItemClick(e, item)}>
                <span>{item.name}</span>
                {item.children && item.children.map(child => (
                    this.renderItem(child, n)
                ))}
            </div>
        )
    }

    onItemClick = (e, item) => {
        e.stopPropagation();
        
        if (!item.children || item.children.length === 0)
            return;
        const isChildrenVisible = this.state.visibleItems.find(c => c === item.children[0]);
        if (isChildrenVisible) {
            // remove the items
            let newVisibleItems = [...this.state.visibleItems];
            item.children.forEach(child => {
                const index = newVisibleItems.findIndex(c => c === child);
                newVisibleItems.splice(index, 1);
            });
            this.setState({
                visibleItems: newVisibleItems
            });
        }
        else {
            // adds the items
            let newVisibleItems = [...this.state.visibleItems];
            item.children.forEach(child => {
                newVisibleItems.push(child);
            });
            this.setState({
                visibleItems: newVisibleItems
            })
        }
    }

    getItemClasses = (item) => {
        let classes = ['item'];
        const isItemExist = this.state.visibleItems.find(c => c === item);
        if (isItemExist)
            classes.push('visible');
        return classes.join(' ');
    }

}

TreeView.propTypes = {
    items: PropTypes.array.isRequired
}

export default TreeView;