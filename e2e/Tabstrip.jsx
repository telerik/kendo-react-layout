import React from 'react';
import ReactDOM from 'react-dom';
import Tabstrip from '../src/tabstrip/Tabstrip';
import { withRoot } from 'e2e-utils';

describe('TabStrip', withRoot(root => {
    const { Tab } = Tabstrip;

    const tabstrip = (props) => ReactDOM.render(
      <Tabstrip {...props}>
        <Tab disabled={props.disabled}>
            Content 1
        </Tab>
        <Tab>
            Content 2
        </Tab>
        <Tab>
            Content 3
        </Tab>
      </Tabstrip>
      , root[0]);
    let props;

    const createKeyEvent = (code) => {
        let event = document.createEvent('Event');
        event.initEvent("keydown", true, true);
        event.keyCode = code;
        return event;
    };

    it('should add k-item class', () => {
        props = {
            disabled: false,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(1)[0];
        expect(item.classList.contains('k-item')).toBe(true);
    });

    it('should add k-state-default class', () => {
        props = {
            disabled: false,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(1)[0];
        expect(item.classList.contains('k-state-default')).toBe(true);
    });

    it('should select tabstrip navigation item', () => {
        props = {
            disabled: false,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(1)[0];
        item.dispatchEvent(new Event('click', { bubbles: true }));
        tabstrip(props);
        expect(item.classList.contains('k-state-active')).toBe(true);
    });

    it('should add tab-on-top class when selected', () => {
        props = {
            disabled: false,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(1)[0];
        item.dispatchEvent(new Event('click', { bubbles: true }));
        tabstrip(props);
        expect(item.classList.contains('k-tab-on-top')).toBe(true);
    });

    it('should change tabindex when selected', () => {
        props = {
            disabled: false,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(1)[0];
        item.dispatchEvent(new Event('click', { bubbles: true }));
        tabstrip(props);
        expect(item.tabIndex).toBe(0);
    });

    it('disabled tab is rendered with k-state-disabled', () => {
        props = {
            disabled: true,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(0)[0];
        expect(item.classList.contains('k-state-disabled')).toBe(true);
    });

    it('should not select disabled item', () => {
        props = {
            disabled: true,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(1)[0];
        item.dispatchEvent(new Event('click', { bubbles: true }));
        tabstrip(props);
        expect(item.classList.contains('k-state-disabled')).toBe(false);
    });

    it('should navigate to next tab when right key is pressed', () => {
        props = {
            disabled: false,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(0)[0];
        const navigatedItem = root.find('.k-item').eq(1)[0];

        item.dispatchEvent(createKeyEvent(39));
        tabstrip(props);
        expect(navigatedItem.classList.contains('k-state-active')).toBe(true);
    });

    it('should navigate to next tab when down key is pressed', () => {
        props = {
            disabled: false,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(0)[0];
        const navigatedItem = root.find('.k-item').eq(1)[0];

        item.dispatchEvent(createKeyEvent(40));
        tabstrip(props);
        expect(navigatedItem.classList.contains('k-state-active')).toBe(true);
    });

    it('should navigate to prev tab when left key is pressed', () => {
        props = {
            disabled: false,
            selected: 1,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(1)[0];
        const navigatedItem = root.find('.k-item').eq(0)[0];

        item.dispatchEvent(createKeyEvent(37));
        tabstrip(props);
        expect(navigatedItem.classList.contains('k-state-active')).toBe(true);
    });

    it('should navigate to prev tab when up key is pressed', () => {
        props = {
            disabled: false,
            selected: 1,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(1)[0];
        const navigatedItem = root.find('.k-item').eq(0)[0];

        item.dispatchEvent(createKeyEvent(38));
        tabstrip(props);
        expect(navigatedItem.classList.contains('k-state-active')).toBe(true);
    });

    it('should navigate to first tab when up home is pressed', () => {
        props = {
            disabled: false,
            selected: 1,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(1)[0];
        const navigatedItem = root.find('.k-item').eq(0)[0];

        item.dispatchEvent(createKeyEvent(36));
        tabstrip(props);
        expect(navigatedItem.classList.contains('k-state-active')).toBe(true);
    });

    it('should navigate to last tab when up end is pressed', () => {
        props = {
            disabled: false,
            selected: 0,
            onSelect(e) {
                props.selected = e.selected;
            }
        };
        tabstrip(props);
        const item = root.find('.k-item').eq(0)[0];
        const navigatedItem = root.find('.k-item').eq(2)[0];
        item.dispatchEvent(createKeyEvent(35));
        tabstrip(props);
        expect(navigatedItem.classList.contains('k-state-active')).toBe(true);
    });
}));
