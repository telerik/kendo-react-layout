import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoPanelBar from '../src/kendo-panelbar';
import PanelBarItem from '../src/panelbar-item';
import PanelBarNavigation from '../src/panelbar-navigation';
import PanelBarContent from '../src/panelbar-content';

ReactDOM.render(
  <div>
      <KendoPanelBar>
          <PanelBarItem title="First item (with content)">
              <PanelBarContent>
                  <p>&nbsp;Example content</p>
              </PanelBarContent>
          </PanelBarItem>
          <PanelBarItem title="Second item (with content)">
              <PanelBarContent>
                  <p>&nbsp;Example content</p>
              </PanelBarContent>
          </PanelBarItem>
          <PanelBarItem title="Third item (with childrens)">
              <PanelBarNavigation>
                  <PanelBarItem title="Forth item (with content, second level)">
                      <PanelBarContent>
                          <p>&nbsp;Example content</p>
                      </PanelBarContent>
                  </PanelBarItem>
                  <PanelBarItem title="Fifth item (without content, second level)" />
              </PanelBarNavigation>
          </PanelBarItem>
      </KendoPanelBar>
      <KendoPanelBar>
          <PanelBarItem title="1211221First item (with content)">
              <PanelBarContent>
                  <p>&nbsp;Example content</p>
              </PanelBarContent>
          </PanelBarItem>
          <PanelBarItem title="Second item (with content)">
              <PanelBarContent>
                  <p>&nbsp;Example content</p>
              </PanelBarContent>
          </PanelBarItem>
          <PanelBarItem title="Third item (with childrens)">
              <PanelBarNavigation>
                  <PanelBarItem title="Forth item (with content, second level)">
                      <PanelBarContent>
                          <p>&nbsp;Example content</p>
                      </PanelBarContent>
                  </PanelBarItem>
                  <PanelBarItem title="Fifth item (without content, second level)" />
              </PanelBarNavigation>
          </PanelBarItem>
      </KendoPanelBar>
  </div>,
  document.getElementById('app')
);
