import * as React from 'react';
import ReactDOM from 'react-dom';
import Tabstrip from '../src/tabstrip/Tabstrip';

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
          <Tabstrip onSelect={this.onSelect} selected={this.state.selected} style={{ width: 400 }}>
            <Tab title="Paris">
                <span className="rainy">&nbsp;</span>
                <div className="weather">
                    <h2>17<span>&ordm;C</span></h2>
                    <p>Rainy weather in Paris.</p>
                </div>
            </Tab>

            <Tab disabled={false} title="Sofia">
                <span className="rainy">&nbsp;</span>
                <div className="weather">
                    <h2>17<span>&ordm;C</span></h2>
                    <p>Rainy weather in Sofia.</p>
                </div>
            </Tab>

            <Tab disabled title="Kaspichan">
                <span className="rainy">&nbsp;</span>
                <div className="weather">
                    <h2>17<span>&ordm;C</span></h2>
                    <p>Rainy weather in Kaspichan.</p>
                </div>
            </Tab>

            <Tab title="London">
                <span className="rainy">&nbsp;</span>
                <div className="weather">
                    <h2>17<span>&ordm;C</span></h2>
                    <p>Rainy weather in London.</p>
                </div>
            </Tab>
          </Tabstrip>);
    }
}
ReactDOM.render(
    <TabstripContainer />,
    document.getElementById('app')
);
