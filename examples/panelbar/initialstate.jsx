export default () => ({
    panelBarItems: [
        { id: 1, title: "My Teammates" },
        { id: 5, title: "Andrew Fuller", parentId: 1, content: "Team Lead" },
        { id: 7, title: "Nancy Leveling", parentId: 1, content: "Sales Associate" },
        { id: 8, title: "Robert King", parentId: 1, content: "Business System Analyst" },
        { id: 2, title: "Project", expanded: true },
        { id: 3, title: "New Business Plan", parentId: 2, selected: true },
        { id: 4, title: "Sales Forecast", parentId: 2, content: "Q1 - Q4 forecast", expanded: true },
        { id: 9, title: "Sales Reports", parentId: 2 },
        { id: 6, title: "Communication", disabled: true }
    ]
});