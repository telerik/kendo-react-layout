import React from 'react';
import ReactDOM from 'react-dom';
import PanelBar from '../src/panelbar/PanelBar';
import PanelBarItem from '../src/panelbar/PanelBarItem';
import PanelBarNavigation from '../src/panelbar/PanelBarNavigation';
import PanelBarContent from '../src/panelbar/PanelBarContent';
import { withRoot } from 'e2e-utils';

describe('PanelBar', withRoot(root => {
    const panelBar = (props = {}) => {
        const {
            panelBarProps,
            firstItemProps,
            secondItemProps,
            thirdItemProps,
            nestedItemProps
            } = props;

        const extendedProps = {
            panelBarProps: panelBarProps || {},
            firstItemProps: Object.assign({ title:"first item", id:1 }, firstItemProps || {}),
            secondItemProps: Object.assign({ title:"second item", id:2 }, secondItemProps || {}),
            thirdItemProps: Object.assign({ title:"third item", id:3 }, thirdItemProps || {}),
            nestedItemProps: Object.assign({ title:"nested item", id:4 }, nestedItemProps || {})
        };

        ReactDOM.render(
            <PanelBar {...extendedProps.panelBarProps}>
                <PanelBarItem { ...extendedProps.firstItemProps } />
                <PanelBarItem { ...extendedProps.secondItemProps }>
                    <PanelBarNavigation>
                        <PanelBarItem { ...extendedProps.nestedItemProps }>
                            <PanelBarContent>
                                <div>nested item content</div>
                            </PanelBarContent>
                        </PanelBarItem>
                    </PanelBarNavigation>
                </PanelBarItem>
                <PanelBarItem { ...extendedProps.thirdItemProps} />
            </PanelBar>
            , root[0]);
    };
    let props;

    const createKeyEvent = (code) => {
        let event = document.createEvent('Event');
        event.initEvent("keydown", true, true);
        event.keyCode = code;
        return event;
    };

    it('should add root ul CSS classes', () => {
        panelBar();

        const item = root.children()[0];

        expect(item.classList.contains('k-widget')).toBe(true);
        expect(item.classList.contains('k-reset')).toBe(true);
        expect(item.classList.contains('k-header')).toBe(true);
        expect(item.classList.contains('k-panelbar')).toBe(true);
        expect(item.classList.contains('k-panel')).toBe(false);
    });

    it('should add child ul CSS classes', () => {
        panelBar({
            secondItemProps: {
                expanded: true
            }
        });

        const item = root.find("ul")[1];

        expect(item.classList.contains('k-widget')).toBe(false);
        expect(item.classList.contains('k-reset')).toBe(false);
        expect(item.classList.contains('k-header')).toBe(false);
        expect(item.classList.contains('k-panelbar')).toBe(false);
        expect(item.classList.contains('k-panel')).toBe(true);
    });

    it('should add item disabled class', () => {
        panelBar({
            firstItemProps: {
                disabled: true
            }
        });

        const item = root.find("li")[0];

        expect(item.classList.contains('k-state-disabled')).toBe(true);
    });

    it('should not add item disabled class', () => {
        panelBar({
            firstItemProps: {
                disabled: false
            }
        });

        const item = root.find("li")[1];

        expect(item.classList.contains('k-state-disabled')).toBe(false);
    });

    it('should not render child items if disabled', () => {
        panelBar({
            firstItemProps: {
                disabled: true,
                expanded: true
            },
            secondItemProps: {
                expanded: true
            }
        });

        const item = root.find("li")[0].children[1];

        expect(!!item).toBe(false);
    });

    it('should render animation wrapper', () => {
        panelBar({
            secondItemProps: {
                expanded: true
            }
        });

        const item = root.find("li")[1].children[1];

        expect(item.classList.contains("k-animation-container")).toBe(true);
    });

    it('should not render animation wrapper', () => {
        panelBar({
            panelBarProps: {
                animation: false
            },
            secondItemProps: {
                expanded: true
            }
        });

        const item = root.find("li")[1].children[1];

        expect(item.classList.contains("k-animation-container")).toBe(false);
    });

    it('should render content of items', () => {
        panelBar({
            secondItemProps: {
                expanded: true
            },
            nestedItemProps: {
                expanded: true
            }
        });

        const item = root.find("li")[1].children[1];

        expect(root.find(".k-content").length).toBe(1);
    });

    it('should not render content of items', () => {
        panelBar({
            secondItemProps: {
                expanded: true
            },
            nestedItemProps: {
                expanded: false
            }
        });

        const item = root.find("li")[1].children[1];

        expect(root.find(".k-content").length).toBe(0);
    });

    it('should not render child items if collapsed', () => {
        panelBar({
            firstItemProps: {
                expanded: false
            },
            secondItemProps: {
                expanded: true
            }
        });

        const item = root.find("li")[0].children[1];

        expect(!!item).toBe(false);
    });

    it('should add item selected class', () => {
        panelBar({
            firstItemProps: {
                selected: true
            }
        });

        const item = root.find("li")[0];

        expect(item.firstChild.classList.contains('k-state-selected')).toBe(true);
    });

    it('should not add item selected class', () => {
        panelBar({
            firstItemProps: {
                selected: false
            }
        });

        const item = root.find("li")[1];

        expect(item.classList.contains('k-state-selected')).toBe(false);
    });

    it('should not add item focused class', () => {
        panelBar({
            firstItemProps: {
                focused: false
            }
        });

        const item = root.find("li")[1];

        expect(item.classList.contains('k-state-focused')).toBe(false);
    });

    it('should add item focused class', () => {
        panelBar({
            firstItemProps: {
                focused: true
            }
        });

        const item = root.find("li")[0];

        expect(item.firstChild.classList.contains('k-state-focused')).toBe(true);
    });

    it('should add item focused class', () => {
        panelBar({
            firstItemProps: {
                focused: false
            }
        });

        const item = root.find("li")[0];

        expect(item.firstChild.classList.contains('k-state-focused')).toBe(false);
    });

    it('should add south arrow when there are children and collapsed', () => {
        panelBar();

        const child = root.find("li")[1].children[0].children[0];

        expect(child.classList.contains('k-icon')).toBe(true);
        expect(child.classList.contains('k-i-arrow-s')).toBe(true);
    });

    it('should add north arrow when there are children and expanded', () => {
        panelBar({
            secondItemProps: { expanded: true }
        });

        const child = root.find("li")[1].children[0].children[0];

        expect(child.classList.contains('k-icon')).toBe(true);
        expect(child.classList.contains('k-i-arrow-n')).toBe(true);
    });

    it('should not add north arrow when there are children and expanded', () => {
        panelBar({
            secondItemProps: { expanded: false }
        });

        const childItems = root.find("li")[0].children[0].children;

        expect(childItems.length).toBe(0);
    });
}));
