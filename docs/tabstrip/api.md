---
title: API
page_title: API | Kendo UI Tabstrip for React
description: "Configure and customize the Kendo UI Tabstrip for React through its API reference."
slug: api_tabstrip_kendouiforreact
position: 2
---

# Tabstrip API

Represents the Kendo UI Tabstrip component for React.

## Animation

#### animation `boolean` *(default: true)*

Enables or disables animation for the tabs.

```jsx
    <KendoReactLayout.Tabstrip animation={false}>
        <Tab title="Tab1">
            First tab content
        </Tab>
        <Tab title="Tab2">
            Second tab content
        </Tab>
    </KendoReactLayout.Tabstrip>
```

## Tabs

#### title `String`

Sets the title of a tab. Used as an attribute on a Tab.

#### tabPosition `String` *(default: 'top')*

Sets the position of the navigation tabs. Can be set to `top`, `bottom`, `left` and `right`.

```jsx
    <KendoReactLayout.Tabstrip tabPosition={"right"}>
        <Tab title="Tab1">
            First tab content
        </Tab>
        <Tab title="Tab2">
            Second tab content
        </Tab>
    </KendoReactLayout.Tabstrip>
```

#### selected `Number` *(default: 1)*

Determines which tab to be selected upon the initial loading of the Tabstrip.

#### disabled `Attribute`

Disables a tab. Used as an attribute on a Tab.

```jsx
    <KendoReactLayout.Tabstrip>
        <Tab title="Tab1" disabled>
            First tab content
        </Tab>
        <Tab title="Tab2">
            Second tab content
        </Tab>
    </KendoReactLayout.Tabstrip>
```

## Events

#### onSelect `Function`

The event is called each time a new tab is selected, and includes the index of the selected tab as an argument.
