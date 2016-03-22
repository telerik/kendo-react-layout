---
title: Client-Side API
page_title: Client-Side API | Kendo UI PanelBar for React
description: "Configure and customize the Kendo UI Slider for React through its client-side API reference."
slug: api_slider_kendouiforreact
position: 2
---

# PanelBar

Represents the Kendo UI PanelBar for React component.

## Items

#### expanded `Boolean`*(default: "false")*

Makes the PanelBarItem content to appear. When set to `false` the nested components are not displayed.

#### disabled `Boolean`*(default: "false")*

Disable the PanelBarItem. In this case the content of the item is collapsed and the user cannot expand it (the "onSelect" event is not triggered).

#### selected `Boolean`*(default: "false")*

Adds the selected CSS styles to the items.

#### title `String`*(default: "Untitled")*

Sets the title of the item.

#### id `String|Number`

Sets the key of the item in order to be uniquely identified between render passes. 

## State

#### onSelect `Function`

As a stateless component the PanelBar will fire its onSelect event handler every time when item of PanelBar is selected. It should be handled by the parent component.