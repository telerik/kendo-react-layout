import * as React from 'react';
import { shallow } from 'enzyme';
import TabstripNavigationItem from '../../src/tabstrip/TabstripNavigationItem';

describe('TabstripNavigationItem', () => {
    let result;
    let activeProps = {
        active: true
    };

// see https://github.com/css-modules/webpack-demo/issues/5 to uncomment this
// stub loader in react-tasks should be changed
//    it('gets k-item class', () => {
//        result = shallow(<TabstripNavigationItem />);
//        let item = result.find('li').first();
//        expect(item.hasClass('k-item')).toBe(true);
//    });
//
//    it('active item gets k-state-active class', () => {
//        result = shallow(<TabstripNavigationItem {...activeProps} />);
//        expect(result.hasClass('k-state-active')).toBe(true);
//    });
//
//    it('active item gets k-tab-on-top class', () => {
//        result = shallow(<TabstripNavigationItem {...activeProps} />);
//        expect(result.hasClass('k-tab-on-top')).toBe(true);
//    });

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

// see https://github.com/css-modules/webpack-demo/issues/5 to uncomment this
// stub loader in react-tasks should be changed
//    it('disabled tab is rendered with k-state-disabled class', () => {
//        let props = {
//            disabled: true
//        };
//        result = shallow(<TabstripNavigationItem {...props} />);
//        expect(result.hasClass('k-state-disabled')).toBe(true);
//    });

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
