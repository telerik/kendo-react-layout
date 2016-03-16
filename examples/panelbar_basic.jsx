import * as React from 'react';
import ReactDOM from 'react-dom';
import PanelBar from '../src/panelbar/PanelBar';
import PanelBarItem from '../src/panelbar/PanelBarItem';
import PanelBarNavigation from '../src/panelbar/PanelBarNavigation';
import PanelBarContent from '../src/panelbar/PanelBarContent';


class PanelBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: ""
        };
    }

    onSelect = (e) => {
        this.setState({
            selectedKey: e.selectedKey //e.selectedKey contains the newly selected item of the component
        });
    };

    render() {
        return (
            <PanelBar
                onSelect = {this.onSelect}
                selectedKey = {this.state.selectedKey}
            >
                <PanelBarItem active key="1" selected title="First item (with content)">
                    <PanelBarContent>
                        <p>&nbsp;Example content</p>
                    </PanelBarContent>
                </PanelBarItem>
                <PanelBarItem key="2" title="Second item (with content)">
                    <PanelBarContent>
                        <p>&nbsp;Example content</p>
                    </PanelBarContent>
                </PanelBarItem>
                <PanelBarItem disabled active title="Third item (with childrens)" key="3">
                    <PanelBarNavigation>
                        <PanelBarItem active disabled key="4" title="Forth item (with content, second level)">
                            <PanelBarContent>
                                <p>&nbsp;Example content</p>
                            </PanelBarContent>
                        </PanelBarItem>
                        <PanelBarItem active key="5" title="Fifth item (with children, second level)">
                            <PanelBarNavigation>
                                <PanelBarItem active key="78" title="Sixth item (without children, third level)">
                                    <PanelBarContent>
                                        <p>Some text</p>
                                    </PanelBarContent>
                                </PanelBarItem>
                            </PanelBarNavigation>
                        </PanelBarItem>
                    </PanelBarNavigation>
                </PanelBarItem>
            </PanelBar>
        );
    }
}

ReactDOM.render(
  <div>
      <PanelBarContainer />
  </div>,
  document.getElementById('app')
);