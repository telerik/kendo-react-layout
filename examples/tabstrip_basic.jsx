import * as React from 'react';
import ReactDOM from 'react-dom';
import Tabstrip from '../src/tabstrip/Tabstrip';

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
