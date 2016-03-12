import * as React from 'react';
import TabstripNavigationItem from './TabstripNavigationItem';
import styles from '@telerik/kendo-theme-default/styles/main';

const propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    onSelect: React.PropTypes.func,
    selected: React.PropTypes.number
};

export default class TabstripNavigation extends React.Component {
    mapComponents(props) {
        let { children } = props;
        return React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return this.renderTab(child, index);
            }
            return child;
        });
    }
    select = (index) => {
        this.props.onSelect(index);
    }

    renderTab(child, index) {
        let { selected } = this.props;
        let tabProps = {
            index,
            active: selected === index,
            title: child.props.title,
            disabled: child.props.disabled,
            onSelect: this.select
        };

        return (
          <TabstripNavigationItem {...tabProps } />
        );
    }

    render() {
        const tabs = this.mapComponents(this.props);
        const navClasses = [
            styles['tabstrip-items'],
            styles['reset']
        ].join(" ");

        return (
            <ul className={navClasses}>
                {tabs}
            </ul>
        );
    }
}

TabstripNavigation.propTypes = propTypes;
