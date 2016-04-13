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

class TabstripContent extends React.Component {
    componentWillEnter() {
        const { content } = this.refs;
        window.requestAnimationFrame(function() {
            if (content) {
                content.className = 'k-state-active k-content k-hide';
            }
            window.requestAnimationFrame(function() {
                if (content) {
                    content.className = 'k-state-active k-content k-reveal';
                }
            });
        });
    }

    renderContent(elements) {
        let contentProps = {
            'role': 'tabpanel',
            'aria-expanded': 'true'
        };

        let content = elements[this.props.selected];

        return(
          <div {...contentProps}>
              {content.props.children}
          </div>
        );

    }
    render() {
        const content = this.renderContent(this.props.children);
        const contentClasses = [
            styles['content'],
            styles['state-active']
        ].join(" ");

        return(
            <div className={contentClasses} ref="content">
                <ReactTransitionGroup component="div" componentWillEnter={this.componentWillEnter()}>
                    {content}
                </ReactTransitionGroup>
            </div>
        );
    }
}

TabstripContent.propTypes = propTypes;

export default TabstripContent;
