import * as React from 'react';
import { shallow } from 'enzyme';
import Tabstrip from '../../src/tabstrip/Tabstrip';
import TabstripNavigation from '../../src/tabstrip/TabstripNavigation';

describe('Tabstrip', () => {
    let result;
    const { Tab } = Tabstrip;

    it('should render a div', () => {
        result = shallow(<Tabstrip><Tab>Tab</Tab></Tabstrip>);
        expect(result.type()).toEqual('div');
    });

    it('renders k-tabstrip class correctly', () => {
        result = shallow(<Tabstrip><Tab>Tab</Tab></Tabstrip>);
        expect(result.hasClass('k-tabstrip')).toEqual(true);
    });

    it('renders k-widget class correctly', () => {
        result = shallow(<Tabstrip><Tab>Tab</Tab></Tabstrip>);
        expect(result.hasClass('k-widget')).toEqual(true);
    });

    it('renders k-floatwrap class correctly', () => {
        result = shallow(<Tabstrip><Tab>Tab</Tab></Tabstrip>);
        expect(result.hasClass('k-floatwrap')).toEqual(true);
    });

    it('renders k-header class correctly', () => {
        result = shallow(<Tabstrip><Tab>Tab</Tab></Tabstrip>);
        expect(result.hasClass('k-header')).toEqual(true);
    });

    it('renders k-tabstrip-left when left tab position is set', () => {
        result = shallow(<Tabstrip tabPosition="left"><Tab>Tab</Tab></Tabstrip>);
        expect(result.hasClass('k-tabstrip-left')).toEqual(true);
    });

    it('renders k-tabstrip-right when right tab position is set', () => {
        result = shallow(<Tabstrip tabPosition="right"><Tab>Tab</Tab></Tabstrip>);
        expect(result.hasClass('k-tabstrip-right')).toEqual(true);
    });

    it('renders k-tabstrip-bottom when bottom tab position is set', () => {
        result = shallow(<Tabstrip tabPosition="bottom"><Tab>Tab</Tab></Tabstrip>);
        expect(result.hasClass('k-tabstrip-bottom')).toEqual(true);
    });

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
