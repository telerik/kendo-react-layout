import constants from './../constants';
import initialState from './../initialstate';

const getItemById = (items, id) => items.find((item) => item.id === id);

function selectItem(state, targetItem) {
    const previouslySelectedItem = state.find((item) => item.selected);

    if (previouslySelectedItem) {
        previouslySelectedItem.selected = false;
    }

    targetItem.selected = true;
}

export function multipleExpand(state, action) {
    if (action.type === constants.SELECT) {
        let newState = state.map((item) => Object.assign({ }, item));
        const targetItem = getItemById(newState, action.id);

        selectItem(newState, targetItem);

        targetItem.expanded = !action.expanded;

        return newState;
    }

    return state || initialState().panelBarItems;
}

export function singleExpand(state, action) {
    if (action.type === constants.SELECT) {
        let newState = state.map((item) => Object.assign({ }, item));
        const targetItem = getItemById(newState, action.id);

        selectItem(newState, targetItem);

        const parentId = targetItem.parentId || null;
        const itemsForUpdate = newState.filter(function(item) {
            return (item.parentId || null) === parentId;
        });

        itemsForUpdate.forEach((item) => {
            item.expanded = item.id === targetItem.id;
        });

        return newState;
    }

    return state || initialState().panelBarItems;
}