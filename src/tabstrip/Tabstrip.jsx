import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/tabstrip/main';
import TabstripNavigation from './TabstripNavigation';
import TabstripContent from './TabstripContent';
import keycode from 'keycode';

const propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    onSelect: React.PropTypes.func,
    selected: React.PropTypes.number
};

class Tabstrip extends React.Component {
    constructor(props) {
        super(props);
        this.keyDownHandler = this.handleKeyDown;
    }

    onSelect = (index) => {
        if (index === this.props.selected ) { return; }
        const disabled = this._disabled(index);
        if (!disabled) {
            this.props.onSelect({
                selected: index
            });
        }
    }

    onKeyDown = (event) => {
        const handler = this.keyBinding[event.keyCode];
        if (handler) {
            const next = handler();
            this.onSelect(next);
        }
    }

    _disabled(position) {
        let disabledIndex;
        if (this.props.children.length) {
            this.props.children.map((tab, index) => {
                if (tab.props.disabled) {
                    disabledIndex = index;
                }
            });
        }

        if (disabledIndex === position) {
            return true;
        }
        return false;
    }

    moveNext(moveNext) {
        let next = null;
        const { children, selected } = this.props;

        if (moveNext) {
            next = selected + 1 > children.length - 1 ? selected : selected + 1;
        } else {
            next = selected - 1 > -1 ? selected - 1 : selected;
        }
        return next;
    }

    moveEnd(end) {
        let next = null;

        if (end) {
            next = this.props.children.length - 1;
        } else {
            next = 0;
        }
        return next;
    }

    renderContent() {
        const { selected, children } = this.props;

        if (this._disabled(selected)) {
            return false;
        }

        if (selected < children.length && selected > -1) {
            return true;
        }

        return false;
    }

    keyBinding = {
        [keycode.codes.left]: () => this.moveNext(false),
        [keycode.codes.right]: () => this.moveNext(true),
        [keycode.codes.down]: () => this.moveNext(true),
        [keycode.codes.up]: () => this.moveNext(false),
        [keycode.codes.home]: () => this.moveEnd(false),
        [keycode.codes.end]: () => this.moveEnd(true)
    };

    render() {
        const tabProps = {
            ...this.props,
            selected: this.props.selected,
            onSelect: this.onSelect
        };
        const componentClasses = [
            styles['widget'],
            styles['header'],
            styles['floatwrap'],
            styles['tabstrip']
        ].join(" ");

        return (
            <div className={componentClasses} onKeyDown={this.onKeyDown}>
                <TabstripNavigation {...tabProps} />
                {this.renderContent() && <TabstripContent {...tabProps} />}
            </div>
      );
    }
  }
Tabstrip.propTypes = propTypes;
Tabstrip.Tab = () => { /* metadata object */ };

export default Tabstrip;
