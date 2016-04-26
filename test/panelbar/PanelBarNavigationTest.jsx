import * as React from 'react';
import { shallow } from 'enzyme';
import PanelBarNavigation from '../../src/panelbar/PanelBarNavigation';
import PanelBarItem from '../../src/panelbar/PanelBarItem';

describe('PanelBarNavigation', () => {
    let result;

    beforeEach(() => {
        spyOn(console, 'error');
    });

    it('should render a ul', () => {
        result = shallow(<PanelBarNavigation />);
        expect(result.type()).toEqual('ul');
    });

    it('should pass valid props to children', () => {
        result = shallow(<PanelBarNavigation>
            <PanelBarItem expanded selected id="200" title="first">
                <PanelBarNavigation><PanelBarItem title="third" /></PanelBarNavigation>
            </PanelBarItem>
            <PanelBarItem disabled title="second" />
        </PanelBarNavigation>);

        let items = result.find(PanelBarItem);

        expect(items.first().props().expanded).toEqual(true);
        expect(items.first().props().selected).toEqual(true);
        expect(items.first().props().id).toEqual("200");

        expect(items.last().props().disabled).toEqual(true);

        expect(items.at(1).props().title).toEqual("third");
    });

    it('should pass valid props to children depending on priority', () => {
        result = shallow(<PanelBarNavigation>
            <PanelBarItem expanded id="200" selected title="first">
                <PanelBarNavigation><PanelBarItem title="third" /></PanelBarNavigation>
            </PanelBarItem>
        </PanelBarNavigation>);

        let items = result.find(PanelBarItem);

        expect(items.first().props().expanded).toEqual(true);
        expect(items.first().props().selected).toEqual(true);
    });

    it('should add master CSS classes', () => {
        result = shallow(<PanelBarNavigation root />);

        expect(result.hasClass('k-panelbar')).toEqual(true);
        expect(result.hasClass('k-widget')).toEqual(true);
        expect(result.hasClass('k-header')).toEqual(true);
        expect(result.hasClass('k-panelbar')).toEqual(true);
        expect(result.hasClass('k-group')).toEqual(false);
        expect(result.hasClass('k-panel')).toEqual(false);
    });

    it('should add CSS classes', () => {
        result = shallow(<PanelBarNavigation />);

        expect(result.hasClass('k-panelbar')).toEqual(false);
        expect(result.hasClass('k-widget')).toEqual(false);
        expect(result.hasClass('k-header')).toEqual(false);
        expect(result.hasClass('k-panelbar')).toEqual(false);
        expect(result.hasClass('k-panel')).toEqual(true);
    });

    it('should add custom CSS classes', () => {
        result = shallow(<PanelBarNavigation className="customClass" />);

        expect(result.hasClass('k-panel')).toEqual(true);
        expect(result.hasClass('customClass')).toEqual(true);
    });

    it('should add tabIndex', () => {
        result = shallow(<PanelBarNavigation tabIndex={0} />);

        expect(result.props().tabIndex).toEqual(0);
    });

    it('handler is called when key is pressed', () => {
        let spy = jasmine.createSpy('keydown');
        result = shallow(<PanelBarNavigation onKeyDown={spy} />);
        result.simulate('keydown');
        expect(spy).toHaveBeenCalled();
    });

    it('handler is called when item is focused', () => {
        let spy = jasmine.createSpy('focus');
        result = shallow(<PanelBarNavigation onFocus={spy} />);
        result.simulate('focus');
        expect(spy).toHaveBeenCalled();
    });

    it('handler is called when item is blurred', () => {
        let spy = jasmine.createSpy('blur');
        result = shallow(<PanelBarNavigation onBlur={spy} />);
        result.simulate('blur');
        expect(spy).toHaveBeenCalled();
    });

    it('should render invisible', () => {
        result = shallow(<PanelBarNavigation expanded={false} />);

        expect(result.props().style.display).toEqual('none');
    });

    it('should render visible', () => {
        result = shallow(<PanelBarNavigation expanded />);

        expect(result.props().style.display).toEqual('block');
    });

    it('should accept only PanelBarItem as child', () => {
        result = shallow(<PanelBarNavigation>sometext</PanelBarNavigation>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Navigation child should be either PanelBarItem or Array of PanelBarItem.");
    });

    it('should accept only PanelBarItem array as children', () => {
        result = shallow(<PanelBarNavigation>sometext<PanelBarItem title="some title" /></PanelBarNavigation>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Navigation children should be either PanelBarItem or Array of PanelBarItem.");
    });
});
