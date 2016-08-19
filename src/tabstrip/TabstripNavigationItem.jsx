import * as React from 'react';
import classNames from 'classnames';

class TabstripNavigationItem extends React.Component {

    onClick = () => {
        this.props.onSelect(this.props.index);
    };

    render() {
        const { active, disabled, title = 'Untitled' } = this.props;
        let props = {
            'aria-selected': active,
            'tabIndex': active ? 0 : -1,
            'role': 'tab'
        };

        const itemClasses = classNames({
            ['k-item']: true,
            ['k-state-default']: !(disabled || active),
            ['k-state-disabled']: disabled,
            ['k-state-active']: active,
            ['k-tab-on-top']: active
        });

        if (!disabled) {
            Object.assign(props, {
                onClick: this.onClick
            });
        }
        return (

            <li {...props} className={itemClasses}>
                <span className="k-link">{title}</span>
            </li>
        );
    }
}

TabstripNavigationItem.propTypes = {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    index: React.PropTypes.number,
    onSelect: React.PropTypes.func,
    title: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
};

export default TabstripNavigationItem;
