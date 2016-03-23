[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Kendo UI Layout Package for React

* [Overview](https://github.com/telerik/kendo-react-inputs#overview)
* [Glossary](https://github.com/telerik/kendo-react-inputs#glossary)
  * [Component](https://github.com/telerik/kendo-react-inputs#component)
  * [Package](https://github.com/telerik/kendo-react-inputs#package)
  * [Package Version](https://github.com/telerik/kendo-react-inputs#package-version)
* [Layout Package Components](https://github.com/telerik/kendo-react-inputs#inputs-package-components)
* [Basic Usage](https://github.com/telerik/kendo-react-inputs#basic-usage)
* [Get Started](https://github.com/telerik/kendo-react-inputs#get-started)
  * [Installation](https://github.com/telerik/kendo-react-inputs#installation)
  * [Browser Support](https://github.com/telerik/kendo-react-inputs#browser-support)

## Overview

This repository holds the source code files and documentation of the Kendo UI components for React included in the Layout distribution of the suite.

## Glossary

Below are explained the basic terms that Kendo UI suite for React applies.

### Component

A Component is a Kendo UI control developed to operate in the React ecosystem. For example, the Kendo UI TabStrip for React is a component.

### Package

A package is a conventional term used to designate:

* A complex or core suite component such as the Kendo UI Animation for React.
* A group of several components which share common functionalities and/or common codebase. For example, the Kendo UI TabStrip and PanelBar components for React are part of the Layout Package.

### Package Version

Each package has a package release version of its own&mdash;for example, Layout v.3.5.

Because of the continuous release cycle, Marketing Releases include packages with different versions. For example, the R2 2016 Marketing Release may feature the Layout v.3.5 and Buttons v.2.1 releases.

## Layout Package Components

Currently, the Kendo UI Layout package for React consists of the TabStrip component.

For more information on forthcoming Layout package features and components, refer to the [Roadmap of the Kendo UI Layout package for React](https://github.com/telerik/kendo-react-layout/blob/master/docs/roadmap.md).

## Basic Usage

The section below demonstrates the basic usage of the Kendo UI TabStrip component.

### Kendo UI TabStrip for React

The TabStrip displays a collection of tabs with associated content. It is composed of an unordered list of items, representing tabs, and a collection of elements, which contain the content for each tab.

The demo below demonstrates the basic usage of the component.

```html-preview
    //code
```
```jsx

```

For more information, refer to the [documentation on the TabStrip](https://github.com/telerik/kendo-react-layout/blob/master/docs/tabstrip/overview.md).

## Get Started

The sections below demonstrate how to set up and run the Layout components, and add them to your project.

### Installation

To install the Kendo UI Layout components for React, run the command below.

    npm install kendo-react-layout;

    //ES6 Modules
    import TabStrip from 'kendo-react-layout';
    //or
    import { TabStrip } from 'kendo-react-layout';

### Browser Support

The Kendo UI Layout components for React support all browsers that are supported by the React framework&mdash;Internet Explorer 9 and later versions.
