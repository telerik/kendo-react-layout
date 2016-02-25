import * as React from 'react';
import { shallow } from 'enzyme';
import KendoPanelBarItem from '../src/KendoPanelBarItem.jsx';
import KendoPanelBarContent from '../src/KendoPanelBarContent.jsx';
import KendoPanelBarNavigation from '../src/KendoPanelBarNavigation.jsx';

describe('KendoPanelBarItem', () => {
    let result;

    beforeEach(() => {
        spyOn(console, 'error');
    });

    it('should render a li', () => {
        result = shallow(<KendoPanelBarItem />);
        expect(result.type()).toEqual('li');
    });

    it('should render title correctly', () => {
        result = shallow(<KendoPanelBarItem title="sometext" />);

        expect(result.find("span").length).toEqual(1);
        expect(result.find("span").text()).toEqual('sometext');
    });

    it('should add title CSS classes', () => {
        result = shallow(<KendoPanelBarItem title="sometext" />);

        expect(result.find("span").hasClass('k-link')).toBeGreaterThan(-1);
        expect(result.find("span").hasClass('k-header')).toBeGreaterThan(-1);
        expect(result.find("span").hasClass('k-state-default')).toBeGreaterThan(-1);
        expect(result.find("span").hasClass('k-state-selected')).toEqual(false);
    });

    it('should add CSS classes', () => {
        result = shallow(<KendoPanelBarItem />);

        expect(result.hasClass('k-item')).toEqual(true);
        expect(result.hasClass('k-state-default')).toEqual(true);
    });

    it('should add k-first CSS class', () => {
        let props = {
            index: 0
        };

        result = shallow(<KendoPanelBarItem title="sometext" {...props} />);

        expect(result.find("li").first().hasClass('k-first')).toEqual(true);
    });

    it('should add k-last CSS class', () => {
        let props = {
            isLast: true
        };

        result = shallow(<KendoPanelBarItem title="sometext" {...props} />);

        expect(result.find("li").hasClass('k-last')).toEqual(true);
    });

    it('should add k-state-disabled CSS class', () => {
        let props = {
            disabled: true
        };

        result = shallow(<KendoPanelBarItem title="sometext" {...props} />);

        expect(result.find("li").hasClass('k-state-disabled')).toEqual(true);
    });

    it('should collapse content if disabled', () => {
        let props = {
            disabled: true,
            active: true
        };

        result = shallow(<KendoPanelBarItem disabled title="sometext" {...props}>
            <KendoPanelBarContent>SomeContent</KendoPanelBarContent>
        </KendoPanelBarItem>);

        expect(result.find("KendoPanelBarContent").props().active).toEqual(false);
    });

    it('should collapse navigation if disabled', () => {
        let props = {
            disabled: true,
            active: true
        };

        result = shallow(<KendoPanelBarItem disabled title="sometext" {...props}>
            <KendoPanelBarNavigation />
        </KendoPanelBarItem>);

        expect(result.find(KendoPanelBarNavigation).props().active).toEqual(false);
    });

    it('should add k-state-selected CSS class', () => {
        let props = {
            selected: true
        };

        result = shallow(<KendoPanelBarItem title="sometext" {...props} />);

        expect(result.find("span").first().hasClass('k-state-selected')).toEqual(true);
    });

    it('should not add k-state-selected CSS class when disabled', () => {
        let props = {
            selected: true,
            disabled: true
        };

        result = shallow(<KendoPanelBarItem title="sometext" {...props} />);

        expect(result.find("span").first().hasClass('k-state-selected')).toEqual(false);
    });

    it('should pass children and props correctly to child components', () => {
        result = shallow(
            <KendoPanelBarItem active title="first">
                <KendoPanelBarNavigation />
            </KendoPanelBarItem>);

        let navigation = result.find(KendoPanelBarNavigation);

        expect(navigation.props().active).toEqual(true);
    });

    it('handler is called when clicked', () => {
        let spy = jasmine.createSpy('click');
        result = shallow(<KendoPanelBarItem onSelect={spy} key="10" itemKey="10" />);
        result.find('span').simulate('click');
        expect(spy).toHaveBeenCalledWith("10");
    });

    it('handler is not called for disabled panels', () => {
        let spy = jasmine.createSpy('click');
        result = shallow(<KendoPanelBarItem disabled onSelect={spy} key="10" itemKey="10" />);
        result.find('span').simulate('click');
        expect(spy).not.toHaveBeenCalled();
    });

    it('should accept only  PanelBarContent or PanelBarNavigation as child', () => {
        result = shallow(<KendoPanelBarItem>sometext<KendoPanelBarContent/></KendoPanelBarItem>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Children should be either PanelBarContent or PanelBarNavigation.");
    });

    it('should accept only  PanelBarContent or PanelBarNavigation as children', () => {
        result = shallow(<KendoPanelBarItem>sometext</KendoPanelBarItem>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Child should be either PanelBarContent or PanelBarNavigation.");
    });
});