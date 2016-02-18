import * as React from 'react';
import { shallow } from 'enzyme';
import KendoPanelBar from '../src/kendo-panelbar';
import PanelBarItem from '../src/panelbar-item';
import PanelBarNavigation from '../src/panelbar-navigation';

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
            <PanelBarItem title="first" />
            <PanelBarItem title="second" />
        </KendoPanelBar>);

        let items = result.find(PanelBarItem);

        expect(items.first().props().index).toEqual(0);
        expect(items.last().props().index).toEqual(1);
        expect(items.last().props().isLast).toEqual(true);
    });

    it('should pass children and props to PanelBarItem', () => {
        result = shallow(<KendoPanelBar>
            <PanelBarItem title="first" active>
                <PanelBarNavigation><PanelBarItem title="third" /></PanelBarNavigation>
            </PanelBarItem>
            <PanelBarItem title="second" />
        </KendoPanelBar>);

        let items = result.find(PanelBarItem);

        expect(items.first().props().index).toEqual(0);
        expect(items.first().props().active).toEqual(true);
        expect(items.last().props().index).toEqual(1);
        expect(items.last().props().isLast).toEqual(true);
        expect(items.last().props().isLast).toEqual(true);
        expect(items.at(1).props().title).toEqual("third");
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