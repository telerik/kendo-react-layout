import * as React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from "react-redux";
import PanelBarToggle from '../src/panelbar/PanelBarToggle';
import PanelBarItem from '../src/panelbar/PanelBarItem';
import PanelBarContent from '../src/panelbar/PanelBarContent';
import PanelBarNavigation from '../src/panelbar/PanelBarNavigation';

import * as reducers from './panelbar/reducers/panelBar';
import initialState from './panelbar/initialstate';


//TEST:
//TODO: test with redux / react router? that listen on Change event
const onChange = event => {
    console.log("top level event", event);
}

ReactDOM.render(
    <PanelBarToggle
        items={[
            {title: "title1", id: 1, parentId: null},
            {title: "title2", id: 2, parentId: null, content: "some content"},
            {parentId: 1, title: "childItem", id: 3, content: "some contet "}
         ]}
        onChange={onChange}
        //singleExpand={true}
    />,
    document.getElementById("app")
);

/*
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
    */