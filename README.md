[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Kendo UI Layout for React

* [Overview](https://github.com/telerik/kendo-react-layout#overview)
* [Basic Usage](https://github.com/telerik/kendo-react-layout#basic-usage)
* [Installation](https://github.com/telerik/kendo-react-layout#installation)
* [Browser Support](https://github.com/telerik/kendo-react-layout#browser-support)
* [Glossary](https://github.com/telerik/kendo-react-layout#glossary)
  * [Component](https://github.com/telerik/kendo-react-layout#component)
  * [Package](https://github.com/telerik/kendo-react-layout#package)

## Overview

This repository contains the source code and documentation of the Kendo UI Layout package for React.

Currently, it includes the following components: 

* Tabstrip
* PanelBar

For more information on upcoming Layout features, refer to the [Roadmap](https://github.com/telerik/kendo-react-layout/blob/master/docs/roadmap.md).

## Basic Usage

### Kendo UI Tabstrip

The Tabstrip displays a collection of tabs with associated content, which allow the user to switch between different views inside a single component.

```html-preview
    <div id="app"></div>
```
```jsx
    const { Tab } = Tabstrip;

    class TabstripContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: 0
            };
        }

        onSelect = (e) => {
            this.setState({
                selected: e.selected
            });
        };

        render() {
            return (
              <Tabstrip onSelect={this.onSelect} selected={this.state.selected}>
                <Tab title="Paris">
                    <span className="rainy">&nbsp;</span>
                    <div className="weather">
                        <h2>17<span>&ordm;C</span></h2>
                        <p>Rainy weather in Paris.</p>
                    </div>
                </Tab>
              </Tabstrip>);
        }
    }
    ReactDOM.render(
        <TabstripContainer />,
        document.getElementById('app')
    );
```

For more examples and available configuration options, refer to the [Tabstrip documentation](https://github.com/telerik/kendo-react-layout/blob/master/docs/tabstrip/index.md).

### Kendo UI PanelBar

The PanelBar displays hierarchical data as a multi-level, expandable component. To store its state and configuration options, use a high-order component.

```html-preview
<div id="app"></div>
<style>
    .k-panelbar {
        max-width: 400px;
        margin: 0 auto;
    }
    .teamMate:after {
        content: ".";
        display: block;
        height: 0;
        line-height: 0;
        clear: both;
        visibility: hidden;
    }
    .teamMate h2 {
        font-size: 1.4em;
        font-weight: normal;
        padding-top: 20px;
    }
    .teamMate p {
        margin: 0;
    }
    .teamMate img {
        float: left;
        margin: 5px 15px 5px 5px;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
</style>
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
            const selected = this.state.selected;

            return (
              <PanelBar onSelect={this.onSelect}>
                <PanelBarItem title="Andrew Fuller" id="0" selected={selected == "0"} expanded={selected == "0"}>
                    <PanelBarContent className="teamMate">
                        <img src="http://demos.kendoui.com/content/web/panelbar/andrew.jpg" alt="Andrew Fuller" />
                        <h2>Andrew Fuller</h2>
                        <p>Team Lead</p>
                    </PanelBarContent>
                </PanelBarItem>
                <PanelBarItem title="Nancy Leverling" id="1" selected={selected == "1"} expanded={selected == "1"}>
                    <PanelBarContent className="teamMate">
                        <img src="http://demos.kendoui.com/content/web/panelbar/nancy.jpg" alt="Nancy Leverling" />
                        <h2>Nancy Leverling</h2>
                        <p>Sales Associate</p>
                    </PanelBarContent>
                </PanelBarItem>
                 <PanelBarItem title="Robert King" id="2" selected={selected == "2"} expanded={selected == "2"}>
                    <PanelBarContent className="teamMate">
                        <img src="http://demos.kendoui.com/content/web/panelbar/robert.jpg" alt="Robert King" />
                        <h2>Robert King</h2>
                        <p>Business System Analyst</p>
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

For more examples and available configuration options, refer to the [PanelBar documentation](https://github.com/telerik/kendo-react-layout/blob/master/docs/panelbar/index.md).

## Installation

The Layout components are published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in http://npmjs.org/.

Install it using NPM.

```sh
npm install --save @telerik/kendo-react-layout;
```

Once installed, import the module.

```jsx
// ES2015 module syntax
import { Tabstrip } from 'kendo-react-layout';
//or
import { Panelbar } from 'kendo-react-layout';
```
```jsx
// CommonJS format
var Tabstrip = require('kendo-react-layout').Tabstrip;
//or
var Panelbar = require('kendo-react-layout').PanelBar;
```

> To install the npm package, it is recommended that you use Node.js 5.0.0 or later versions. 

## Browser Support

The Layout components work in all browsers supported by the React framework&mdash;Internet Explorer 9 and later versions.

## Glossary

Below are explained the basic terms the suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package. For example, the Tabstrip and PanelBar components for React are part of the Layout Package.
