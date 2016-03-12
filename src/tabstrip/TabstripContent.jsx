import * as React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import styles from '@telerik/kendo-theme-default/styles/main';

const propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    selected: React.PropTypes.number
};

export default class TabstripContent extends React.Component {
    mapComponents(props) {
        return React.Children.map(props, (child, index) => {
            if (React.isValidElement(child)) {
                return this.renderContent(child, index);
            }
            return child;
        });
    }
    componentWillEnter() {
        const { content } = this.refs;
        requestAnimationFrame(function() {
            if (content) {
                content.className = "k-state-active k-content k-hide";
            }
            requestAnimationFrame(function() {
                if (content) {
                    content.className = "k-state-active k-content k-reveal";
                }
            });
        });
    }
    renderContent(child, index) {
        let contentProps = {
            "role": "tabpanel",
            "aria-expanded": "true"
        };

        if (this.props.selected === index) {
            return(
              <div {...contentProps}>
                  {child.props.children}
              </div>
            );
        }
    }
    render() {
        const content = this.mapComponents(this.props.children);
        const contentClasses = [
            styles['content'],
            styles['state-active']
        ].join(" ");

        if (content.length) {
            return(
                  <div className={contentClasses} ref="content">
                      <ReactTransitionGroup component="div" componentWillEnter={this.componentWillEnter()}>
                          {content}
                      </ReactTransitionGroup>
                  </div>
          );
        }
        return null;
    }
}

TabstripContent.propTypes = propTypes;
