import * as React from 'react';
import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/packages/layout';

const propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    className: React.PropTypes.string,
    expanded: React.PropTypes.bool
};

export default class PanelBarContent extends React.Component {
    static create({ disabled, expanded, id }, props) {
        if (!disabled && expanded) {
            const contentProps = {
                ...props,
                expanded: expanded
            };

            return (<PanelBarContent {...contentProps} key={id + "_content"}/>);
        }

        return null;
    }

    render() {
        const { children, expanded, className, ...others } = this.props;

        const panelBarItemContentClasses = classNames({
            [styles['content']]: true
        }, className);

        const inlineStyles = {
            'display': expanded ? 'block' : 'none'
        };

        return (
            <div {...others } className={panelBarItemContentClasses} style={inlineStyles}>{children}</div>
        );
    }
}

PanelBarContent.propTypes = propTypes;
