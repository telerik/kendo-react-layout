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

        expect(result.find("span").length).toEqual(1);
        expect(result.find("span").text()).toEqual('sometext');
    });

    it('should add title CSS classes', () => {
        result = shallow(<PanelBarItem title="sometext" />);

        expect(result.find("span").hasClass('k-link')).toBeGreaterThan(-1);
        expect(result.find("span").hasClass('k-header')).toBeGreaterThan(-1);
        expect(result.find("span").hasClass('k-state-selected')).toEqual(false);
        expect(result.find("span").hasClass('k-state-default')).toBeGreaterThan(-1);
    });

    it('should add k-first CSS class', () => {
        let props = {
            index: 0
        };

        result = shallow(<PanelBarItem title="sometext" {...props} />);

        expect(result.find("li").first().hasClass('k-first')).toEqual(true);
    });

    it('should add k-last CSS class', () => {
        let props = {
            isLast: true
        };

        result = shallow(<PanelBarItem title="sometext" {...props} />);

        expect(result.find("li").hasClass('k-last')).toBeGreaterThan(-1);
    });

    it('should add CSS classes', () => {
        result = shallow(<PanelBarItem />);

        expect(result.props().className.indexOf('k-item')).toBeGreaterThan(-1);
        expect(result.props().className.indexOf('k-state-default')).toBeGreaterThan(-1);
    });

    it('should accept only  PanelBarContent or PanelBarNavigation as child', () => {
        result = shallow(<PanelBarItem>sometext<PanelBarContent/></PanelBarItem>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Children should be either PanelBarContent or PanelBarNavigation.");
    });

    it('should accept only  PanelBarContent or PanelBarNavigation as children', () => {
        result = shallow(<PanelBarItem>sometext</PanelBarItem>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Child should be either PanelBarContent or PanelBarNavigation.");
    });
});