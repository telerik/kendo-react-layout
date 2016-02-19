import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import KendoPanelBarNavigation from "../src/KendoPanelBarNavigation.jsx";
import KendoPanelBarContent from "../src/KendoPanelBarContent.jsx";
import ClassNames from 'classnames';

export default class KendoPanelBarItem extends React.Component {
    mapComponents(props, other) {
        let { children } = props;

        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type === KendoPanelBarNavigation) {
                    return <KendoPanelBarNavigation {...other }>{child.props.children}</KendoPanelBarNavigation>;
                }

                return <KendoPanelBarContent {...other }>{child.props.children}</KendoPanelBarContent>;
            }
            return child;
        });
    }
    render() {
        const { title = "Untitled", isLast, index, disabled, selected, ...other } = this.props;

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
            //TODO: this should be applied only on enabled nodes
            'k-state-selected': selected,
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

KendoPanelBarItem.propTypes = {
    active: React.PropTypes.bool,
    children: function(props, propName) {
        let prop = props[propName];

        if (prop) {
            //TODO: instead use: if (Object.prototype.toString.call(obj) == '[object Array]')
            if (prop instanceof Array) {
                return new Error('Children should be either PanelBarContent or PanelBarNavigation.');
            }

            if (prop.type !== KendoPanelBarContent && prop.type !== KendoPanelBarNavigation) {
                return new Error('Child should be either PanelBarContent or PanelBarNavigation.');
            }
        }
    },
    disabled: React.PropTypes.bool,
    index: React.PropTypes.number,
    isLast: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    //TODO: change to react element?
    title: React.PropTypes.string
};