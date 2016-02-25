import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import KendoPanelBarNavigation from "../src/KendoPanelBarNavigation.jsx";
import KendoPanelBarContent from "../src/KendoPanelBarContent.jsx";
import ClassNames from 'classnames';

export default class KendoPanelBarItem extends React.Component {
    mapComponents(props, others) {
        let { children } = props;

        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type === KendoPanelBarNavigation) {
                    return <KendoPanelBarNavigation {...others }>{child.props.children}</KendoPanelBarNavigation>;
                }

                return <KendoPanelBarContent {...others }>{child.props.children}</KendoPanelBarContent>;
            }
            return child;
        });
    }

    onSelect() {
        this.props.onSelect(this.props.itemKey);
    }

    render() {
        const { title = "Untitled", isLast, index, disabled, selected, ...others } = this.props;

        //TODO: Add aria attributes
        let panelBarItemProps = {
            'role': "menuitem",
            //'aria-expanded': true
            //'aria-selected': true
            //'aria-hidden': true
            className: ClassNames({
                'k-item': true,
                'k-last': isLast,
                'k-first': index === 0,
                'k-state-default': true,
                'k-state-disabled': disabled
                //'k-state-active': true
                //'k-state-highlight'
                //'k-state-hover', --for span element
            })
        };

        let panelBarItemSpanProps = {
            onClick: !disabled ? this.onSelect.bind(this) : null,
            className: ClassNames({
                'k-link': true,
                'k-header': true,
                'k-state-selected': !disabled && selected,
                'k-state-default': true
            })
        };

        const children = this.mapComponents(this.props, others);

        return (
            <li {...panelBarItemProps }>
                <span {...panelBarItemSpanProps }>{title}</span>
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
    itemKey: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    onSelect: React.PropTypes.func,
    selected: React.PropTypes.bool,
    title: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
    ])
};