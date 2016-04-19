import * as React from 'react';
import PanelBarItem from './../../src/panelbar/PanelBarItem';
import PanelBarNavigation from './../../src/panelbar/PanelBarNavigation';
import PanelBarContent from './../../src/panelbar/PanelBarContent';

export function mapDataToComponents(map, parentId = null) {
    return (map[parentId] || []).map(item => {
        let child;

        if (map[item.id]) {
            child = (<PanelBarNavigation>
                {mapDataToComponents(map, item.id)}
            </PanelBarNavigation>);
        } else if (item.content) {
            child = (<PanelBarContent>
                <div>{item.content}</div>
            </PanelBarContent>);
        }

        const childProps = {
            children: child,
            expanded: item.expanded,
            id: item.id,
            selected: item.selected,
            title: item.title,
            disabled: item.disabled,
            focused: item.focused
        };

        return (<PanelBarItem {...childProps} />);
    });
}

export function mapItemsByParentId(items) {
    return items.reduce((itemsByParentId, item) => {
        const parentId = item.parentId || null;

        itemsByParentId[parentId] = itemsByParentId[parentId] || [];
        itemsByParentId[parentId].push(item);

        return itemsByParentId;
    }, {});
}

export function findPreviousItem(state, targetItem) {
    const flattedItems = flatVisibleItems(mapItemsByParentId(state));

    const currentIndex = flattedItems.findIndex(item => item.id === targetItem.id);

    return flattedItems[currentIndex > 0 ? currentIndex - 1 : 0];
}

export function findNextItem(state, targetItem) {
    const flattedItems = flatVisibleItems(mapItemsByParentId(state));

    const currentIndex = flattedItems.findIndex(item => item.id === targetItem.id);

    return flattedItems[(currentIndex + 1) < flattedItems.length ? (currentIndex + 1) : currentIndex];
}

export function findFirstItem(state) {
    return state[state.findIndex(item => (item.parentId === null || item.parentId === undefined) && !item.disabled)];
}

export function findLastItem(state) {
    const flattedItems = flatVisibleItems(mapItemsByParentId(state));

    return flattedItems[flattedItems.length - 1];
}

export function findCurrentLevelItems(targetItem, newState) {
    return newState.filter((item) => item.parentId === targetItem.parentId);
}

export function flatVisibleItems(map, flattedItems = [], parentId = null) {
    (map[parentId] || []).forEach(item => {
        if (!item.disabled) {
            flattedItems.push(item);
            if (map[item.id] && item.expanded) {
                flatVisibleItems(map, flattedItems, item.id);
            }
        }
    });

    return flattedItems;
}