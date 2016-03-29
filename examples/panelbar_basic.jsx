import * as React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from "react-redux";
import { PanelBarDataContainer } from './panelbar/containers/PanelBarDataContainer';
import * as reducers from './panelbar/reducers/panelBar';
import initialState from './panelbar/initialstate';

const rootReducer = Redux.combineReducers({
    panelBarItems: reducers.multipleExpand
});

let store = Redux.createStore(rootReducer, initialState());

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <PanelBarDataContainer />
    </ReactRedux.Provider>,
    document.getElementById("app")
);