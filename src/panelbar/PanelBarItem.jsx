import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/panelbar/main';

import PanelBarNavigation from "./PanelBarNavigation";
import PanelBarContent from "./PanelBarContent";
import classNames from 'classnames';
import PanelBarAnimationContainer from './PanelBarAnimationContainer';

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
    ]),
    focused: React.PropTypes.bool
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

        const children = (<PanelBarNavigation {...navigationProps } key={id + "_navigation"}/>);

        return (
            <PanelBarAnimationContainer expand={navigationProps.expanded} key={id + "_animation"}>
                {navigationProps.expanded ? children : null}
            </PanelBarAnimationContainer>
        );
    }

    renderContent(child) {
        const { disabled, expanded, id } = this.props;
        const contentProps = {
            ...child.props,
            expanded: disabled ? !disabled : expanded
        };

        const children = (<PanelBarContent {...contentProps} key={id + "_content"}/>);

        return (
            <PanelBarAnimationContainer expand={contentProps.expanded} key={id + "_animation"}>
                {contentProps.expanded ? children : null}
            </PanelBarAnimationContainer>
        );
    }

    render() {
        const { children, expanded, title = 'Untitled', disabled, selected, focused, id, ...others } = this.props;

        const panelBarItemProps = {
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

        const panelBarItemSpanProps = {
            'onClick': !disabled ? this.onSelectHandler : null,
            'className': classNames({
                [styles['link']]: true,
                [styles['header']]: true,
                [styles['state-selected']]: !disabled && selected,
                [styles['state-focused']]: !disabled && focused
            })
        };

        const panelBarItemArrowProps = {
            'className': classNames({
                [styles['icon']]: true,
                [styles['i-arrow-n']]: expanded,
                [styles['panelbar-collapse']]: expanded,
                [styles['i-arrow-s']]: !expanded,
                [styles['panelbar-expand']]: !expanded
            })
        };

        const arrow = (!disabled && children) ? <span {...panelBarItemArrowProps } key={(id + "_arrow")}/> : null;

        return (
            <li {...others } {...panelBarItemProps }>
                <span {...panelBarItemSpanProps } key={(id + "_title")}>
                    {title}
                    {arrow}
                </span>
                {this.mapComponents(children)}
            </li>
        );
    }
}

PanelBarItem.propTypes = propTypes;
