import * as React from 'react';

import PanelBarNavigation from "./PanelBarNavigation";
import PanelBarItem from "./PanelBarItem";

const propTypes = {
    children: function(props, propName) {
        const prop = props[propName];

        if (prop) {
            //TODO: instead use: if (Object.prototype.toString.call(obj) == '[object Array]')
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
    onSelect: React.PropTypes.func,
    selectedKey: React.PropTypes.string
};

export default class PanelBar extends React.Component {
    onSelect(itemKey) {
        if (this.props.onSelect) {
            this.props.onSelect({
                selectedKey: itemKey
            });
        }
    }

    render() {
        const { children, ...props } = this.props;

        return (
            <PanelBarNavigation active isMaster {...props } onSelect={this.onSelect.bind(this)}>{children}</PanelBarNavigation>
        );
    }
}

PanelBar.propTypes = propTypes;
