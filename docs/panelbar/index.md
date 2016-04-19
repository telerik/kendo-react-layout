---
title: Overview
page_title: Overview | Kendo UI PanelBar for React
description: "Use the Kendo UI PanelBar component in a React project."
slug: overview_panelbar_kendouiforreact
position: 1
---

# PanelBar Overview (draft)

The Kendo UI PanelBar for React is a component that displays hierarchical data as a multi-level, expandable component. It is designed as a stateless component, which means that to store its state and configuration options, you should use a high-order component.

The Kendo UI PanelBar for React is part of the Layout `npm` package of the Kendo UI suite for React.

**Figure 1: A template of the Kendo UI PanelBar for React**

//screen goes here - Vasko

*1. Item header | 2. Item | 3. Expand/Collapse arrow*

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI PanelBar for React.

```html-preview

```
```jsx

```

## Configuration

### Items

By default, the PanelBar enables you to make its content appear by setting the [`expanded`](https://github.com/telerik/kendo-react-layout/blob/master/docs/panelbar/api.md#expanded-booleandefault-false) option to `true`. When configured to `false`, it hides the content.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                expanded: "0"
            };
        }
        onSelect = (e) => {
            this.setState({
                expanded: e.id
            });
        };

        render() {
            return (
              <PanelBar onSelect={this.onSelect}>
                <PanelBarItem title="First item title" id="0" expanded={this.state.expanded == "0"}>
                    <PanelBarContent>
                        First item text
                    </PanelBarContent>
                </PanelBarItem>
                <PanelBarItem title="Second item Title" id="1" expanded={this.state.expanded == "1"}>
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

Setting the [`disabled`](https://github.com/telerik/kendo-react-layout/blob/master/docs/panelbar/api.md#disabled-booleandefault-false) option from its default `false` configuration to `true` disables the selection and display of a PanelBar item. This means that its content cannot be expanded and the item cannot be selected.

```html
<div id="app"></div>
```
```jsx
    const { PanelBar, PanelBarItem, PanelBarContent } = KendoReactLayout;
    class PanbelBarContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: "0",
                expanded: "0"
            };
        }
        onSelect = (e) => {
            this.setState({
                selected: e.id,
                expanded: e.id
            });
        };

        render() {
            return (
                <PanelBar onSelect={this.onSelect}>
                    <PanelBarItem
                        title="First item title"
                        id="0"
                        selected={this.state.expanded == "0"}
                        expanded={this.state.expanded == "0"}
                    >
                        <PanelBarContent>
                            First item text
                        </PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem
                        title="Second item Title"
                        disabled="true"
                        id="1"
                        selected={this.state.expanded == "1"}
                        expanded={this.state.expanded == "1"}
                    >
                        <PanelBarContent>
                            Second item text
                        </PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem
                        title="Third item Title"
                        id="2"
                        selected={this.state.expanded == "2"}
                        expanded={this.state.expanded == "2"}
                    >
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

The PanelBar enables you to add selected CSS styles to an item of your choice by configuring the [`selected`](https://github.com/telerik/kendo-react-layout/blob/master/docs/panelbar/api.md#selected-booleandefault-false) option from its `false` setting to `true`.

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

The PanelBar enables you to set a title of your choice to any of its items. By default, the [`title`](https://github.com/telerik/kendo-react-layout/blob/master/docs/panelbar/api.md#title-stringdefault-untitled) option is set to `untitled`.

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
                <PanelBarItem id="2" selected={this.state.selected == "2"} />
              </PanelBar>);
        }
    }
    ReactDOM.render(
        <PanbelBarContainer />,
        document.getElementById('app')
    );
```

By setting the [`id`](https://github.com/telerik/kendo-react-layout/blob/master/docs/panelbar/api.md#id-stringnumber) option of the PanelBar, you are able to determine the key of the item so it is uniquely identified between render passes. This setting is required.

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

### State

The PanelBar is designed as a stateless component. To store its state and configuration properties, wrap it in a high-order component.

The [`onSelect`](https://github.com/telerik/kendo-react-layout/blob/master/docs/panelbar/api.md#onselect-function) event fires each time a user selects a PanelBar item. This is handled by the parent component.

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

The [`onKeyDown`](https://github.com/telerik/kendo-react-layout/blob/master/docs/panelbar/api.md#onkeydown-function) event fires each time a user...

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

The [`onFocus`](...) event fires each time a user...

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

The [`onBlur`](...) event fires each time a user...

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
