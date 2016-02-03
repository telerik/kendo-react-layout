import * as React from 'react';
import { shallow } from 'enzyme';
import KendoPanelBar from '../src/kendo-panelbar';

describe('KendoPanelBar', () => {
  let result;

  beforeEach(() => { /* test setup */ });

  it('should render a div', () => {
    result = shallow(<KendoPanelBar />);
    expect(result.type()).toEqual('div');
  });
});
