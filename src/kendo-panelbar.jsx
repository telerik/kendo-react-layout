import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import PanelBarItem from "../src/panelbar-item.jsx";
import classNames from 'classnames';

export default class KendoPanelBar extends React.Component {
    render() {
        const panelBarClasses = classNames({
            'k-widget': true,
            'k-reset': true,
            'k-header': true,
            'k-panelbar': true
        });

        return (
            <ul className={panelBarClasses}>
                {this.props.children}
            </ul>
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
                    if (!value.type || value.type !== PanelBarItem) {
                        return new Error('KendoPanelBar children should be either PanelBarItem or Array of PanelBarItem.');
                    }
                }
            } else {
                if (prop.type !== PanelBarItem) {
                    return new Error('KendoPanelBar child should be either PanelBarItem or Array of PanelBarItem.');
                }
            }
        }
    }
};

