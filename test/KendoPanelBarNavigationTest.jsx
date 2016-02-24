import * as React from 'react';
import { shallow } from 'enzyme';
import KendoPanelBarNavigation from '../src/KendoPanelBarNavigation.jsx';
import KendoPanelBarItem from '../src/KendoPanelBarItem.jsx';

describe('KendoPanelBarNavigation', () => {
    let result;

    beforeEach(() => {
        spyOn(console, 'error');
    });

    it('should render a ul', () => {
        result = shallow(<KendoPanelBarNavigation />);
        expect(result.type()).toEqual('ul');
    });

    it('should pass index to children', () => {
        result = shallow(<KendoPanelBarNavigation>
            <KendoPanelBarItem title="first" />
            <KendoPanelBarItem title="second" />
        </KendoPanelBarNavigation>);

        let items = result.find(KendoPanelBarItem);

        expect(items.first().props().index).toEqual(0);
        expect(items.last().props().index).toEqual(1);
        expect(items.last().props().isLast).toEqual(true);
    });

    it('should pass children to PanelBarItem', () => {
        result = shallow(<KendoPanelBarNavigation>
            <KendoPanelBarItem title="first" active selected>
                <KendoPanelBarNavigation><KendoPanelBarItem title="third" /></KendoPanelBarNavigation>
            </KendoPanelBarItem>
            <KendoPanelBarItem title="second" disabled />
        </KendoPanelBarNavigation>);

        let items = result.find(KendoPanelBarItem);

        expect(items.first().props().index).toEqual(0);
        expect(items.first().props().active).toEqual(true);
        expect(items.first().props().selected).toEqual(true);

        expect(items.last().props().index).toEqual(1);
        expect(items.last().props().isLast).toEqual(true);
        expect(items.last().props().disabled).toEqual(true);

        expect(items.at(1).props().title).toEqual("third");
    });

    it('should add master CSS classes', () => {
        result = shallow(<KendoPanelBarNavigation isMaster />);

        expect(result.hasClass('k-panelbar')).toEqual(true);
        expect(result.hasClass('k-widget')).toEqual(true);
        expect(result.hasClass('k-header')).toEqual(true);
        expect(result.hasClass('k-panelbar')).toEqual(true);
        expect(result.hasClass('k-group')).toEqual(false);
        expect(result.hasClass('k-panel')).toEqual(false);
    });

    it('should add CSS classes', () => {
        result = shallow(<KendoPanelBarNavigation />);

        expect(result.hasClass('k-panelbar')).toEqual(false);
        expect(result.hasClass('k-widget')).toEqual(false);
        expect(result.hasClass('k-header')).toEqual(false);
        expect(result.hasClass('k-panelbar')).toEqual(false);
        expect(result.hasClass('k-group')).toEqual(true);
        expect(result.hasClass('k-panel')).toEqual(true);
    });

    it('should render invisible', () => {
        result = shallow(<KendoPanelBarNavigation active={false} />);

        expect(result.props().style.display).toEqual('none');
    });

    it('should render visible', () => {
        result = shallow(<KendoPanelBarNavigation active />);

        expect(result.props().style.display).toEqual('block');
    });

    it('should accept only PanelBarItem as child', () => {
        result = shallow(<KendoPanelBarNavigation>sometext</KendoPanelBarNavigation>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Navigation child should be either PanelBarItem or Array of PanelBarItem.");
    });

    it('should accept only PanelBarItem array as children', () => {
        result = shallow(<KendoPanelBarNavigation>sometext<KendoPanelBarItem title="some title" /></KendoPanelBarNavigation>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: Navigation children should be either PanelBarItem or Array of PanelBarItem.");
    });
});