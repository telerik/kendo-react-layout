import React from 'react';
import ReactDOM from 'react-dom';
import TabstripContent from '../src/tabstrip/TabstripContent';
import { withRoot } from 'e2e-utils';

describe('TabstripContent', withRoot(root => {
    const content = () => ReactDOM.render( <TabstripContent {...props}><div>content</div><div>content2</div></TabstripContent>, root[0]);
    let props = {
        selected: 0
    };
    it('should render a single element', () => {
        content();
        const div = root.find('.k-content');
        expect(div.length).toEqual(1);
    });

    it('should render children', () => {
        content();
        const div = root.find('.k-content');
        expect(div.children().length).toEqual(1);
    });

    it('should render k-state-active class', () => {
        content();
        const div = root.find('.k-state-active');
        expect(div.length).toEqual(1);
    });

    it('should render aria-expanded attr', () => {
        content();
        const div = root.find('[aria-expanded=true]');
        expect(div.length).toEqual(1);
    });

    it('should render role attr', () => {
        content();
        const div = root.find('[role=tabpanel]');
        expect(div.length).toEqual(1);
    });
}));
