---
title: Overview
page_title: Overview | Kendo UI TabStrip for React
description: "Use the Kendo UI TabStrip component in a React project."
slug: overview_tabstrip_kendouiforreact
position: 1
---

# TabStrip Overview

The Kendo UI TabStrip displays a collection of tabs with associated content, which allow the user to switch between different views inside a single component.

The TabStrip is part of the Layout `npm` package of the Kendo UI suite for React.

**Figure 1: A template of the Kendo UI TabStrip for React**

//TODO: template screen, parts indicated

1. tab titles
2. tab page
3. tab title row

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI TabStrip component for React.

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
                <Tab title="London">
                    <span className="sunny">&nbsp;</span>
                    <div className="weather">
                        <h2>21<span>&ordm;C</span></h2>
                        <p>Sunny weather in London.</p>
                    </div>
                </Tab>
                <Tab title="New York">
                    <span className="sunny">&nbsp;</span>
                    <div className="weather">
                        <h2>29<span>&ordm;C</span></h2>
                        <p>Sunny weather in New York.</p>
                    </div>
                </Tab>
                <Tab title="Moscow">
                    <span className="cloudy">&nbsp;</span>
                    <div className="weather">
                        <h2>16<span>&ordm;C</span></h2>
                        <p>Cloudy weather in Moscow.</p>
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

## Configuration

### Tab Titles

Each tab displays a title prompting the content of the tab page, which is set through the `title` attribute of the Tab.

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
                <Tab title="First tab title">
                    First tab content
                </Tab>
                <Tab title="Second tab Title">
                    Second tab content
                </Tab>
              </Tabstrip>);
        }
    }
    ReactDOM.render(
        <TabstripContainer />,
        document.getElementById('app')
    );

```

Apart from text elements, a tab title is also able to accommodate any React component.

### Tabs on Initial Loading

The TabStrip enables you to display a particular tab upon its initial loading, which is set through the `selected` property. It is a zero-based value, which means that to select the first tab, you must set it to `0` (zero).

```html-preview
    <div id="app"></div>
```
```jsx
    const { Tab } = Tabstrip;
    class TabstripContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: 1 //sets the tab that will be selected initially
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
                <Tab title="Tab1">
                    First tab content
                </Tab>
                <Tab title="Tab2">
                    Second tab content
                </Tab>
              </Tabstrip>);
        }
    }
    ReactDOM.render(
        <TabstripContainer />,
        document.getElementById('app')
    );
```

### Disabled Tabs

The TabStrip provides the option for specific tabs to be inactive so that the user is not able to select them. Disable tabs by adding the `disabled` attribute to the configuration.

```html-preview
    <div id="app"></div>
```
```jsx
    const { Tab } = Tabstrip;
    class TabstripContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: 1
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
                <Tab title="Tab1" disabled>
                    First tab content
                </Tab>
                <Tab title="Tab2">
                    Second tab content
                </Tab>
              </Tabstrip>);
        }
    }
    ReactDOM.render(
        <TabstripContainer />,
        document.getElementById('app')
    );
```

### Remote Content

The TabStrip does not provide а built-in functionality for loading remote content. However, you can achieve this through nesting a component that will handle the remote data loading.

```html-preview
    <div id="app"></div>
```
```jsx
    const { Tab } = KendoTabstrip;
    var RemoteContent = React.createClass({
      getInitialState: function() {
        return {
          content: {}
        };
      },

      componentDidMount: function() {
        let that = this;
        this.fetch().then(function(data) {
            that.setState({
                content: data
            })
        })
      },

      fetch: function () {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous action where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {
            // resolve with some mock data
            resolve({
                Wheelbase :"2851 mm"
            });
          }, 500);
        });
      },

      render: function() {
        return (
          <dl className="specification">
              <dt>Wheelbase</dt>
              <dd>{this.state.content.Wheelbase}</dd>
          </dl>
        );
      }
    });

    var Tabstrip = React.createClass({
          getInitialState: function() {
              return { selected : 0 }
          },
          onSelect: function(e) {
              this.setState({
                  selected: e.selected
              })
          },
          render: function() {
            return (
                <KendoTabstrip onSelect={this.onSelect} selected={this.state.selected}>
                    <Tab title="Dimensions &amp; Weights">
                        <RemoteContent />
                    </Tab>
                    <Tab title="Engine">
                        Engine specification here.
                    </Tab>
                </KendoTabstrip>
            )}
    });
    ReactDOM.render(
        <Tabstrip />,
        document.getElementById('app')
    )
```

### State

The Tabstrip is designed as a stateless component. To store its state and configuration properties, wrap it in a high-order component.

The `onSelect` event fires each time a user interacts with the component. The newly selected tab index is passed as an argument to the `onSelect` callback.

```html-preview
    <div id="app"></div>
```
```jsx
    const { Tab } = Tabstrip;
    class TabstripContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: 1
            };
        }
        onSelect = (e) => {
            this.setState({
                selected: e.selected // the callback will be called when selection is made
            });
        };

        render() {
            return (
              <Tabstrip onSelect={this.onSelect} selected={this.state.selected}>
                <Tab title="Tab1" disabled>
                    First tab content
                </Tab>
                <Tab title="Tab2">
                    Second tab content
                </Tab>
              </Tabstrip>);
        }
    }
    ReactDOM.render(
        <TabstripContainer />,
        document.getElementById('app')
    );
```

For detailed information on the Kendo UI TabStrip for React configuration, refer to its [client-side API documentation]({% slug api_tabstrip_kendouiforreact %}).

## Keyboard Navigation

Below is the list with the keyboard shortcuts the TabStrip supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Upper Arrow` & `Left Arrow` keys   | Select the previous tab. |
| `Down Arrow` & `Right Arrow` keys   | Select the next tab.     |
| `Home`                              | Select the first tab.    |
| `End`                               | Select the last tab.     |

## Accessibility

The TabStrip is WAI ARIA-accessible through the `Tab` key. The `aria-expanded` attribute is set on the currently displayed content of a tab. The `tabindex` attribute will be set to `0` (zero) on the active tab and `-1` (minus one) for the inactive tabs.

## Suggested Links

* [Client-Side API Reference for the Kendo UI TabStrip Component]({% slug api_tabstrip_kendouiforreact %})
