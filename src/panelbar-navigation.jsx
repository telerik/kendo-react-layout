import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import classNames from 'classnames';
import PanelBarItem from "../src/panelbar-item.jsx";

export default class PanelBarNavigation extends React.Component {
    render() {
        const panelBarItemsClasses = classNames({
            'k-group': true,
            'k-panel': true
        });

        return (
            <ul className={panelBarItemsClasses}>
                {this.props.children}
            </ul>
        );
    }
}

PanelBarNavigation.propTypes = {
    children: function(props, propName) {
        const prop = props[propName];

        if (prop) {
            //TODO: instead use: if (Object.prototype.toString.call(obj) == '[object Array]')
            if (prop instanceof Array) {
                for (let value of prop) {
                    if (!value.type || value.type !== PanelBarItem) {
                        return new Error('Navigation children should be either PanelBarItem or Array of PanelBarItem.');
                    }
                }
            } else {
                if (prop.type !== PanelBarItem) {
                    return new Error('Navigation child should be either PanelBarItem or Array of PanelBarItem.');
                }
            }
        }
    }
};