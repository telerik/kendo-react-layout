import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/packages/layout';
import PanelBarNavigation from "./PanelBarNavigation";
import PanelBarContent from "./PanelBarContent";
import classNames from 'classnames';
import { Expand } from '@telerik/kendo-react-animation';

const propTypes = {
    animation: React.PropTypes.bool,
    children: function(props, propName) {
        let prop = props[propName];

        if (prop) {
            //TODO: Utility function shared across classes.
            if (prop instanceof Array) {
                return new Error('Children should be either PanelBarContent or PanelBarNavigation.');
            }

            if (prop.type !== PanelBarContent && prop.type !== PanelBarNavigation) {
                return new Error('Child should be either PanelBarContent or PanelBarNavigation.');
            }
        }
    },
    className: React.PropTypes.string,
    expanded: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    root: React.PropTypes.bool,
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

const defaultProps = {
    title: 'Untitled'
};

export default class PanelBarItem extends React.Component {
    onSelect = () => {
        if (this.props.onSelect) {
            const { expanded, id, parentId } = this.props;

            this.props.onSelect({
                id: id,
                expanded: expanded,
                parentId: parentId
            });
        }
    }

    renderChild(child) {
        if (React.isValidElement(child)) {
            return this.renderContent(child.type.create(this.props, child.props));
        }

        return child;
    }

    renderContent(child) {
        const { animation, id } = this.props;

        if (animation !== false) {
            return (
                <Expand key={id + "_animation"}>
                    {child}
                </Expand>
            );
        }

        return child;
    }

    render() {
        const { children, expanded, title, root, disabled, selected, focused, id, className, ...others } = this.props;

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
            }, className)
        };

        const panelBarItemSpanProps = {
            'onClick': !disabled ? this.onSelect : null,
            'className': classNames({
                [styles['link']]: true,
                [styles['header']]: root,
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
                {this.renderChild(children)}
            </li>
        );
    }
}

PanelBarItem.propTypes = propTypes;
PanelBarItem.defaultProps = defaultProps;
