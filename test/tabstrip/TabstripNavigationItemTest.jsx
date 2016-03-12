import * as React from 'react';
import { shallow } from 'enzyme';
import TabstripNavigationItem from '../../src/tabstrip/TabstripNavigationItem';

describe('TabstripNavigationItem', () => {
    let result;
    let activeProps = {
        active: true
    };

    it('active item gets aria-selected attr', () => {
        result = shallow(<TabstripNavigationItem {...activeProps} />);
        expect(result.prop('aria-selected')).toBe(true);
    });

    it('active item gets tabIndex set correctly', () => {
        result = shallow(<TabstripNavigationItem {...activeProps} />);
        expect(result.prop('tabIndex')).toBe(0);
    });

    it('item gets role set correctly', () => {
        result = shallow(<TabstripNavigationItem />);
        expect(result.prop('role')).toBe('tab');
    });

    it('untitled tab is rendered with title', () => {
        result = shallow(<TabstripNavigationItem />);
        expect(result.text()).toBe("Untitled");
    });

    it('handler is called when clicked', () => {
        let spy = jasmine.createSpy('click');
        result = shallow(<TabstripNavigationItem onSelect={spy} />);
        result.simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});
