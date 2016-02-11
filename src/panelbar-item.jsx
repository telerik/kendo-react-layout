import * as React from 'react';

//TODO: uncomment when the styles are ready:
//import styles from '@telerik/kendo-theme-default-base/styles/main';

import PanelBarNavigation from "../src/panelbar-navigation.jsx";
import PanelBarContent from "../src/panelbar-content.jsx";
import ClassNames from 'classnames';

export default class PanelBarItem extends React.Component {
    ///put each children in different collection to render them
    //renderContent(child) {
    //    return <PanelBarContent {...child.props}></PanelBarContent>;
    //}
    //renderNavigation(child) {
    //    return <PanelBarNavigation {...child.props}></PanelBarNavigation>;
    //}

    render() {
        let panelBarItemClasses = ClassNames({
            'k-item': true,
            'k-state-default': true
        });

        let panelBarItemSpanClasses = ClassNames({
            'k-link': true,
            'k-header': true,
            'k-state-selected': false,
            'k-state-default': true
        });

        //TODO: use if first / last item in array should have class applied
        //const children = React.Children.toArray(this.props.children);
        //var content = null;
        //var navigation = null;
        //for (var idx = 0; idx < children.length; idx++) {
        //    if (children[idx].type === PanelBarContent) {
        //        content = this.renderContent(children[idx]);
        //    }
        //    if (children[idx].type === PanelBarNavigation) {
        //        navigation = this.renderNavigation(children[idx]);
        //    }
        //}
        //should have first item / last item
        //k-item k-first k-state-highlight

        return (
            <li className={panelBarItemClasses}>
                <span className={panelBarItemSpanClasses}>{this.props.title}</span>
                {this.props.children}
            </li>
        );
    }
}

PanelBarItem.propTypes = {
    children: function(props, propName) {
        let prop = props[propName];

        if (prop) {
            //TODO: instead use: if (Object.prototype.toString.call(obj) == '[object Array]')
            if (prop instanceof Array) {
                return new Error('Children should be either PanelBarContent or PanelBarNavigation.');
            }

            if (prop.type !== PanelBarContent && prop.type !== PanelBarNavigation) {
                return new Error('Child should be either PanelBarContent or PanelBarNavigation.');
            }
        }
    },
    title: React.PropTypes.string
};