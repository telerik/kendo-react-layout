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

    it('should render a KendoPanelBarNavigation', () => {
        result = shallow(<KendoPanelBar />);
        expect(result.type().name).toEqual('KendoPanelBarNavigation');
    });

    it('should set isMaster to children', () => {
        result = shallow(<KendoPanelBar />);

        let items = result.find(KendoPanelBarNavigation);

        expect(items.first().props().isMaster).toEqual(true);
    });

    it('should pass custom props to children', () => {
        result = shallow(<KendoPanelBar customProp />);

        let items = result.find(KendoPanelBarNavigation);

        expect(items.first().props().customProp).toEqual(true);
    });

    it('should pass children to KendoPanelBarNavigation', () => {
        result = shallow(<KendoPanelBar>
            <KendoPanelBarItem title="first" active selected />
        </KendoPanelBar>);

        let items = result.find(KendoPanelBarItem);

        expect(items.first().props().active).toEqual(true);
        expect(items.first().props().selected).toEqual(true);
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