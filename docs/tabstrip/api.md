---
title: Client-Side API
page_title: Client-Side API | Kendo UI TabStrip for React
description: "Configure and customize the Kendo UI TabStrip for React through its client-side API reference."
slug: api_tabstrip_kendouiforreact
position: 2
---

# TabStrip Client-Side API

Represents the Kendo UI TabStrip component for React.

## Animation

#### animation `boolean` *(default: true)*

Enables or disables animation for the tabs.

## Tabs

#### title `String`

Sets the title of a tab. Used as an attribute on a Tab.

#### tabPosition `String` *(default: 'top')*

Sets the position of the navigation tabs. Can be set to `top`, `bottom`, `left` and `right`.

#### selected `Number` *(default: 1)*

Determines which tab to be selected upon the initial loading of the TabStrip.

#### disabled `Attribute`

Disables a tab. Used as an attribute on a Tab.

## State

#### onSelect `Function`

The event is called each time a new tab is selected, and includes the index of the selected tab as an argument.
