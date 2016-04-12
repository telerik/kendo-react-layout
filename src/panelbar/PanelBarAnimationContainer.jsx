import * as React from 'react';
import { Animation } from '@telerik/kendo-react-animation';

const propTypes = {
    expand: React.PropTypes.bool,
    children: React.PropTypes.element
};

export default class PanelBarAnimationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { animate: false };
    }

    componentWillReceiveProps(newProps) {
        const animate = this.props.expand !== newProps.expand;

        this.setState({
            animate: animate
        });
    }

    render() {
        const { expand } = this.props;
        const animate = this.state.animate;

        const transitionName = expand ? 'expand' : 'collapse';

        const animationProps = {
            transitionEnter: animate,
            transitionLeave: animate,
            transitionName: animate ? transitionName : ''
        };

        return (
            <Animation {...animationProps}>
                {this.props.children}
            </Animation>
        );
    }
}

PanelBarAnimationContainer.propTypes = propTypes;
