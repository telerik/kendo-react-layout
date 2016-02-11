import * as React from 'react';
import { shallow } from 'enzyme';
import PanelBarContent from '../src/panelbar-content';

describe('PanelBarContent', () => {
    let result;

    beforeEach(() => {
      spyOn(console, 'error');
    });

    it('should render a div', () => {
        result = shallow(<PanelBarContent />);
        expect(result.type()).toEqual('div');
    });

    it('should add CSS classes', () => {
        result = shallow(<PanelBarContent />);

        expect(result.props().className.indexOf('k-content')).toBeGreaterThan(-1);
    });

    it('should render child content', () => {
        result = shallow(<PanelBarContent>SomeText</PanelBarContent>);

        expect(result.props().children.indexOf('SomeText')).toBeGreaterThan(-1);
    });
});