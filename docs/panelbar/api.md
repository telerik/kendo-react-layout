---
title: Client-Side API
page_title: Client-Side API | Kendo UI PanelBar for React
description: "Configure and customize the Kendo UI PanelBar for React through its client-side API reference."
slug: api_panelbar_kendouiforreact
position: 2
---

# PanelBar

Represents the Kendo UI PanelBar component for React.

## Items

#### expanded `Boolean`*(default: "false")*

Makes the content of the `PanelBarItem` to appear. When set to `false`, the nested content is not displayed.

#### disabled `Boolean`*(default: "false")*

Disables the `PanelBarItem`. The content of the item is collapsed and cannot be expanded, meaning that the `onSelect` event is not triggered.

#### selected `Boolean`*(default: "false")*

Adds the selected CSS styles to the items.

#### title `String`*(default: "Untitled")*

Sets the title of the PanelBar item.

#### id `String|Number`

Sets the key of the item so that it is uniquely identified between render passes.

## State

#### onSelect `Function`

As a stateless component, the PanelBar fires its `onSelect` event handler every time when a PanelBar item is selected. It is handled by the parent component.

#### onKeyDown `Function`

...

#### onFocus `Function`

...

#### onBlur `Function`

...
