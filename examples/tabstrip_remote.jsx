import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoTabstrip from '../src/tabstrip/Tabstrip';

const { Tab } = KendoTabstrip;

const RemoteContent = React.createClass({
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
            });
        });
    },

    fetch: function() {
        // returning a Promise because that is what fetch does.
        return new Promise(function(resolve) {
            // simulate an asynchronous action where data is fetched on
            // a remote server somewhere.
            setTimeout(function () {
            // resolve with some mock data
                resolve({
                    Wheelbase: "2851 mm",
                    FrontTrack: "1630 mm",
                    RearTrack: "1612 mm",
                    Length: "4898 mm",
                    Width: "1899 mm",
                    Height: "1368 mm",
                    GroundClearance: "107 mm",
                    Weight: "1925 kg",
                    Fuel: "80 litres"
                });
            }, 500);
        });
    },

    render: function() {
        return (
            <dl className="specification">
              <dt>Wheelbase</dt>
              <dd>{this.state.content.Wheelbase}</dd>
              <dt>Front Track</dt>
              <dd>{this.state.content.FrontTrack}</dd>
              <dt>Rear Track</dt>
              <dd>{this.state.content.RearTrack}</dd>
              <dt>Length</dt>
              <dd>{this.state.content.Length}</dd>
              <dt>Width</dt>
              <dd>{this.state.content.Width}</dd>
              <dt>Height</dt>
              <dd>{this.state.content.Height}</dd>
              <dt>Ground clearance</dt>
              <dd>{this.state.content.GroundClearance}</dd>
              <dt>Weight</dt>
              <dd>{this.state.content.Weight}</dd>
              <dt>Fuel tank capacity</dt>
              <dd>{this.state.content.Fuel}</dd>
          </dl>
      );
    }
});

const Tabstrip = React.createClass({
    getInitialState: function() {
        return { selected: 0 };
    },
    onSelect: function(e) {
        this.setState({
            selected: e.selected
        });
    },
    render: function() {
        return (
            <KendoTabstrip onSelect={this.onSelect} selected={this.state.selected}>
            <Tab title="Dimensions &amp; Weights">
                <RemoteContent />
            </Tab>
            <Tab title="Engine">
                <dl className="specification">
                    <dt>Bore * Stroke</dt>
                    <dd>89 mm * 88.3 mm</dd>
                    <dt>Number of cylinders</dt>
                    <dd>V8 in 90° vee</dd>
                    <dt>Capacity</dt>
                    <dd>4.4 litre
                        4395 cc
                        (268.199 cu in)</dd>
                    </dl>
            </Tab>
        </KendoTabstrip>
    );}
});
ReactDOM.render(
    <Tabstrip />,
    document.getElementById('app')
);
