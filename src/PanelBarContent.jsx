import * as React from 'react';

import classNames from 'classnames';

export default class PanelBarContent extends React.Component {
    render() {
        let panelBarItemContentClasses = classNames({
            'k-content': true
        });

        const inlineStyles = {
            display: this.props.active ? "block" : "none"
        };

        return (
            <div className={panelBarItemContentClasses} style={inlineStyles}>{this.props.children}</div>
        );
    }
}

PanelBarContent.propTypes = {
    active: React.PropTypes.bool,
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ])
};