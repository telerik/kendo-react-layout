import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/panelbar/main';

import PanelBarNavigation from "./PanelBarNavigation";
import PanelBarContent from "./PanelBarContent";
import classNames from 'classnames';

const propTypes = {
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
    expanded: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    selected: React.PropTypes.bool,
    title: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
    ]),
    id: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    parentId: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ])
};

export default class PanelBarItem extends React.Component {
    constructor(props) {
        super(props);

        this.onSelectHandler = this.onSelect.bind(this);
    }

    onSelect() {
        if (this.props.onSelect) {
            const { expanded, id, parentId } = this.props;

            this.props.onSelect({
                id: id,
                expanded: expanded,
                parentId: parentId
            });
        }
    }

    mapComponents(child) {
        if (React.isValidElement(child)) {
            if (child && child.type === PanelBarNavigation) {
                return this.renderNavigation(child);
            }

            return this.renderContent(child);
        }

        return child;
    }

    renderNavigation(child) {
        const { disabled, expanded, onSelect, id } = this.props;
        const navigationProps = {
            ...child.props,
            expanded: disabled ? !disabled : expanded,
            parentId: id,
            onSelect: onSelect
        };

        return (<PanelBarNavigation {...navigationProps } />);
    }

    renderContent(child) {
        const { disabled, expanded } = this.props;
        const contentProps = {
            ...child.props,
            expanded: disabled ? !disabled : expanded
        };

        return (<PanelBarContent {...contentProps} />);
    }

    render() {
        const { children, expanded, title = 'Untitled', disabled, selected } = this.props;

        let panelBarItemProps = {
            'role': 'menuitem',
            'aria-expanded': !disabled && expanded,
            'aria-selected': !disabled && selected,
            'aria-hidden': !disabled && !expanded,
            'className': classNames({
                [styles.item]: true,
                [styles['state-default']]: !disabled,
                [styles['state-disabled']]: disabled,
                [styles['state-active']]: !disabled && expanded
            })
        };

        let panelBarItemSpanProps = {
            'onClick': !disabled ? this.onSelectHandler : null,
            'className': classNames({
                [styles['link']]: true,
                [styles['header']]: true,
                [styles['state-selected']]: !disabled && selected
            })
        };

        return (
            <li {...panelBarItemProps } >
                <span {...panelBarItemSpanProps }>{title}</span>
                {this.mapComponents(children)}
            </li>
        );
    }
}

PanelBarItem.propTypes = propTypes;
