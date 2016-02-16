import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import PanelBarNavigation from "../src/panelbar-navigation.jsx";
import PanelBarContent from "../src/panelbar-content.jsx";
import ClassNames from 'classnames';

export default class PanelBarItem extends React.Component {
    render() {
        const { title = "Untitled", isLast, index } = this.props;

        let panelBarItemClasses = ClassNames({
            'k-item': true,
            'k-state-default': true,
            'k-last': isLast,
            'k-first': index === 0
        });

        let panelBarItemSpanClasses = ClassNames({
            'k-link': true,
            'k-header': true,
            'k-state-selected': false,
            'k-state-default': true
        });

        return (
            <li className={panelBarItemClasses}>
                <span className={panelBarItemSpanClasses}>{title}</span>
                {this.props.children}
            </li>
        );
    }
}

PanelBarItem.propTypes = {
    children: function(props, propName) {
        let prop = props[propName];

        if (prop) {
            //TODO: instead use: if (Object.prototype.toString.call(obj) == '[object Array]')
            if (prop instanceof Array) {
                return new Error('Children should be either PanelBarContent or PanelBarNavigation.');
            }

            if (prop.type !== PanelBarContent && prop.type !== PanelBarNavigation) {
                return new Error('Child should be either PanelBarContent or PanelBarNavigation.');
            }
        }
    },
    index: React.PropTypes.number,
    isLast: React.PropTypes.bool,
    title: React.PropTypes.string
};