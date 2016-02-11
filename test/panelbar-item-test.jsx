import * as React from 'react';
import { shallow } from 'enzyme';
import PanelBarItem from '../src/panelbar-item';
import PanelBarContent from '../src/panelbar-content';
import PanelBarNavigation from '../src/panelbar-navigation';

describe('PanelBarItem', () => {
    let result;

    beforeEach(() => {
        spyOn(console, 'error');
    });

    it('should render a li', () => {
        result = shallow(<PanelBarItem />);
        expect(result.type()).toEqual('li');
    });

    it('should render title correctly', () => {
        result = shallow(<PanelBarItem title="sometext" />);

        let node = result.children().node;
        expect(node.type).toEqual('span');
        expect(node.props.children).toEqual('sometext');
    });

    it('should add title CSS classes', () => {
        result = shallow(<PanelBarItem title="sometext" />);

        let node = result.children().node;

        expect(node.props.className.indexOf('k-link')).toBeGreaterThan(-1);
        expect(node.props.className.indexOf('k-header')).toBeGreaterThan(-1);
        expect(node.props.className.indexOf('k-state-selected')).toEqual(-1);
        expect(node.props.className.indexOf('k-state-default')).toBeGreaterThan(-1);
    });

    it('should add CSS classes', () => {
        result = shallow(<PanelBarItem />);

        expect(result.props().className.indexOf('k-item')).toBeGreaterThan(-1);
        expect(result.props().className.indexOf('k-state-default')).toBeGreaterThan(-1);
    });

    it('should accept only  PanelBarContent or PanelBarNavigation as child', () => {
        result = shallow(<PanelBarItem>sometext<PanelBarContent></PanelBarContent></PanelBarItem>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Children should be either PanelBarContent or PanelBarNavigation.");
    });

    it('should accept only  PanelBarContent or PanelBarNavigation as children', () => {
        result = shallow(<PanelBarItem>sometext</PanelBarItem>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Child should be either PanelBarContent or PanelBarNavigation.");
    });
});