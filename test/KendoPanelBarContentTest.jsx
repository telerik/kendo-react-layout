import * as React from 'react';
import { shallow } from 'enzyme';
import KendoPanelBarContent from '../src/KendoPanelBarContent.jsx';

describe('KendoPanelBarContent', () => {
    let result;

    beforeEach(() => {
        spyOn(console, 'error');
    });

    it('should render a div', () => {
        result = shallow(<KendoPanelBarContent />);
        expect(result.type()).toEqual('div');
    });

    it('should add CSS classes', () => {
        result = shallow(<KendoPanelBarContent />);

        expect(result.hasClass('k-content')).toEqual(true);
    });

    it('should render invisible', () => {
        result = shallow(<KendoPanelBarContent active={false} />);

        expect(result.props().style.display).toEqual('none');
    });

    it('should render visbile', () => {
        result = shallow(<KendoPanelBarContent active />);

        expect(result.props().style.display).toEqual('block');
    });

    it('should render child content', () => {
        result = shallow(<KendoPanelBarContent><p>SomeText</p></KendoPanelBarContent>);

        expect(console.error).not.toHaveBeenCalled();
        expect(result.find("p").props().children.indexOf('SomeText')).toBeGreaterThan(-1);
    });
});