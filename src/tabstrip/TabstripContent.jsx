import * as React from 'react';
import { Fade } from '@telerik/kendo-react-animation';
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

        const tab = elements[this.props.selected];

        return (
            <Fade animateOnFadeIn={this.props.animation}>
                <div {...contentProps} key={util.guid()}>
                    {tab.props.children}
                </div>
            </Fade>
        );
    }

    render() {
        const contentClasses = [
            'k-content',
            'k-state-active'
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
