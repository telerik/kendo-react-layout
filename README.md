[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Kendo UI Layout for React

* [Overview](https://github.com/telerik/kendo-react-inputs#overview)
* [Basic Usage](https://github.com/telerik/kendo-react-inputs#basic-usage)
* [Installation](https://github.com/telerik/kendo-react-inputs#installation)
* [Browser Support](https://github.com/telerik/kendo-react-inputs#browser-support)
* [Glossary](https://github.com/telerik/kendo-react-inputs#glossary)
  * [Component](https://github.com/telerik/kendo-react-inputs#component)
  * [Package](https://github.com/telerik/kendo-react-inputs#package)

## Overview

This repository contains the source code and documentation of the Kendo UI Layout components for React.

Currently, the package includes the TabStrip and PanelBar components.

Telerik works on porting the Dialog component too.

For more information on forthcoming Layout package features and components, refer to the [Roadmap](https://github.com/telerik/kendo-react-layout/blob/master/docs/roadmap.md).

## Basic Usage

The TabStrip displays a collection of tabs with associated content. It is composed of an unordered list of items, representing tabs, and a collection of elements, which contain the content for each tab.

```html-preview
    //code
```
```jsx

```

For more examples and available configuration options, refer to the [TabStrip documentation section](https://github.com/telerik/kendo-react-layout/blob/master/docs/tabstrip/overview.md).

## Installation

The React Inputs are published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in `http://npmjs.org/`.

Install it using NPM:

//change acc to this package

```sh
npm install --save @telerik/kendo-react-inputs;
```

Once installed, import the module:

```jsx
// ES2015 module syntax
import {Slider} from 'kendo-react-inputs';
```
```jsx
// CommonJS format
var Slider = require('kendo-react-inputs').Slider;
```

## Browser Support

The Kendo UI Layout components for React support all browsers that are supported by the React framework&mdash;Internet Explorer 9 and later versions.

## Glossary

Below are explained the basic terms that Kendo UI suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package. For example, the Kendo UI Tabtrip and PanelBar components for React are part of the Layout Package.
