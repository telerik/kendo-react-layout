import * as React from 'react';
import { shallow } from 'enzyme';
import KendoPanelBar from '../src/KendoPanelBar.jsx';
import KendoPanelBarItem from '../src/KendoPanelBarItem.jsx';
import KendoPanelBarNavigation from '../src/KendoPanelBarNavigation.jsx';

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
            <KendoPanelBarItem title="first" />
            <KendoPanelBarItem title="second" />
        </KendoPanelBar>);

        let items = result.find(KendoPanelBarItem);

        expect(items.first().props().index).toEqual(0);
        expect(items.last().props().index).toEqual(1);
        expect(items.last().props().isLast).toEqual(true);
    });

    it('should pass children and props to PanelBarItem', () => {
        result = shallow(<KendoPanelBar>
            <KendoPanelBarItem title="first" active selected>
                <KendoPanelBarNavigation><KendoPanelBarItem title="third" /></KendoPanelBarNavigation>
            </KendoPanelBarItem>
            <KendoPanelBarItem title="second" disabled />
        </KendoPanelBar>);

        let items = result.find(KendoPanelBarItem);

        expect(items.first().props().index).toEqual(0);
        expect(items.first().props().active).toEqual(true);
        expect(items.first().props().selected).toEqual(true);

        expect(items.last().props().index).toEqual(1);
        expect(items.last().props().isLast).toEqual(true);
        expect(items.last().props().isLast).toEqual(true);
        expect(items.last().props().disabled).toEqual(true);

        expect(items.at(1).props().title).toEqual("third");
    });

    it('should add CSS classes', () => {
        result = shallow(<KendoPanelBar />);

        expect(result.hasClass('k-panelbar')).toEqual(true);
        expect(result.hasClass('k-widget')).toEqual(true);
        expect(result.hasClass('k-header')).toEqual(true);
        expect(result.hasClass('k-panelbar')).toEqual(true);
    });

    it('should accept only PanelBarItem as child', () => {
        result = shallow(<KendoPanelBar>sometext</KendoPanelBar>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: KendoPanelBar child should be either PanelBarItem or Array of PanelBarItem.");
    });

    it('should accept only PanelBarItem array as children', () => {
        result = shallow(<KendoPanelBar>sometext<KendoPanelBarItem title="some title" /></KendoPanelBar>);

        expect(console.error).toHaveBeenCalledWith("Warning: Failed propType: KendoPanelBar children should be either PanelBarItem or Array of PanelBarItem.");
    });
});