import * as React from 'react';
import PanelBar from './PanelBar';
import * as utils from './util';

const propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    onSelect: React.PropTypes.func
};

const defaultProps = {
    items: []
};

//TODO: rename.
export default class DataBoundPanelBar extends React.Component {
    getChildren(items) {
        let children = null;

        if (items) {
            const itemsByParentId = utils.mapItemsByParentId(items);

            children = utils.mapDataToComponents(itemsByParentId);
        }

        return children;
    }

    /*
     * TODO: STATE STRUCTURE:
     *  PanelBar props are passed directly, so we can ignore them
     * [
     *   {
     *       id: 1,
     *       parentId: null,
     *       title: 'someTitle',
     *       expanded: true,
     *       disabled: false,
     *       focused: true,
     *       selected: false,
     *       //=== these should be optional
     *       //=== can be set when building from data as well.
     *       childrenType: 'PanelBarContent',
     *       childrenProps: {className: 'customClass'}
     *   }
     * ]
     *
     * */

    render() {
        //TODO: Clean up children?
        const { items, ...others } = this.props;

        return (
            <PanelBar {...others }>
                {this.getChildren(items)}
            </PanelBar>
        );
    }
}

DataBoundPanelBar.propTypes = propTypes;
DataBoundPanelBar.defaultProps = defaultProps;
