import * as React from 'react';
import { shallow } from 'enzyme';
import Tabstrip from '../../src/tabstrip/Tabstrip';
import TabstripNavigation from '../../src/tabstrip/TabstripNavigation';

describe('TabstripNavigation', () => {
    let result;
    const { Tab } = Tabstrip;

    it('renders ul elements for navigation', () => {
        result = shallow(<TabstripNavigation><Tab /><Tab /></TabstripNavigation>);
        expect(result.find('ul').length).toEqual(1);
    });

    it('renders correct number of child elements', () => {
        result = shallow(<TabstripNavigation><Tab /><Tab /></TabstripNavigation>);
        expect(result.children().length).toEqual(2);
    });
});