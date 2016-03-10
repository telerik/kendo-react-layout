import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import PanelBarNavigation from "../src/PanelBarNavigation";
import PanelBarContent from "../src/PanelBarContent";
import classNames from 'classnames';

export default class PanelBarItem extends React.Component {
    mapComponents(props, childProps) {
        let { children, disabled, active } = props;

        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type === PanelBarNavigation) {
                    return (<PanelBarNavigation {...childProps } active={disabled ? !disabled : active}>
                        {child.props.children}
                    </PanelBarNavigation>);
                }

                return (<PanelBarContent {...childProps } active={disabled ? !disabled : active}>
                    {child.props.children}
                </PanelBarContent>);
            }
            return child;
        });
    }

    onSelect() {
        this.props.onSelect(this.props.itemKey);
    }

    render() {
        const { active, title = 'Untitled', isLast, index, disabled, selected, ...others } = this.props;

        let panelBarItemProps = {
            'role': 'menuitem',
            'aria-expanded': !disabled && active,
            'aria-selected': !disabled && selected,
            'aria-hidden': !disabled && !active,
            'className': classNames({
                'k-item': true,
                'k-last': isLast,
                'k-first': index === 0,
                'k-state-default': !disabled,
                'k-state-disabled': disabled,
                'k-state-active': !disabled && active
                //'k-state-highlight'
            })
        };

        let panelBarItemSpanProps = {
            'onClick': !disabled ? this.onSelect.bind(this) : null,
            'className': classNames({
                'k-link': true,
                'k-header': true,
                'k-state-selected': !disabled && selected
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