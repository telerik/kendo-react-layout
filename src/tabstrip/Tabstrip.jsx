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
    onSelect = (index) => {
        if (index === this.props.selected ) { return; }
        this.props.onSelect({
            selected: index
        });
    }

    onKeyDown = (event) => {
        const handler = this.keyBinding[event.keyCode];
        if (handler) {
            const next = handler();
            this.onSelect(next);
        }
    }

    moveNext(moveNext) {
        let nextPosition = null;
        const { children, selected } = this.props;

        if (moveNext) {
            nextPosition = this.findNextNavigatable(children, selected);
        } else {
            nextPosition = this.findPrevNavigatable(children, selected);
        }
        return nextPosition;
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

    findNextNavigatable(children, selected) {
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

    findPrevNavigatable(children, selected) {
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

    renderContent() {
        const { selected, children } = this.props;

        const content = children[selected];

        if (content && content.props.disabled) {
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
