---
title: Overview
page_title: Overview | Kendo UI PanelBar for React
description: "Use the Kendo UI PanelBar component in a React project."
slug: overview_panelbar_kendouiforreact
position: 1
---

# PanelBar Overview (draft)

The Kendo UI PanelBar for React is a component that displays hierarchical data as a multi-level, expandable component. It is designed as a stateless component, which means that to store its state and configuration options, you should use a high-order component.

The Kendo UI PanelBar for React is part of the Layout `npm` package of the Kendo UI suite fro React. 

**Figure 1: A template of the Kendo UI PanelBar for React**

//screen goes here - Vasko

1. Item header | 2. Item | 3. Expand/Collapse arrow

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Slider for React.

```html-preview

```
```jsx

```

## Configuration

### Items 

By default, the PanelBar enables you to make its content appear by setting the `expanded` option to `true`. When configured to `false`, it hides the content. 

```html
  
```
```jsx

```

Setting the `disabled` option from its default `false` configuration to `true` disables the display of a PanelBar item. Thsi means that its content cannot be exapnded.  

```html
  
```
```jsx

```

The PanelBar enables you to add selected CSS styles to an item of your choice by configuring the `selected` option from its `false` setting to `true`.

```html
  
```
```jsx

```

The PanelBar enables you to set a title of your choice to any of its items. By default, the `title` option is set to `untitled`. 

```html
  
```
```jsx

```

By setting the `id` option of the PanelBar, you are able to determine the key of the item so it is uniquely identified between render passes. 

```html
  
```
```jsx

```

### State

The PanelBar is designed as a stateless component. To store its state and configuration properties, wrap it in a high-order component.

The `onChange` event fires each time a user selects a PanelBar item. This is handled by the parent component. 

```html
  
```
```jsx

```

## Keyboard Navigation

//TBD applicabel? - Below is the list with the keyboard shortcuts the PanelBar supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
|                                     |                     |

## Accessibility

//TBD applicable? - The PanelBar is WAI ARIA-accessible through the `Tab` key. The `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` properties define the accessibility values when the user drags the handle of the Slider or interacts with the Slider through its buttons.

## Suggested Links

* [Client-Side API Reference for the Kendo UI PanelBar Component](https://github.com/telerik/kendo-react-inputs/blob/master/docs/panelbar/api.md)
