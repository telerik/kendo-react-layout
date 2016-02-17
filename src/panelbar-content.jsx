import * as React from 'react';

import classNames from 'classnames';

export default class PanelBarContent extends React.Component {
    render() {
        let panelBarItemContentClasses = classNames({
            'k-content': true
        });

        return (
            <div className={panelBarItemContentClasses}>{this.props.children}</div>
        );
    }
}

PanelBarContent.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ])
};