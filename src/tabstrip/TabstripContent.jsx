import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/tabstrip/main';
import ReactTransitionGroup from 'react-addons-transition-group';

const propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    selected: React.PropTypes.number
};

export default class TabstripContent extends React.Component {
    componentWillEnter() {
        const { content } = this.refs;
        requestAnimationFrame(function() {
            if (content) {
                content.className = 'k-state-active k-content k-hide';
            }
            requestAnimationFrame(function() {
                if (content) {
                    content.className = 'k-state-active k-content k-reveal';
                }
            });
        });
    }

    renderContent(elements) {
        const { selected } = this.props;
        let content = null;
        let contentProps = {
            'role': 'tabpanel',
            'aria-expanded': 'true'
        };
        if (selected !== null && elements) {
            if (this.props.children.length) {
                content = elements[this.props.selected];
            } else {
                content = elements;
            }
        }
        if (content) {
            return(
              <div {...contentProps}>
                  {content ? content.props.children : null}
              </div>
            );
        }
        return null;
    }
    render() {
        const content = this.renderContent(this.props.children);
        const contentClasses = [
            styles['content'],
            styles['state-active']
        ].join(" ");

        if (content) {
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
