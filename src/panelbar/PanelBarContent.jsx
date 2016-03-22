import * as React from 'react';
import classNames from 'classnames';

import styles from '@telerik/kendo-theme-default/styles/panelbar/main';

const propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    expanded: React.PropTypes.bool
};

export default class PanelBarContent extends React.Component {
    render() {
        const { children, expanded } = this.props;

        const panelBarItemContentClasses = classNames({
            [styles['content']]: true
        });

        const inlineStyles = {
            'display': expanded ? 'block' : 'none'
        };

        return (
            <div className={panelBarItemContentClasses} style={inlineStyles}>{children}</div>
        );
    }
}

PanelBarContent.propTypes = propTypes;
