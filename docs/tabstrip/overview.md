---
title: Overview
page_title: Overview | Kendo UI TabStrip for React
description: "Use the Kendo UI TabStrip component in a React project."
slug: overview_tabstrip_kendouiforreact
position: 1
---

# TabStrip Overview

The Kendo UI TabStrip displays a collection of tabs with associated content, which allow the user to open many pages inside a single window. Each tab represents a separate location and by selecting a particular tab, the user navigates between the tab pages.  

The Kendo UI TabStrip component for React is part of the Layout `npm` package of the Kendo UI suite for React.

**Figure 1: A template of the Kendo UI TabStrip for React**

//TODO: template screen, parts indicated

1. tab titles 
2. tab page
3. tab title row

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI TabStrip component for React.

```html-preview
  //code
```
```jsx

```

## Configuration

### Tab Titles

Each tab displays a title prompting the content of the tab page, which is set through the `title` property.

```html
  //code
```
```jsx

```

Apart from text elements, a tab title is also able to accommodate an image to add visual context to the tab page content. Indicate the image source by setting the `imageUrl` property.

```html
  //code
```
```jsx

```

### Tabs on Initial Loading

The TabStrip enables you to display a particular tab upon its initial loading, which is set through the `selected` property.

```html
  //code
```
```jsx

```

### Disabled Tabs

The TabStrip provides the option for specific tabs to be inactive so that the user is not able to click on them. Disable tabs by adding the `disabled` property to the configuration.

```html
  //code
```
```jsx

```

### Remote Content

The TabStrip provides an option for you to display content from a remote source by handling the `fetch` event.

```html
  //code
```
```jsx

```

### State

The TabStrip component enables you to define the behavior of the tabs upon selection. The `onSelect` event fires each time a user interacts with a tab. The new value is then passed as an argument to the `onSelect` callback.

```html
  //code
```
```jsx

```

For detailed information on the Kendo UI TabStrip for React configuration, refer to its [client-side API documentation]({% slug api_tabstrip_kendouiforreact %}).

## Keyboard Navigation (any?)

Below is the list with the keyboard shortcuts the TabStrip supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Tab`                               | (Accessibility mode) Focus the handle element. |

## Accessibility

The TabStrip is WAI ARIA-accessible through the `Tab` key. The `aria-expanded` property defines ...
