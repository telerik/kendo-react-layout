import * as React from 'react';
import { shallow } from 'enzyme';
import PanelBarItem from '../../src/panelbar/PanelBarItem';
import PanelBarContent from '../../src/panelbar/PanelBarContent';
import PanelBarNavigation from '../../src/panelbar/PanelBarNavigation';

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

        expect(result.find("span").first().length).toEqual(1);
        expect(result.find("span").first().text()).toEqual('sometext');
    });

    it('should add title CSS classes', () => {
        result = shallow(<PanelBarItem title="sometext" />);

        expect(result.find("span").first().hasClass('k-link')).toEqual(true);
        expect(result.find("span").first().hasClass('k-header')).toEqual(true);
        expect(result.find("span").first().hasClass('k-state-default')).toEqual(false);
        expect(result.find("span").first().hasClass('k-state-selected')).toEqual(false);
    });

    it('should not render title arrow when no children are available', () => {
        result = shallow(<PanelBarItem title="sometext" />);

        expect(result.find("span").length).toEqual(1);
    });

    it('should not render title arrow when disabled', () => {
        result = shallow(<PanelBarItem disabled title="sometext" />);

        expect(result.find("span").length).toEqual(1);
    });

    it('should not render title arrow when disabled and have children', () => {
        result = shallow(<PanelBarItem disabled title="sometext">
            <PanelBarContent><div>SomeText</div></PanelBarContent>
        </PanelBarItem>);

        expect(result.find("span").length).toEqual(1);
    });

    it('should add arrow CSS classes for expand state', () => {
        result = shallow(<PanelBarItem title="sometext" expanded>
            <PanelBarContent><div>SomeText</div></PanelBarContent>
        </PanelBarItem>);

        expect(result.find("span").last().hasClass('k-icon')).toEqual(true);
        expect(result.find("span").last().hasClass('k-i-arrow-s')).toEqual(false);
        expect(result.find("span").last().hasClass('k-i-arrow-n')).toEqual(true);
        expect(result.find("span").last().hasClass('k-panelbar-expand')).toEqual(false);
        expect(result.find("span").last().hasClass('k-panelbar-collapse')).toEqual(true);
    });

    it('should add arrow CSS classes for collapse state', () => {
        result = shallow(<PanelBarItem title="sometext">
            <PanelBarContent><div>SomeText</div></PanelBarContent>
        </PanelBarItem>);

        expect(result.find("span").last().hasClass('k-icon')).toEqual(true);
        expect(result.find("span").last().hasClass('k-i-arrow-n')).toEqual(false);
        expect(result.find("span").last().hasClass('k-i-arrow-s')).toEqual(true);
        expect(result.find("span").last().hasClass('k-panelbar-collapse')).toEqual(false);
        expect(result.find("span").last().hasClass('k-panelbar-expand')).toEqual(true);
    });

    it('should set aria-selected attribute to true', () => {
        result = shallow(<PanelBarItem selected title="sometext" />);

        expect(result.find("li").props()['aria-selected']).toEqual(true);
    });

    it('should set aria-selected attribute to false', () => {
        result = shallow(<PanelBarItem selected={false} title="sometext" />);

        expect(result.find("li").props()['aria-selected']).toEqual(false);
    });

    it('should set aria-selected attribute to false when disabled', () => {
        result = shallow(<PanelBarItem disabled selected title="sometext" />);

        expect(result.find("li").props()['aria-selected']).toEqual(false);
    });

    it('should set aria-expanded attribute to true', () => {
        result = shallow(<PanelBarItem expanded title="sometext" />);

        expect(result.find("li").props()['aria-expanded']).toEqual(true);
    });

    it('should set aria-expanded attribute to false', () => {
        result = shallow(<PanelBarItem expanded={false} title="sometext" />);

        expect(result.find("li").props()['aria-expanded']).toEqual(false);
    });

    it('should set aria-expanded attribute to false', () => {
        result = shallow(<PanelBarItem expanded disabled title="sometext" />);

        expect(result.find("li").props()['aria-expanded']).toEqual(false);
    });

    it('should set aria-hidden attribute to true', () => {
        result = shallow(<PanelBarItem expanded title="sometext" />);

        expect(result.find("li").props()['aria-hidden']).toEqual(false);
    });

    it('should set aria-hidden attribute to false', () => {
        result = shallow(<PanelBarItem expanded={false} title="sometext" />);

        expect(result.find("li").props()['aria-hidden']).toEqual(true);
    });

    it('should add CSS classes', () => {
        result = shallow(<PanelBarItem expanded />);

        expect(result.hasClass('k-item')).toEqual(true);
        expect(result.hasClass('k-state-default')).toEqual(true);
    });

    it('should add custom CSS classes', () => {
        result = shallow(<PanelBarItem className="customClass" />);

        expect(result.hasClass('k-item')).toEqual(true);
        expect(result.hasClass('customClass')).toEqual(true);
    });

    it('should add CSS classes when expanded', () => {
        result = shallow(<PanelBarItem expanded />);

        expect(result.hasClass('k-item')).toEqual(true);
        expect(result.hasClass('k-state-default')).toEqual(true);
        expect(result.hasClass('k-state-active')).toEqual(true);
    });

    it('should wrap child content in animation container', () => {
        result = shallow(<PanelBarItem expanded>
            <PanelBarContent>SomeContent</PanelBarContent>
        </PanelBarItem>);

        expect(result.find("Expand").length).toEqual(1);
    });

    it('should wrap child items in animation container', () => {
        result = shallow(<PanelBarItem expanded>
            <PanelBarNavigation>
                <PanelBarItem expanded>
                    <PanelBarContent>SomeContent</PanelBarContent>
                </PanelBarItem>
            </PanelBarNavigation>
        </PanelBarItem>);

        expect(result.find("Expand").length).toEqual(1);
    });

    it('should not wrap child content in animation container', () => {
        result = shallow(<PanelBarItem expanded animation={false}>
            <PanelBarContent>SomeContent</PanelBarContent>
        </PanelBarItem>);

        expect(result.find("PanelBarAnimationContainer").length).toEqual(0);
    });

    it('should not wrap child items in animation container', () => {
        result = shallow(<PanelBarItem expanded animation={false}>
            <PanelBarNavigation>
                <PanelBarItem expanded animation={false}>
                    <PanelBarContent>SomeContent</PanelBarContent>
                </PanelBarItem>
            </PanelBarNavigation>
        </PanelBarItem>);

        expect(result.find("PanelBarAnimationContainer").length).toEqual(0);
    });

    it('should add CSS classes when focused', () => {
        result = shallow(<PanelBarItem focused />);

        expect(result.find("span").first().hasClass('k-state-focused')).toEqual(true);
    });

    it('should not add CSS classes when focused and disabled', () => {
        result = shallow(<PanelBarItem disabled focused />);

        expect(result.find("span").first().hasClass('k-state-focused')).toEqual(false);
    });

    it('should add CSS classes when disabled', () => {
        result = shallow(<PanelBarItem expanded disabled />);

        expect(result.hasClass('k-item')).toEqual(true);
        expect(result.hasClass('k-state-default')).toEqual(false);
        expect(result.hasClass('k-state-active')).toEqual(false);
        expect(result.hasClass('k-state-disabled')).toEqual(true);
    });

    it('should add k-state-disabled CSS class', () => {
        let props = {
            disabled: true
        };

        result = shallow(<PanelBarItem title="sometext" {...props} />);

        expect(result.find("li").hasClass('k-state-disabled')).toEqual(true);
    });

    it('should collapse content if disabled', () => {
        let props = {
            disabled: true,
            expanded: true
        };

        result = shallow(<PanelBarItem disabled title="sometext" {...props}>
            <PanelBarContent>SomeContent</PanelBarContent>
        </PanelBarItem>);

        expect(result.find("PanelBarContent").length).toEqual(0);
    });

    it('should collapse navigation if disabled', () => {
        let props = {
            disabled: true,
            expanded: true
        };

        result = shallow(<PanelBarItem disabled title="sometext" {...props}>
            <PanelBarNavigation />
        </PanelBarItem>);

        expect(result.find("PanelBarNavigation").length).toEqual(0);
    });

    it('should add k-state-selected CSS class', () => {
        let props = {
            selected: true
        };

        result = shallow(<PanelBarItem title="sometext" {...props} />);

        expect(result.find("span").first().hasClass('k-state-selected')).toEqual(true);
    });

    it('should not add k-state-selected CSS class when disabled', () => {
        let props = {
            selected: true,
            disabled: true
        };

        result = shallow(<PanelBarItem title="sometext" {...props} />);

        expect(result.find("span").first().hasClass('k-state-selected')).toEqual(false);
    });

    it('should pass children and props correctly to child components', () => {
        result = shallow(
            <PanelBarItem expanded title="first">
                <PanelBarNavigation />
            </PanelBarItem>);

        let navigation = result.find(PanelBarNavigation);

        expect(navigation.props().expanded).toEqual(true);
    });

    it('handler is called when clicked', () => {
        let spy = jasmine.createSpy('click');
        result = shallow(<PanelBarItem id="10" key="10" parentId="1" onSelect={spy} />);
        result.find('span').first().simulate('click');
        expect(spy).toHaveBeenCalledWith({ 'id': '10', 'expanded': undefined, 'parentId': '1'  });
    });

    it('handler is not called for disabled panels', () => {
        let spy = jasmine.createSpy('click');
        result = shallow(<PanelBarItem disabled id="10" key="10" onSelect={spy} />);
        result.find('span').first().simulate('click');
        expect(spy).not.toHaveBeenCalled();
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
