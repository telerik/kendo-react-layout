import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import PanelBarNavContainer from './panelbar/containers/PanelBarNavContainer';
import About from './panelbar/containers/About';
import Team from './panelbar/containers/Team';
import Home from './panelbar/containers/Home';
import Products from './panelbar/containers/Products';

ReactDOM.render(
   <Router history={hashHistory}>
       <Route component={PanelBarNavContainer}>
           <Route path="/" component={Home}/>
           <Route path="/products" component={Products}/>
           <Route path="/about" component={About}>
               <Route path="/team" component={Team}/>
           </Route>
       </Route>
   </Router>,
    document.getElementById("app")
);