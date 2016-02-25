import * as React from 'react';
import { shallow } from 'enzyme';
import PanelBarNavigation from '../src/PanelBarNavigation.jsx';
import PanelBarItem from '../src/PanelBarItem.jsx';

describe('PanelBarNavigation', () => {
    let result;

    beforeEach(() => {
        spyOn(console, 'error');
    });

    it('should render a ul', () => {
        result = shallow(<PanelBarNavigation />);
        expect(result.type()).toEqual('ul');
    });

    it('should pass index to children', () => {
        result = shallow(<PanelBarNavigation>
            <PanelBarItem title="first" />
            <PanelBarItem title="second" />
        </PanelBarNavigation>);

        let items = result.find(PanelBarItem);

        expect(items.first().props().index).toEqual(0);
        expect(items.last().props().index).toEqual(1);
        expect(items.last().props().isLast).toEqual(true);
    });

    it('should pass valid props to children', () => {
        result = shallow(<PanelBarNavigation>
            <PanelBarItem title="first" active selected key="200">
                <PanelBarNavigation><PanelBarItem title="third" /></PanelBarNavigation>
            </PanelBarItem>
            <PanelBarItem title="second" disabled />
        </PanelBarNavigation>);

        let items = result.find(PanelBarItem);

        expect(items.first().props().index).toEqual(0);
        expect(items.first().props().active).toEqual(true);
        expect(items.first().props().selected).toEqual(true);
        expect(items.first().props().itemKey).toEqual("200");

        expect(items.last().props().index).toEqual(1);
        expect(items.last().props().isLast).toEqual(true);
        expect(items.last().props().disabled).toEqual(true);

        expect(items.at(1).props().title).toEqual("third");
    });

    it('should add master CSS classes', () => {
        result = shallow(<PanelBarNavigation isMaster />);

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
        expect(result.hasClass('k-group')).toEqual(true);
        expect(result.hasClass('k-panel')).toEqual(true);
    });

    it('should render invisible', () => {
        result = shallow(<PanelBarNavigation active={false} />);

        expect(result.props().style.display).toEqual('none');
    });

    it('should render visible', () => {
        result = shallow(<PanelBarNavigation active />);

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