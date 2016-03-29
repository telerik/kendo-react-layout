export default () => ({
    panelBarItems: [
        { id: 1, title: "1", expanded: true },
        { id: 5, title: "1.1", parentId: 1, content: "1.1 content" },
        { id: 2, title: "2", expanded: true },
        { id: 3, title: "2.1", parentId: 2, content: "2.1 content", selected: true },
        { id: 4, title: "2.2", parentId: 2, content: "2.2 content", expanded: true },
        { id: 6, title: "2.3", parentId: 2, content: "2.3 content", disabled: true }
    ]
});