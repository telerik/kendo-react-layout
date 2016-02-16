import * as React from 'react';
import { shallow } from 'enzyme';
import PanelBarNavigation from '../src/panelbar-navigation';
import PanelBarItem from '../src/panelbar-item';

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

        let children = result.node.props.children;

        expect(children[0].props.index).toEqual(0);
        expect(children[1].props.index).toEqual(1);
        expect(children[1].props.isLast).toEqual(true);
    });

    it('should pass children to PanelBarItem', () => {
        result = shallow(<PanelBarNavigation>
            <PanelBarItem title="first">
                <PanelBarNavigation><PanelBarItem title="third" /></PanelBarNavigation>
            </PanelBarItem>
            <PanelBarItem title="second" />
        </PanelBarNavigation>);

        let children = result.node.props.children;

        expect(children[0].props.index).toEqual(0);
        expect(children[1].props.index).toEqual(1);
        expect(children[1].props.isLast).toEqual(true);
        expect(children[0].props.children.props.children.props.title).toEqual("third");
    });

    it('should add CSS classes', () => {
        result = shallow(<PanelBarNavigation />);

        expect(result.props().className.indexOf('k-group')).toBeGreaterThan(-1);
        expect(result.props().className.indexOf('k-panel')).toBeGreaterThan(-1);
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