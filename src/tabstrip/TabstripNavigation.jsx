import * as React from 'react';
import TabstripNavigationItem from './TabstripNavigationItem';
import styles from '@telerik/kendo-theme-default/styles/tabstrip/main';

const propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    onSelect: React.PropTypes.func,
    selected: React.PropTypes.number
};

const times = (count) => Array.apply(null, Array(count));

const TabstripNavigation = (props) => {
    const {
        selected,
        children,
        onSelect
    } = props;

    const tabsCount = children.length;

    const tabs = times(tabsCount)
        .map((item, index, array) => ({
            first: index === 0,
            last: index === array.length - 1
        }))
        .map((props, index) => {
            const tabProps = {
                active: selected === index,
                disabled: children[index].props.disabled,
                index,
                title: children[index].props.title,
                onSelect
            };
            return (<TabstripNavigationItem
                key={index}
                {...tabProps}
                    />);
        });

    const navClasses = [
        styles['tabstrip-items'],
        styles['reset']
    ].join(" ");

    return (
        <ul className={navClasses}>
            {tabs}
        </ul>
    );
};

TabstripNavigation.propTypes = propTypes;

export default TabstripNavigation;
