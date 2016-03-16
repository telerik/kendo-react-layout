import * as React from 'react';
import classNames from 'classnames';

import styles from '@telerik/kendo-theme-default/styles/panelbar/main';

const propTypes = {
    active: React.PropTypes.bool,
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ])
};

export default class PanelBarContent extends React.Component {
    render() {
        let panelBarItemContentClasses = classNames({
            [styles['content']]: true
        });

        const inlineStyles = {
            'display': this.props.active ? 'block' : 'none'
        };

        return (
            <div className={panelBarItemContentClasses} style={inlineStyles}>{this.props.children}</div>
        );
    }
}

PanelBarContent.propTypes = propTypes;
