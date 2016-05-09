import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/packages/layout';
import classNames from 'classnames';
import PanelBarItem from './PanelBarItem';

const propTypes = {
    animation: React.PropTypes.bool,
    children: function(props, propName) {
        const prop = props[propName];

        if (prop) {
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
    },
    className: React.PropTypes.string,
    expanded: React.PropTypes.bool,
    root: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    parentId: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    tabIndex: React.PropTypes.number
};

export default class PanelBarNavigation extends React.Component {
    renderChildren(children) {
        return React.Children.toArray(children)
            .filter(React.isValidElement)
            .map(this.renderItem, this);
    }

    renderItem(child) {
        const itemProps = {
            animation: this.props.animation,
            ...child.props,
            onSelect: this.props.onSelect,
            parentId: this.props.parentId,
            key: child.props.id
        };

        return (<PanelBarItem {...itemProps} />);
    }

    static create({ animation, disabled, expanded, onSelect, id }, props) {
        if (!disabled && expanded) {
            const navigationProps = {
                animation: animation,
                ...props,
                expanded: expanded,
                parentId: id,
                onSelect: onSelect
            };

            return (<PanelBarNavigation {...navigationProps } key={id + "_navigation"}/>);
        }

        return null;
    }

    render() {
        const { expanded, root, className, ...others } = this.props;

        const panelBarItemsClasses = classNames({
            [styles['panel']]: !root,
            [styles['widget']]: root,
            [styles['reset']]: root,
            [styles['header']]: root,
            [styles['panelbar']]: root
        }, className);

        const props = {
            ...others,
            style: {
                display: expanded ? 'block' : 'none'
            },
            className: panelBarItemsClasses
        };

        return (
            <ul {...props }>
                {this.renderChildren(this.props.children)}
            </ul>
        );
    }
}

PanelBarNavigation.propTypes = propTypes;
