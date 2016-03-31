import * as React from 'react';

import styles from '@telerik/kendo-theme-default/styles/panelbar/main';

import classNames from 'classnames';
import PanelBarItem from './PanelBarItem';

const propTypes = {
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
    expanded: React.PropTypes.bool,
    isMaster: React.PropTypes.bool,
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
    mapComponents(props) {
        return React.Children.map(props.children, (child) => {
            if (React.isValidElement(child)) {
                return this.renderItem(child);
            }
        });
    }

    renderItem(child) {
        const itemProps = {
            ...child.props,
            onSelect: this.props.onSelect,
            parentId: this.props.parentId
        };

        return (<PanelBarItem {...itemProps} />);
    }

    render() {
        const { expanded, isMaster, ...others } = this.props;

        const panelBarItemsClasses = classNames({
            [styles['panel']]: !isMaster,
            [styles['widget']]: isMaster,
            [styles['reset']]: isMaster,
            [styles['header']]: isMaster,
            [styles['panelbar']]: isMaster
        });

        const inlineStyles = {
            'display': expanded ? 'block' : 'none'
        };

        let props = {
            ...others,
            style: inlineStyles,
            className: panelBarItemsClasses
        };

        return (
            <ul {...props }>
                {this.mapComponents(this.props)}
            </ul>
        );
    }
}

PanelBarNavigation.propTypes = propTypes;
