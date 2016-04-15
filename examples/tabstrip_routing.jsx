import * as React from 'react';
import ReactDOM from 'react-dom';
import Tabstrip from '../src/tabstrip/Tabstrip';
import { Router, hashHistory } from 'react-router';

const { Tab } = Tabstrip;

class TabstripContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }
    onSelect = (e) => {
        e.selected === 0 ? hashHistory.push('/Paris') : "";
        e.selected === 1 ? hashHistory.push('/Sofia') : "";
        e.selected === 2 ? hashHistory.push('/London') : "";
    };

    selection = (path) => {
        const paths = {
            "/": -1,
            "/Paris": 0,
            "/Sofia": 1,
            "/London": 2
        };

        return paths[path];
    }

    render() {
        const { pathname } = this.props.location;
        const selection = this.selection(pathname);

        return (
                <Tabstrip onSelect={this.onSelect} selected={selection} style={{ width: 300, height: 260 }} tabPosition="bottom">
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

                    <Tab title="London">
                        <span className="rainy">&nbsp;</span>
                        <div className="weather">
                        <h2>17<span>&ordm;C</span></h2>
                        <p>Rainy weather in London.</p>
                        </div>
                    </Tab>
                </Tabstrip>
        );
    }
}

class Container extends React.Component {
    render() {
        const routes = {
            path: '/',
            component: TabstripContainer,
            childRoutes: [ {
                component: TabstripContainer,
                path: 'Sofia'
            },
                {
                    component: TabstripContainer,
                    path: 'London'
                }, {
                    component: TabstripContainer,
                    path: "Paris"
                } ]
        };
        const createElement = (Component, props) => <Component {...props} />;
        return (
            <Router createElement={createElement} history={hashHistory} routes={routes} />
        );
    }
}
ReactDOM.render(
    <Container />,
    document.getElementById('app')
);
