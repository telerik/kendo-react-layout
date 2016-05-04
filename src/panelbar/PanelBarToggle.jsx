import * as React from 'react';
import PanelBarKB from './PanelBarKB';
import * as utils from './util';

const propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    singleExpand: React.PropTypes.bool,
    onChange: React.PropTypes.func
};

const defaultProps = {
    items: [],
    singleExpand: false
};

//TODO: rename.
//TODO: Create another wrapper above to create data from declarative items (feature)
//TODO: Should we handle sateful and stateless behavior of this widget?
export default class PanelBarToggle extends React.Component {
    constructor(props) {
        super(props);

        //is this an anti-pattern? Any why the fuck if it's...
        this.state = {
            items: props.items.map((item) => Object.assign({}, item))
        };
    }

    componentWillReceiveProps(nextProps) {
        let newState = this.copyState(this.state);
        const itemsById = utils.mapItemsById(newState.items);

        //Map changes to current state:
        const newItems = nextProps.items.map(item => {
            const currentItem = itemsById[item.id];

            if (currentItem) {
                return Object.assign({}, item, {
                    expanded: currentItem.expanded
                });
            }

            return item;
        });

        this.setState({ items: newItems });
    }

    itemById = (items, id) => items.find((item) => item.id === id);

    copyState(state) {
        return {
            items: state.items.map((item) => Object.assign({}, item))
        };
    }

    expandItem(state, targetItem, isSingleExpand) {
        let changedItems = [];

        if (isSingleExpand) {
            targetItem.expanded = true;

            utils.findCurrentLevelItems(targetItem, state).forEach((item) => {
                if (item.id !== targetItem.id) {
                    if (item.expanded) {
                        item.expanded = false;

                        changedItems.push({
                            expanded: item.expanded,
                            id: item.id,
                            parentId: item.parentId
                        });
                    }
                }
            });
        } else {
            targetItem.expanded = !targetItem.expanded;
        }

        changedItems.push({
            expanded: targetItem.expanded,
            id: targetItem.id,
            parentId: targetItem.parentId
        });

        return changedItems;
    }

    onChange = event => {
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    onSelect = event => {
        let newState = this.copyState(this.state);
        const targetItem = this.itemById(newState.items, event.id);

        //needed to batch the changes in single expand mode:
        const updatedItems = this.expandItem(newState.items, targetItem, this.props.singleExpand);

        //use settimeout?
        this.onChange(updatedItems);

        //TODO: Set state only if set to true?
        this.setState(newState);
    }

    render() {
        return (
            <PanelBarKB
                {...this.props }
                items={this.state.items}
                onSelect={this.onSelect}
            />
        );
    }
}

PanelBarToggle.propTypes = propTypes;
PanelBarToggle.defaultProps = defaultProps;
