import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoPanelBar from '../src/KendoPanelBar.jsx';
import KendoPanelBarItem from '../src/KendoPanelBarItem.jsx';
import KendoPanelBarNavigation from '../src/KendoPanelBarNavigation.jsx';
import KendoPanelBarContent from '../src/KendoPanelBarContent.jsx';

ReactDOM.render(
  <div>
      <KendoPanelBar>
          <KendoPanelBarItem title="First item (with content)" active>
              <KendoPanelBarContent>
                  <p>&nbsp;Example content</p>
              </KendoPanelBarContent>
          </KendoPanelBarItem>
          <KendoPanelBarItem title="Second item (with content)">
              <KendoPanelBarContent>
                  <p>&nbsp;Example content</p>
              </KendoPanelBarContent>
          </KendoPanelBarItem>
          <KendoPanelBarItem title="Third item (with childrens)">
              <KendoPanelBarNavigation>
                  <KendoPanelBarItem title="Forth item (with content, second level)">
                      <KendoPanelBarContent>
                          <p>&nbsp;Example content</p>
                      </KendoPanelBarContent>
                  </KendoPanelBarItem>
                  <KendoPanelBarItem title="Fifth item (with children, second level)">
                      <KendoPanelBarNavigation>
                          <KendoPanelBarItem title="Sixth item (without children, third level)">
                              <KendoPanelBarContent>
                                  <p>Some text</p>
                              </KendoPanelBarContent>
                          </KendoPanelBarItem>
                      </KendoPanelBarNavigation>
                  </KendoPanelBarItem>
              </KendoPanelBarNavigation>
          </KendoPanelBarItem>
      </KendoPanelBar>
  </div>,
  document.getElementById('app')
);
