---
title: API
page_title: API | Kendo UI PanelBar for React
description: "Configure and customize the Kendo UI PanelBar for React through its API reference."
slug: api_panelbar_kendouiforreact
position: 2
---

# PanelBar API

Represents the Kendo UI PanelBar component for React.

## PanelBarItem

#### id `String|Number`

Allows the component to set the key attribute to each item. It is required and should be unique.

```jsx
    <PanelBar>
        <PanelBarItem title="First item title (animated)" id="0" disabled={true} >
            <PanelBarContent>
                First item text
            </PanelBarContent>
        </PanelBarItem>
        <PanelBarItem title="Second item Title (not animated)" id="1">
            <PanelBarContent>
                Second item text
            </PanelBarContent>
        </PanelBarItem>
    </PanelBar>
```

#### title `String`*(default: "Untitled")*

Sets the title of the PanelBar item.

#### className `String`

Renders additional class names on the item element, enclosing the item and its child content.

#### headerClassName `String`

Renders additional class names on the item header.

#### expanded `Boolean`*(default: "false")*

Expands the PanelBar items when set to `true`.

#### disabled `Boolean`*(default: "false")*

Disables PanelBar items when set to `true`.

#### selected `Boolean`*(default: "false")*

Sets the selected state to a PanelBar item.

```jsx
    <PanelBar>
        <PanelBarItem title="First item title (animated)" id="0" selected={true} >
            <PanelBarContent>
                First item text
            </PanelBarContent>
        </PanelBarItem>
        <PanelBarItem title="Second item Title (not animated)" id="1">
            <PanelBarContent>
                Second item text
            </PanelBarContent>
        </PanelBarItem>
    </PanelBar>
```

#### focused `Boolean`*(default: "false")*

Sets the focused state to a PanelBar item.

## Animation

#### animation `Boolean`*(default: "true")*

Animates the content of the PanelBar items on collapse and expand. When set to `false`, this behavior is disabled.

```jsx
    <PanelBar animation={false}>
        <PanelBarItem title="First item title" id="0" >
            <PanelBarContent>
                First item text
            </PanelBarContent>
        </PanelBarItem>
        <PanelBarItem title="Second item Title" id="1">
            <PanelBarContent>
                Second item text
            </PanelBarContent>
        </PanelBarItem>
    </PanelBar>
```

## Events

#### onSelect `Function`

Fires each time a user selects a PanelBar item. It is handled by the parent component.

#### onKeyDown `Function`

Fires each time a user presses a keyboard key and the component is focused. It is handled by the parent component.

#### onFocus `Function`

Fires each time a user focuses the component. It is handled by the parent component.

#### onBlur `Function`

Fires each time a user blurs the component and the focus is moved to another item on the page. It is handled by the parent component.
