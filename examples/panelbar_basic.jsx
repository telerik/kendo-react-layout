import * as React from 'react';
import ReactDOM from 'react-dom';
import PanelBar from '../src/panelbar/PanelBar';
import PanelBarItem from '../src/panelbar/PanelBarItem';
import PanelBarNavigation from '../src/panelbar/PanelBarNavigation';
import PanelBarContent from '../src/panelbar/PanelBarContent';

const propTypes = {
    expandMode: React.PropTypes.oneOf([ 'single', 'multiple' ]),
    items: React.PropTypes.arrayOf(React.PropTypes.object)
};

class PanelBarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { items: this.props.items || [] };
        this.onSelectHandler = this.onSelect.bind(this);
    }

    getItemById = (items, id) => items.find((item) => item.id === id);

    onSelect(eventData) {
        const state = this.state;
        const targetItem = this.getItemById(state.items, eventData.id);
        const previouslySelectedItem = state.items.find((item) => item.selected);

        if (previouslySelectedItem) {
            previouslySelectedItem.selected = false;
        }

        targetItem.selected = true;

        if (this.props.expandMode && this.props.expandMode === "single") {
            const parentId = targetItem.parentId || null;
            const itemsForUpdate = state.items.filter(function(item) {
                return (item.parentId || null) === parentId;
            });

            itemsForUpdate.forEach((item) => {
                item.expanded = item.id === targetItem.id;
            });
        } else {
            targetItem.expanded = !eventData.expanded;
        }

        this.setState({
            items: state.items
        });
    }

    mapComponents(map, parentId) {
        const items = (map[parentId] || []).map(item => {
            let child;

            if (item.hasChildren) {
                child = (<PanelBarNavigation>
                    {this.mapComponents(map, item.id)}
                </PanelBarNavigation>);
            } else {
                child = (<PanelBarContent>
                    <div>{item.content}</div>
                </PanelBarContent>);
            }

            const childProps = {
                children: child,
                expanded: item.expanded,
                id: item.id,
                key: item.id,
                selected: item.selected,
                title: item.title,
                disabled: item.disabled
            };

            return (<PanelBarItem {...childProps} />);
        });

        return items;
    }

    render() {

        const map = this.state.items.reduce((map, item) => {
            const parentId = item.parentId || null;

            map[parentId] = map[parentId] || [];
            map[parentId].push(item);

            return map;
        }, {});

        return (
            <PanelBar onSelect={this.onSelectHandler}>
                {this.mapComponents(map, null)}
            </PanelBar>
        );
    }
}

PanelBarContainer.propTypes = propTypes;

const sampleItems = [
    { id: 1, title: "1", hasChildren: true, expanded: true },
    { id: 5, title: "1.1", parentId: 1, content: "1.1 content" },
    { id: 2, title: "2", hasChildren: true, expanded: true },
    { id: 3, title: "2.1", parentId: 2, content: "2.1 content", selected: true },
    { id: 4, title: "2.2", parentId: 2, content: "2.2 content", expanded: true },
    { id: 6, title: "2.3", parentId: 2, content: "2.3 content", disabled: true }
];

function renderStaticPanelBar() {
    return (<PanelBar>
        <PanelBarItem expanded id={1} selected title="First item (with content)">
            <PanelBarContent>
                <p>&nbsp;Example content</p>
            </PanelBarContent>
        </PanelBarItem>
        <PanelBarItem disabled id={2} title="Second item (with content)">
            <PanelBarContent>
                <p>&nbsp;Example content</p>
            </PanelBarContent>
        </PanelBarItem>
        <PanelBarItem expanded id={3} title="Third item (with childrens)">
            <PanelBarNavigation>
                <PanelBarItem disabled expanded id={4} title="Forth item (with content, second level)">
                    <PanelBarContent>
                        <p>&nbsp;Example content</p>
                    </PanelBarContent>
                </PanelBarItem>
                <PanelBarItem expanded id={5} title="Fifth item (with children, second level)">
                    <PanelBarNavigation>
                        <PanelBarItem expanded id={78} title="Sixth item (without children, third level)">
                            <PanelBarContent>
                                <p>Some text</p>
                            </PanelBarContent>
                        </PanelBarItem>
                    </PanelBarNavigation>
                </PanelBarItem>
            </PanelBarNavigation>
        </PanelBarItem>
    </PanelBar>);
}

ReactDOM.render(
  <div>
      {renderStaticPanelBar()}
      <hr/>
      <PanelBarContainer expandMode="multiple" items={sampleItems}/>
  </div>,
  document.getElementById('app')
);