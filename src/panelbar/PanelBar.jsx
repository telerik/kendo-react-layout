import * as React from 'react';
import PanelBarNavigation from "./PanelBarNavigation";
import PanelBarItem from "./PanelBarItem";

const propTypes = {
    animation: React.PropTypes.bool,
    children: function(props, propName) {
        const prop = props[propName];

        if (prop) {
            if (prop instanceof Array) {
                for (let value of prop) {
                    if (!value.type || value.type !== PanelBarItem) {
                        return new Error('PanelBar children should be either PanelBarItem or Array of PanelBarItem.');
                    }
                }
            } else {
                if (prop.type !== PanelBarItem) {
                    return new Error('PanelBar child should be either PanelBarItem or Array of PanelBarItem.');
                }
            }
        }
    },
    className: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func
};

export default class PanelBar extends React.Component {
    onKeyDown = event => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
    };

    render() {
        const panelBarProps = {
            ...this.props,
            expanded: true,
            root: true,
            onKeyDown: this.onKeyDown,
            parentId: null,
            tabIndex: 0
        };

        return (
            <PanelBarNavigation {...panelBarProps} />
        );
    }
}

PanelBar.propTypes = propTypes;
