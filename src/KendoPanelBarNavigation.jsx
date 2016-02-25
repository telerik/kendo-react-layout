import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import classNames from 'classnames';
import KendoPanelBarItem from "../src/KendoPanelBarItem.jsx";

export default class KendoPanelBarNavigation extends React.Component {
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
            <KendoPanelBarItem {...child.props }
                index={index}
                isLast={children.length - 1 === index}
                itemKey={child.key}
                key={child.key}
                onSelect={onSelect}
            >
                {child.props.children}
            </KendoPanelBarItem>
        );
    }

    render() {
        const { active, isMaster, children } = this.props;
        const items = this.mapComponents(children);

        const panelBarItemsClasses = classNames({
            'k-group': !isMaster,
            'k-panel': !isMaster,
            'k-widget': isMaster,
            'k-reset': isMaster,
            'k-header': isMaster,
            'k-panelbar': isMaster
        });

        const inlineStyles = {
            display: active ? "block" : "none"
        };

        return (
            <ul className={panelBarItemsClasses} style={inlineStyles}>
                {items}
            </ul>
        );
    }
}

KendoPanelBarNavigation.propTypes = {
    active: React.PropTypes.bool,
    children: function(props, propName) {
        const prop = props[propName];

        if (prop) {
            //TODO: instead use: if (Object.prototype.toString.call(obj) == '[object Array]')
            if (prop instanceof Array) {
                for (let value of prop) {
                    if (!value.type || value.type !== KendoPanelBarItem) {
                        return new Error('Navigation children should be either PanelBarItem or Array of PanelBarItem.');
                    }
                }
            } else {
                if (prop.type !== KendoPanelBarItem) {
                    return new Error('Navigation child should be either PanelBarItem or Array of PanelBarItem.');
                }
            }
        }
    },
    isMaster: React.PropTypes.bool,
    onSelect: React.PropTypes.func
};