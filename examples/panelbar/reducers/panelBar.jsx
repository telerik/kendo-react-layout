import constants from './../constants';
import keycode from 'keycode';
import initialState from './../initialstate';
import * as util from './../../../src/panelbar/util';

const itemById = (items, id) => items.find((item) => item.id === id);
const findSelectedItem = (state) => state.find((item) => item.selected);
const findFocusedItem = (state) => state.find((item) => item.focused);

function selectItem(state, targetItem) {
    const previouslySelectedItem = findSelectedItem(state);

    if (previouslySelectedItem) {
        previouslySelectedItem.selected = false;
    }

    targetItem.selected = true;
}

function focusItem(state, targetItem) {
    removePreviousFocus(state);

    targetItem.focused = true;
}

function copyState(state) {
    return state.map((item) => Object.assign({}, item));
}

function removePreviousFocus(state) {
    const previouslyFocusedItem = findFocusedItem(state);

    if (previouslyFocusedItem) {
        previouslyFocusedItem.focused = false;
    }
}

function expandItem(state, targetItem, isSingleExpand) {
    if (isSingleExpand) {
        util.findCurrentLevelItems(targetItem, state).forEach((item) => {
            item.expanded = item.id === targetItem.id;
        });
    } else {
        targetItem.expanded = !targetItem.expanded;
    }
}

function updateStateByKeyCode(state, keyCode, targetItem, isSingleExpand) {
    const keycodes = keycode.codes;

    switch (keyCode) {
        case keycodes.space:
        case keycodes.enter:
            selectItem(state, targetItem);

            expandItem(state, targetItem, isSingleExpand);

            break;
        case keycodes.up:
        case keycodes.left:
            targetItem.focused = false;
            util.findPreviousItem(state, targetItem).focused = true;
            break;
        case keycodes.down:
        case keycodes.right:
            targetItem.focused = false;
            util.findNextItem(state, targetItem).focused = true;
            break;
        case keycodes.home:
            targetItem.focused = false;
            util.findFirstItem(state).focused = true;
            break;
        case keycodes.end:
            targetItem.focused = false;
            util.findLastItem(state).focused = true;
            break;
    }
}

function isSupportedKey(keyCode) {
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

function handleActionByExpandMode(state, action, isSingleExpandMode) {
    if (action.type === constants.SELECT) {
        let newState = copyState(state);
        const targetItem = itemById(newState, action.id);

        selectItem(newState, targetItem);
        focusItem(newState, targetItem);
        expandItem(newState, targetItem, false);

        return newState;
    }

    if (action.type === constants.KEY_DOWN && isSupportedKey(action.keyCode)) {
        let newState = copyState(state);
        const targetItem = newState.find((item) => item.focused);

        if (!targetItem) {
            util.findFirstItem(newState).focused = true;

            return newState;
        }

        updateStateByKeyCode(newState, action.keyCode, targetItem, isSingleExpandMode);

        return newState;
    }


    if (action.type === constants.FOCUS) {
        let newState = copyState(state);
        const previousSelection = findSelectedItem(newState);

        if (previousSelection) {
            focusItem(newState, previousSelection);

            return newState;
        }

        const targetItem = util.findFirstItem(newState);
        focusItem(newState, targetItem);

        return newState;
    }

    if (action.type === constants.BLUR) {
        let newState = copyState(state);

        removePreviousFocus(newState);

        return newState;
    }

    return state || initialState().panelBarItems;
}

export function multipleExpand(state, action) {
    return handleActionByExpandMode(state, action, false);
}

export function singleExpand(state, action) {
    return handleActionByExpandMode(state, action, true);
}