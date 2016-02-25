import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import PanelBarNavigation from "../src/KendoPanelBarNavigation.jsx";
import KendoPanelBarItem from "../src/KendoPanelBarItem.jsx";

export default class KendoPanelBar extends React.Component {
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

KendoPanelBar.propTypes = {
    children: function(props, propName) {
        const prop = props[propName];

        if (prop) {
            //TODO: instead use: if (Object.prototype.toString.call(obj) == '[object Array]')
            if (prop instanceof Array) {
                for (let value of prop) {
                    if (!value.type || value.type !== KendoPanelBarItem) {
                        return new Error('KendoPanelBar children should be either PanelBarItem or Array of PanelBarItem.');
                    }
                }
            } else {
                if (prop.type !== KendoPanelBarItem) {
                    return new Error('KendoPanelBar child should be either PanelBarItem or Array of PanelBarItem.');
                }
            }
        }
    },
    onSelect: React.PropTypes.func
};

