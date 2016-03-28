import * as React from 'react';
import * as ReactRedux from "react-redux";
import PanelBar from '../../../src/panelbar/PanelBar';
import * as actionCreators from './../actions';
import * as panelBarUtils from '../../../src/panelbar/util';

const propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    onSelect: React.PropTypes.func
};

class PanelBarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onSelectHandler = this.onSelect.bind(this);
    }

    onSelect(eventData) {
        if (this.props.onSelect) {
            this.props.onSelect(eventData);
        }
    }

    render() {
        const itemsByParentId = panelBarUtils.mapItemsByParentId(this.props.items);

        return (
            <PanelBar onSelect={this.onSelectHandler}>
                {panelBarUtils.mapDataToComponents(itemsByParentId)}
            </PanelBar>
        );
    }
}

PanelBarContainer.propTypes = propTypes;

const mapStateToProps = function(state) {
    return { items: state.panelBarItems };
};

const mapDispatchToProps = function(dispatch) {
    return {
        onSelect: function(data) { dispatch(actionCreators.onSelect(data)); }
    };
};

const PanelBarDataContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PanelBarContainer);

export default PanelBarDataContainer;
