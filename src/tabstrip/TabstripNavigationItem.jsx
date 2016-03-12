import * as React from 'react';
import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/main';

const propTypes = {
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    index: React.PropTypes.number,
    onSelect: React.PropTypes.func,
    title: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
};

export default class TabstripNavigationItem extends React.Component {
    onSelect = () => {
        this.props.onSelect(this.props.index);
    }
    render() {
        const { title = 'Untitled', active, disabled } = this.props;
        let props = {
            'aria-selected': active,
            'tabIndex': active ? 0 : -1,
            'role': 'tab'
        };

        if (!disabled) {
            Object.assign(props, {
                onClick: this.onSelect
            });
        }

        let itemClasses = classNames({
            [styles['item']]: true,
            [styles['state-default']]: !(disabled || active),
            [styles['state-disabled']]: disabled,
            [styles['state-active']]: active,
            [styles['tab-on-top']]: active
        });

        return (
            <li {...props} className={itemClasses}>
                <span className="k-link">{title}</span>
            </li>
        );
    }
}

TabstripNavigationItem.propTypes = propTypes;
