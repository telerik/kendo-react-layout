import * as React from 'react';
import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/tabstrip/main';

const TabstripNavigationItem = ({ onSelect, active, disabled, title = 'Untitled', index }) => {
    let props = {
        'aria-selected': active,
        'tabIndex': active ? 0 : -1,
        'role': 'tab'
    };

    let itemClasses = classNames({
        [styles['item']]: true,
        [styles['state-default']]: !(disabled || active),
        [styles['state-disabled']]: disabled,
        [styles['state-active']]: active,
        [styles['tab-on-top']]: active
    });

    const onClick = () => {
        onSelect(index);
    };

    if (!disabled) {
        Object.assign(props, {
            onClick: onClick
        });
    }

    return (
        <li {...props} className={itemClasses}>
            <span className="k-link">{title}</span>
        </li>
    );
};

TabstripNavigationItem.propTypes = {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    title: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
};

export default TabstripNavigationItem;
