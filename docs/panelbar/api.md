---
title: API
page_title: API | Kendo UI PanelBar for React
description: "Configure and customize the Kendo UI PanelBar for React through its API reference."
slug: api_panelbar_kendouiforreact
position: 2
---

# PanelBar API

Represents the Kendo UI PanelBar component for React.

## Items

#### animation `Boolean`*(default: "true")*

Animates the content of the `PanelBarItem` on appear and disappear. When set to `false`, the nested content is not animated.

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

#### expanded `Boolean`*(default: "false")*

Makes the content of the `PanelBarItem` appear. When set to `false`, the nested content is not displayed.

#### disabled `Boolean`*(default: "false")*

Disables the `PanelBarItem`. The content of the item is collapsed and cannot be expanded, meaning that the `onSelect` event is not triggered.

#### selected `Boolean`*(default: "false")*

Adds the selected CSS styles to the items.

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

Adds the focused CSS styles to the items.

#### title `String`*(default: "Untitled")*

Sets the title of the PanelBar item.

#### id `String|Number`

Sets the key of the item so that it is uniquely identified between render passes. This option is required.

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

## Events

#### onSelect `Function`

As a stateless component, the PanelBar fires its `onSelect` event handler every time when a PanelBar item is selected. It is handled by the parent component.

#### onKeyDown `Function`

As a stateless component, the PanelBar fires its `onKeyDown` event handler every time when a keyboard key is pressed and the PanelBar is focused. It is handled by the parent component.

#### onFocus `Function`

As a stateless component, the PanelBar fires its `onFocus` event handler every time when the PanelBar is focused. It is handled by the parent component.

#### onBlur `Function`

As a stateless component, the PanelBar fires its `onBlur` event handler every time when the PanelBar is blurred. It is handled by the parent component.
