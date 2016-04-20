---
title: Overview
page_title: Overview | Kendo UI PanelBar for React
description: "Use the Kendo UI PanelBar component in a React project."
slug: overview_panelbar_kendouiforreact
position: 1
---

# PanelBar Overview

The Kendo UI PanelBar for React is a component that displays hierarchical data as a multi-level, expandable component. It is designed as a stateless component, which means that to store its state and configuration options, you should use a high-order component.

The Kendo UI PanelBar for React is part of the Layout `npm` package of the Kendo UI suite for React.

**Figure 1: A template of the Kendo UI PanelBar for React**

//screen goes here - Vasko

1. Item header 
2. Item
3. Expand/Collapse arrow

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI PanelBar for React.

```html-preview

```
```jsx

```

## Configuration

### Items

By default, the PanelBar animates the appear and disappear of the PanelBarItems content. You can disable the animation by setting the [`animation`]({% slug api_panelbar_kendouiforreact %}#animation-booleandefault-true) option to `false`.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                expanded: false
            };

            const panelBarContainer = this;
            setInterval(function() {
                panelBarContainer.setState({
                    expanded: !panelBarContainer.state.expanded
                });
            },2000);
        }
        render() {
            return (
              <PanelBar>
                <PanelBarItem title="First item title (animated)" id="0"  animation={true} expanded={this.state.expanded}>
                    <PanelBarContent>
                        First item text
                    </PanelBarContent>
                </PanelBarItem>
                <PanelBarItem title="Second item Title (not animated)" id="1"  animation={false} expanded={this.state.expanded}>
                    <PanelBarContent>
                        Second item text
                    </PanelBarContent>
                </PanelBarItem>
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer/>,
        document.getElementById('app')
    );
```

By default, the PanelBar enables you to make its content appear by setting the [`expanded`]({% slug api_panelbar_kendouiforreact %}#expanded-booleandefault-false) option to `true`. When configured to `false`, it hides the content.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        render() {
            return (
              <PanelBar>
                <PanelBarItem title="First item title (expanded)" id="0" expanded={true}>
                    <PanelBarContent>
                        First item text
                    </PanelBarContent>
                </PanelBarItem>
                <PanelBarItem title="Second item Title (collapsed)" id="1" expanded={false}>
                    <PanelBarContent>
                        Second item text
                    </PanelBarContent>
                </PanelBarItem>
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

Setting the [`disabled`]({% slug api_panelbar_kendouiforreact %}#disabled-booleandefault-false) option from its default `false` configuration to `true` disables the selection and display of a PanelBar item. This means that its content cannot be expanded and the item cannot be selected.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        render() {
            return (
                <PanelBar>
                    <PanelBarItem title="First item title (enabled)" id="0" disabled={false}>
                        <PanelBarContent>
                            First item text
                        </PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem title="Second item Title (disabled)" disabled={true} id="1">
                        <PanelBarContent>
                            Second item text
                        </PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem title="Third item Title" id="2" (enabled) disabled={false}>
                        <PanelBarContent>
                            Third item text
                        </PanelBarContent>
                    </PanelBarItem>
                </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

The PanelBar enables you to add selected CSS styles to an item of your choice by configuring the [`selected`]({% slug api_panelbar_kendouiforreact %}#selected-booleandefault-false) option from its `false` setting to `true`.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        render() {
            return (
              <PanelBar>
                <PanelBarItem title="First item title (selected)" id="0" selected={true} />
                <PanelBarItem title="Second item Title" id="1" selected={false} />
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

The PanelBar enables you to add focused CSS styles to an item of your choice by configuring the [`focused`]({% slug api_panelbar_kendouiforreact %}#focused-booleandefault-false) option from its `false` setting to `true`.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        render() {
            return (
              <PanelBar>
                <PanelBarItem title="First item title (focused)" id="0" focused={true} />
                <PanelBarItem title="Second item Title" id="1" focused={false} />
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

The PanelBar enables you to set a title of your choice to any of its items. By default, the [`title`]({% slug api_panelbar_kendouiforreact %}#title-stringdefault-untitled) option is set to `untitled`.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        render() {
            return (
              <PanelBar>
                <PanelBarItem title="First item title" id="0" />
                <PanelBarItem title="Second item Title" id="1" />
                <PanelBarItem id="2" />
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

By setting the [`id`]({% slug api_panelbar_kendouiforreact %}#id-stringnumber) option of the PanelBar, you are able to determine the key of the item so it is uniquely identified between render passes. This setting is required.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        render() {
            return (
              <PanelBar>
                <PanelBarItem title="First item title" id="0"/>
                <PanelBarItem title="Second item Title" id="1"/>
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

### State

The PanelBar is designed as a stateless component. To store its state and configuration properties, wrap it in a high-order component.

The [`onSelect`]({% slug api_panelbar_kendouiforreact %}#onselect-function) event fires each time a user selects a PanelBar item. This is handled by the parent component.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: "0"
            };
        }
        onSelect = (e) => {
            this.setState({
                selected: e.id
            });
        };

        render() {
            return (
              <PanelBar onSelect={this.onSelect}>
                <PanelBarItem title="First item title" id="0" selected={this.state.selected == "0"} />
                <PanelBarItem title="Second item Title" id="1" selected={this.state.selected == "1"} />
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

The [`onKeyDown`]({% slug api_panelbar_kendouiforreact %}#onkeydown-function) event fires each time a user presses keyboard key and the component is focused.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: "",
                focused: ""
            };
        }
        onFocus = (e) => {
            this.setState({
                focused: "0"
            });
        };
        onKeyDown = (e) => {
            switch (e.keyCode) {
                case 32: //space
                case 13: //enter
                    var selected;

                    if (this.state.selected === "") {
                        selected = this.state.focused;
                    } else {
                        if (this.state.selected === this.state.focused) {
                            selected = "";
                        } else {
                            selected = this.state.focused;
                        }
                    }

                    this.setState({
                        selected: selected
                    });

                    e.preventDefault();

                    break;
                case 38: //up
                case 37: //left
                    var focusedId = parseInt(this.state.focused);
                    this.setState({
                        focused: focusedId > 0 ? focusedId - 1 : 0
                    });

                    e.preventDefault();

                    break;
                case 40: //down
                case 39: //right
                    var focusedId = parseInt(this.state.focused);
                    this.setState({
                        focused: focusedId < 2 ? focusedId + 1 : 2
                    });

                    e.preventDefault();

                    break;
                case 36: //home
                    this.setState({
                        focused: "0"
                    });

                    e.preventDefault();

                    break;
                case 35: //end
                    this.setState({
                       focused: "2"
                    });

                    e.preventDefault();

                    break;
            }
        };

        render() {
            return (
              <PanelBar onFocus={this.onFocus} onKeyDown={this.onKeyDown}>
                <PanelBarItem
                    title="First item title" id="0" 
                    focused={this.state.focused == "0"} 
                    selected={this.state.selected == "0"} 
                />
                <PanelBarItem 
                    title="Second item title" id="1" 
                    focused={this.state.focused == "1"} 
                    selected={this.state.selected == "1"} 
                />
                <PanelBarItem 
                    title="Third item title" id="2" 
                    focused={this.state.focused == "2"} 
                    selected={this.state.selected == "2"} 
                />
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

The [`onFocus`]({% slug api_panelbar_kendouiforreact %}#onfocus-function) event fires each time a user focus the component.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                focused: ""
            };
        }
        onFocus = (e) => {
            this.setState({
                focused: "0"
            });
        };
        onBlur = (e) => {
            this.setState({
                focused: ""
            });
        };

        render() {
            return (
              <PanelBar onFocus={this.onFocus} onBlur={this.onBlur}>
                <PanelBarItem title="First item title" id="0" focused={this.state.focused === "0"} />
                <PanelBarItem title="Second item Title" id="1" focused={this.state.focused == "1"} />
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

The [`onBlur`]({% slug api_panelbar_kendouiforreact %}#onblur-function) event fires each time a user blur the component (the focus is moved to another item on the page).

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                focused: ""
            };
        }
        onFocus = (e) => {
            this.setState({
                focused: "0"
            });
        };
        onBlur = (e) => {
            this.setState({
                focused: ""
            });
        };

        render() {
            return (
              <PanelBar onFocus={this.onFocus} onBlur={this.onBlur}>
                <PanelBarItem title="First item title" id="0" focused={this.state.focused === "0"} />
                <PanelBarItem title="Second item Title" id="1" focused={this.state.focused == "1"} />
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

## Accessibility

//TBD applicable? - The PanelBar is WAI ARIA-accessible through the `Tab` key. The `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` properties define the accessibility values when the user drags the handle of the Slider or interacts with the Slider through its buttons.

## Suggested Links

* [Client-Side API Reference for the Kendo UI PanelBar Component](https://github.com/telerik/kendo-react-inputs/blob/master/docs/panelbar/api.md)
