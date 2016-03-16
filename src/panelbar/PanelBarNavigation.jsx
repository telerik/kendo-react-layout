import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/panelbar/main';

import classNames from 'classnames';
import PanelBarItem from './PanelBarItem';

const propTypes = {
    active: React.PropTypes.bool,
    children: function(props, propName) {
        const prop = props[propName];

        if (prop) {
            //TODO: instead use: if (Object.prototype.toString.call(obj) == '[object Array]')
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
    isMaster: React.PropTypes.bool,
    onSelect: React.PropTypes.func
};

export default class PanelBarNavigation extends React.Component {
    mapComponents(children) {
        return React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return this.renderItem(child, index);
            }
            return child;
        });
    }

    renderItem(child, index) {
        const { children, onSelect } = this.props;

        return (
            <PanelBarItem {...child.props }
                index={index}
                isLast={children.length - 1 === index}
                itemKey={child.key}
                key={child.key}
                onSelect={onSelect}
            >
                {child.props.children}
            </PanelBarItem>
        );
    }

    render() {
        const { active, isMaster, children } = this.props;
        const items = this.mapComponents(children);

        const panelBarItemsClasses = classNames({
            [styles['panel']]: !isMaster,
            [styles['widget']]: isMaster,
            [styles['reset']]: isMaster,
            [styles['header']]: isMaster,
            [styles['panelbar']]: isMaster
        });

        const inlineStyles = {
            'display': active ? 'block' : 'none'
        };

        return (
            <ul className={panelBarItemsClasses} style={inlineStyles}>
                {items}
            </ul>
        );
    }
}

PanelBarNavigation.propTypes = propTypes;
