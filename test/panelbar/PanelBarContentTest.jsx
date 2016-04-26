import * as React from 'react';
import { shallow } from 'enzyme';
import PanelBarContent from '../../src/panelbar/PanelBarContent';

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

        expect(result.hasClass('k-content')).toEqual(true);
    });

    it('should add custom CSS classes', () => {
        result = shallow(<PanelBarContent className="customClass" />);

        expect(result.hasClass('k-content')).toEqual(true);
        expect(result.hasClass('customClass')).toEqual(true);
    });

    it('should render invisible', () => {
        result = shallow(<PanelBarContent active={false} />);

        expect(result.props().style.display).toEqual('none');
    });

    it('should render visbile', () => {
        result = shallow(<PanelBarContent expanded />);

        expect(result.props().style.display).toEqual('block');
    });

    it('should render child content', () => {
        result = shallow(<PanelBarContent><p>SomeText</p></PanelBarContent>);

        expect(console.error).not.toHaveBeenCalled();
        expect(result.find("p").props().children.indexOf('SomeText')).toBeGreaterThan(-1);
    });
});