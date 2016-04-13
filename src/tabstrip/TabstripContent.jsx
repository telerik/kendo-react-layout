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

const requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        (fn => window.setTimeout(fn, 20));

class TabstripContent extends React.Component {
    componentWillEnter() {
        const { content } = this.refs;
        requestAnimationFrame(() => {
            if (content) {
                content.className = 'k-state-active k-content k-hide';
            }
            requestAnimationFrame(() => {
                if (content) {
                    content.className = 'k-state-active k-content k-reveal';
                }
            });
        });
    }

    renderContent(elements) {
        const contentProps = {
            'role': 'tabpanel',
            'aria-expanded': 'true'
        };

        const content = elements[this.props.selected];

        return(
          <div {...contentProps}>
              {content.props.children}
          </div>
        );

    }
    render() {
        const contentClasses = [
            styles['content'],
            styles['state-active']
        ].join(" ");

        return(
            <div className={contentClasses} ref="content">
                <ReactTransitionGroup component="div" componentWillEnter={this.componentWillEnter()}>
                    {this.renderContent(this.props.children)}
                </ReactTransitionGroup>
            </div>
        );
    }
}

TabstripContent.propTypes = propTypes;

export default TabstripContent;
