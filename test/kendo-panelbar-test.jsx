import * as React from 'react';
import { shallow } from 'enzyme';
import KendoPanelBar from '../src/kendo-panelbar';
import PanelBarItem from '../src/panelbar-item';

describe('KendoPanelBar', () => {
    let result;

    beforeEach(() => {
        spyOn(console, 'error');
    });

    it('should render a ul', () => {
        result = shallow(<KendoPanelBar />);
        expect(result.type()).toEqual('ul');
    });

    it('should pass index to children', () => {
        result = shallow(<KendoPanelBar>
            <PanelBarItem title="first"></PanelBarItem>
            <PanelBarItem title="second"></PanelBarItem>
        </KendoPanelBar>);

        expect(result.node.props.children[0].props.index).toEqual(0);
        expect(result.node.props.children[1].props.index).toEqual(1);
        expect(result.node.props.children[1].props.isLast).toEqual(true);
    });

    it('should add CSS classes', () => {
        result = shallow(<KendoPanelBar />);

        expect(result.props().className.indexOf('k-panelbar')).toBeGreaterThan(-1);
        expect(result.props().className.indexOf('k-widget')).toBeGreaterThan(-1);
        expect(result.props().className.indexOf('k-header')).toBeGreaterThan(-1);
        expect(result.props().className.indexOf('k-panelbar')).toBeGreaterThan(-1);
    });

    it('should accept only PanelBarItem as child', () => {
        result = shallow(<KendoPanelBar>sometext</KendoPanelBar>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: KendoPanelBar child should be either PanelBarItem or Array of PanelBarItem.");
    });

    it('should accept only PanelBarItem array as children', () => {
        result = shallow(<KendoPanelBar>sometext<PanelBarItem title="some title" /></KendoPanelBar>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: KendoPanelBar children should be either PanelBarItem or Array of PanelBarItem.");
    });
});