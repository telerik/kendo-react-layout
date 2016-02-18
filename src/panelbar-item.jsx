import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import PanelBarNavigation from "../src/panelbar-navigation.jsx";
import PanelBarContent from "../src/panelbar-content.jsx";
import ClassNames from 'classnames';

export default class PanelBarItem extends React.Component {
    mapComponents(props, other) {
        let { children } = props;

        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type === PanelBarNavigation) {
                    return <PanelBarNavigation {...other }>{child.props.children}</PanelBarNavigation>;
                }

                return <PanelBarContent {...other }>{child.props.children}</PanelBarContent>;
            }
            return child;
        });
    }
    render() {
        const { title = "Untitled", isLast, index, disabled, ...other } = this.props;

        let panelBarItemClasses = ClassNames({
            'k-item': true,
            'k-last': isLast,
            'k-first': index === 0,
            'k-state-default': true,
            'k-state-disabled': disabled
            //'k-state-active': true
            //'k-state-highlight'
            //'k-state-hover', --for span element
        });

        let panelBarItemSpanClasses = ClassNames({
            'k-link': true,
            'k-header': true,
            'k-state-selected': false,
            'k-state-default': true
        });

        const children = this.mapComponents(this.props, other);

        return (
            <li className={panelBarItemClasses}>
                <span className={panelBarItemSpanClasses}>{title}</span>
                {children}
            </li>
        );
    }
}

PanelBarItem.propTypes = {
    active: React.PropTypes.bool,
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
    disabled: React.PropTypes.bool,
    index: React.PropTypes.number,
    isLast: React.PropTypes.bool,
    //TODO: change to react element?
    title: React.PropTypes.string
};