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
