import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/tabstrip/main';
import ReactTransitionGroup from 'react-addons-transition-group';

const propTypes = {
    animation: React.PropTypes.bool,
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    selected: React.PropTypes.number,
    style: React.PropTypes.object
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
                content.children[0].className = 'k-state-active k-content k-hide';
            }
            requestAnimationFrame(() => {
                if (content) {
                    content.children[0].className = 'k-state-active k-content k-reveal';
                }
            });
        });
    }

    renderContent(elements) {
        const contentProps = {
            'role': 'tabpanel',
            'aria-expanded': 'true'
        };

        const element = elements[this.props.selected];

        let content = (
            <div {...contentProps}>
                {element.props.children}
            </div>
        );

        if (this.props.animation !== false) {
            content = this.addAnimation(content);
        }

        return content;

    }

    addAnimation(content) {
        return (
            <ReactTransitionGroup component="div" componentWillEnter={this.componentWillEnter()}>
                {content}
            </ReactTransitionGroup>
        );
    }

    render() {
        const contentClasses = [
            styles['content'],
            styles['state-active']
        ].join(" ");

        const { height } = this.props.style || {};


        return(
            <div className={contentClasses} ref="content" style={{ height: height }}>
                    {this.renderContent(this.props.children)}
            </div>
        );
    }
}

TabstripContent.propTypes = propTypes;

export default TabstripContent;
