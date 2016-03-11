import * as React from 'react';
import { shallow } from 'enzyme';
import Tabstrip from '../../src/tabstrip/Tabstrip';
import TabstripNavigation from '../../src/tabstrip/TabstripNavigation';

describe('Tabstrip', () => {
    let result;
    const { Tab } = Tabstrip;

    it('should render a div', () => {
        result = shallow(<Tabstrip />);
        expect(result.type()).toEqual('div');
    });

// see https://github.com/css-modules/webpack-demo/issues/5 to uncomment this
// stub loader in react-tasks should be changed
//  it('renders class names correctly', () => {
//      result = shallow(<Tabstrip />);
//      expect(result.hasClass('k-Tabstrip')).toEqual(true);
//  });

    it('selectes correct tab', () => {
        result = shallow(<Tabstrip selected={1}><Tab /><Tab /></Tabstrip>);
        let item = result.children().first().children().last();
        expect(item.root.unrendered.props.selected).toBe(1);
    });

    it('no tabs are selected when passed null', () => {
        result = shallow(<Tabstrip selected={null}><Tab /></Tabstrip>);
        expect(result.children().first().hasClass('k-state-selected')).toBe(false);
    });

    it('renders tab title', () => {
        result = shallow(<Tabstrip selected={1}><Tab title="Title" /><Tab /></Tabstrip>);
        let navigation = result.find(TabstripNavigation);
        let renderedTitle = navigation.children().first().node.props.title;
        expect(renderedTitle).toBe("Title");
    });
});