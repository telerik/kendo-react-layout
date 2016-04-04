import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/tabstrip/main';
import { ToggleAnimation } from '@telerik/kendo-react-animation';

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
            content = elements[this.props.selected];
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
                  <ToggleAnimation className={contentClasses} fixedContainer ref="content">
                          {content}
                  </ToggleAnimation>
            );
        }
        return null;
    }
}

TabstripContent.propTypes = propTypes;
