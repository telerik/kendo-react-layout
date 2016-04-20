import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/tabstrip/main';
import animationStyles from '@telerik/kendo-theme-default/styles/animation/main';
import { Toggle } from '@telerik/kendo-react-animation';
import util from './util';

const propTypes = {
    animation: React.PropTypes.bool,
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    selected: React.PropTypes.number,
    style: React.PropTypes.object
};

class TabstripContent extends React.Component {
    renderContent(elements) {
        const contentProps = {
            'role': 'tabpanel',
            'aria-expanded': 'true'
        };

        const element = elements[this.props.selected];

        let content = (
            <div {...contentProps} key={util.guid()}>
                {element.props.children}
            </div>
        );

        if (this.props.animation !== false) {
            content = this.addAnimation(content);
        }

        return content;

    }

    addAnimation(content) {
        const toggleClassNames = {
            enter: animationStyles['toggle-enter'],
            enterActive: animationStyles['toggle-enter-active']
        };

        return (
            <Toggle name={toggleClassNames} toggleTimeout={500}>
                {content}
            </Toggle>
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
