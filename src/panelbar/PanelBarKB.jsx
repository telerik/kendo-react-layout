import * as React from 'react';
import DataBoundPanelBar from './DataBoundPanelBar';
import * as utils from './util';
import keycode from 'keycode';

const propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    singleExpandMode: React.PropTypes.bool,
    onSelect: React.PropTypes.func
};

const defaultProps = {
    items: []
};

//TODO: rename. PanelBarActionHandler?
export default class PanelBarKB extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items.map((item) => Object.assign({}, item))
        };
    }

    componentWillReceiveProps(nextProps) {
        let newState = this.copyState(this.state);

        const itemsById = utils.mapItemsById(newState.items);

        //Map changes to current state:
        const newItems = nextProps.items.map(item => {
            const currentItem = itemsById[item.id];

            if (currentItem) {
                return Object.assign({}, item, {
                    focused: Boolean(currentItem.focused),
                    selected: Boolean(currentItem.selected)
                });
            }

            return item;
        });

        this.setState({
            items: newItems
        });
    }

    itemById = (items, id) => items.find((item) => item.id === id);
    findSelectedItem = (state) => state.find((item) => item.selected);
    findFocusedItem = (state) => state.find((item) => item.focused);

    copyState(state) {
        return {
            items: state.items.map((item) => Object.assign({}, item))
        };
    }

    removePreviousFocus(state) {
        const previouslyFocusedItem = this.findFocusedItem(state);

        if (previouslyFocusedItem) {
            previouslyFocusedItem.focused = false;
        }
    }

    focusItem(state, targetItem) {
        this.removePreviousFocus(state);

        targetItem.focused = true;
    }

    //TODO: remove settimeout:
    selectItem(state, targetItem) {
        const previouslySelectedItem = this.findSelectedItem(state);

        if (previouslySelectedItem) {
            previouslySelectedItem.selected = false;
        }

        targetItem.selected = true;

        const eventData = {
            id: targetItem.id,
            parentId: targetItem.parentId,
            expanded: targetItem.expanded
        };

        const onSelectDispatcher = this.onSelectDispatcher;

        //TODO: remove settimeout, currently required to preserve order
        setTimeout(function() {
            onSelectDispatcher(eventData);
        }, 0);
    }

    updateStateByKeyCode(state, keyCode, targetItem) {
        const keycodes = keycode.codes;

        switch (keyCode) {
        case keycodes.space:
        case keycodes.enter:
            this.selectItem(state, targetItem);

            break;
        case keycodes.up:
        case keycodes.left:
            targetItem.focused = false;
            utils.findPreviousItem(state, targetItem).focused = true;
            break;
        case keycodes.down:
        case keycodes.right:
            targetItem.focused = false;
            utils.findNextItem(state, targetItem).focused = true;
            break;
        case keycodes.home:
            targetItem.focused = false;
            utils.findFirstItem(state).focused = true;
            break;
        case keycodes.end:
            targetItem.focused = false;
            utils.findLastItem(state).focused = true;
            break;
        default:
        }
    }

    isSupportedKey(keyCode) {
        const allowedKeyCodes = [
            keycode.codes.up,
            keycode.codes.left,
            keycode.codes.down,
            keycode.codes.right,
            keycode.codes.space,
            keycode.codes.enter,
            keycode.codes.home,
            keycode.codes.end,
            keycode.codes.tab
        ];

        return allowedKeyCodes.indexOf(keyCode) > -1;
    }

    onKeyDown = event => {
        if (this.isSupportedKey(event.keyCode)) {
            let newState = this.copyState(this.state);
            const targetItem = newState.items.find((item) => item.focused);

            if (!targetItem) {
                utils.findFirstItem(newState.items).focused = true;
            } else {
                this.updateStateByKeyCode(newState.items, event.keyCode, targetItem);
            }

            this.setState(newState);
        }
    }

    onFocus = () => {
        let newState = this.copyState(this.state);
        const previousSelection = this.findSelectedItem(newState.items);

        if (previousSelection) {
            this.focusItem(newState.items, previousSelection);
        } else {
            const targetItem = utils.findFirstItem(newState.items);

            this.focusItem(newState.items, targetItem);
        }

        this.setState(newState);
    }

    onBlur = () => {
        let newState = this.copyState(this.state);

        this.removePreviousFocus(newState.items);

        this.setState(newState);
    }

    onSelect = event => {
        let newState = this.copyState(this.state);
        const targetItem = this.itemById(newState.items, event.id);

        this.focusItem(newState.items, targetItem);
        this.selectItem(newState.items, targetItem);

        this.setState(newState);
    }

    //TODO: Rename ?
    onSelectDispatcher = event => {
        if (this.props.onSelect) {
            this.props.onSelect(event);
        }
    };

    render() {
        return (
            <DataBoundPanelBar
                {...this.props }
                items={this.state.items}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                onKeyDown={this.onKeyDown}
                onSelect={this.onSelect}
            />
        );
    }
}

PanelBarKB.propTypes = propTypes;
PanelBarKB.defaultProps = defaultProps;
