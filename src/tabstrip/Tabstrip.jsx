import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/packages/layout';
import TabstripNavigation from './TabstripNavigation';
import TabstripContent from './TabstripContent';
import keycode from 'keycode';
import classNames from 'classnames';

const propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    onSelect: React.PropTypes.func,
    selected: React.PropTypes.number,
    style: React.PropTypes.object,
    tabPosition: React.PropTypes.string
};

class Tabstrip extends React.Component {
    onSelect = (index) => {
        if (index === this.props.selected ) { return; }
        this.props.onSelect({
            selected: index
        });
    }

    onKeyDown = (event) => {
        const handler = this.keyBinding[event.keyCode];
        if (handler) {
            this.onSelect(handler());
        }
    }

    nextNavigatableTab() {
        const { children, selected } = this.props;
        const index = selected + 1;

        if (index >= children.length) {
            return selected;
        }

        for ( let i = index; i < children.length; i++ ) {
            if (!children[i].props.disabled) {
                return i;
            }
        }
    }

    prevNavigatableTab() {
        const { children, selected } = this.props;
        const index = selected - 1;

        if (index < 0) {
            return selected;
        }

        for ( let i = index; i > -1; i-- ) {
            if (!children[i].props.disabled) {
                return i;
            }
        }
    }

    renderContent(tabProps) {
        const { selected, children, style } = this.props;

        const contentProps = {
            ...tabProps,
            style
        };

        if (selected < children.length && selected > -1) {
            return (
                <TabstripContent {...contentProps} />
            );
        }
        return null;
    }

    keyBinding = {
        [keycode.codes.left]: () => this.prevNavigatableTab(),
        [keycode.codes.right]: () => this.nextNavigatableTab(),
        [keycode.codes.down]: () => this.nextNavigatableTab(),
        [keycode.codes.up]: () => this.prevNavigatableTab(),
        [keycode.codes.home]: () => 0,
        [keycode.codes.end]: () => this.props.children.length - 1
    };

    render() {
        const tabProps = {
            ...this.props,
            selected: this.props.selected,
            onSelect: this.onSelect
        };

        const bottom = this.props.tabPosition === 'bottom';

        const componentClasses = classNames({
            [styles['widget']]: true,
            [styles['header']]: true,
            [styles['floatwrap']]: true,
            [styles['tabstrip']]: true,
            [styles['tabstrip-left']]: this.props.tabPosition === 'left',
            [styles['tabstrip-right']]: this.props.tabPosition === 'right',
            [styles['tabstrip-bottom']]: this.props.tabPosition === 'bottom'
        });

        const { width } = this.props.style || {};

        return (
            <div className={componentClasses} onKeyDown={this.onKeyDown} style={{ width: width }}>
                {!bottom && <TabstripNavigation {...tabProps} />}
                {this.renderContent(tabProps)}
                {bottom && <TabstripNavigation {...tabProps} />}
            </div>
      );
    }
  }
Tabstrip.propTypes = propTypes;
Tabstrip.Tab = () => { /* metadata object */ };

export default Tabstrip;
