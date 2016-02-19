import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import classNames from 'classnames';
import KendoPanelBarItem from "../src/KendoPanelBarItem.jsx";

export default class KendoPanelBarNavigation extends React.Component {
    mapComponents(props) {
        let { children } = props;
        return React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return this.renderItem(child, index);
            }
            return child;
        });
    }

    renderItem(child, index) {
        let { children } = this.props;
        let isLast = children.length - 1 === index;

        return (
            <KendoPanelBarItem {...child.props } index={index} isLast={isLast}>{child.props.children}</KendoPanelBarItem>
        );
    }

    render() {
        const items = this.mapComponents(this.props);

        const panelBarItemsClasses = classNames({
            'k-group': true,
            'k-panel': true
        });

        const inlineStyles = {
            display: this.props.active ? "block" : "none"
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
    }
};