import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import KendoPanelBarItem from "../src/KendoPanelBarItem.jsx";
import classNames from 'classnames';

export default class KendoPanelBar extends React.Component {
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

        let panelProps = {
            index,
            isLast: children.length - 1 === index,
            title: child.props.title,
            active: child.props.active,
            disabled: child.props.disabled,
            selected: child.props.selected
        };

        return (
            <KendoPanelBarItem {...panelProps }>{child.props.children}</KendoPanelBarItem>
        );
    }

    render() {
        const items = this.mapComponents(this.props);

        const panelBarClasses = classNames({
            'k-widget': true,
            'k-reset': true,
            'k-header': true,
            'k-panelbar': true
        });

        //TODO: Give keys to children
        return (
            <ul className={panelBarClasses}>
                {items}
            </ul>
        );
    }
}

KendoPanelBar.propTypes = {
    children: function(props, propName) {
        const prop = props[propName];

        if (prop) {
            //TODO: instead use: if (Object.prototype.toString.call(obj) == '[object Array]')
            if (prop instanceof Array) {
                for (let value of prop) {
                    if (!value.type || value.type !== KendoPanelBarItem) {
                        return new Error('KendoPanelBar children should be either PanelBarItem or Array of PanelBarItem.');
                    }
                }
            } else {
                if (prop.type !== KendoPanelBarItem) {
                    return new Error('KendoPanelBar child should be either PanelBarItem or Array of PanelBarItem.');
                }
            }
        }
    }
};

