import * as React from 'react';
import PanelBarItem from './../../src/panelbar/PanelBarItem';
import PanelBarNavigation from './../../src/panelbar/PanelBarNavigation';
import PanelBarContent from './../../src/panelbar/PanelBarContent';

export function mapDataToComponents(map, parentId = null) {
    const items = (map[parentId] || []).map(item => {
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
            disabled: item.disabled
        };

        return (<PanelBarItem {...childProps} key={item.id} />);
    });

    return items;
}

export function mapItemsByParentId(items) {
    return items.reduce((itemsByParentId, item) => {
        const parentId = item.parentId || null;

        itemsByParentId[parentId] = itemsByParentId[parentId] || [];
        itemsByParentId[parentId].push(item);

        return itemsByParentId;
    }, {});
}