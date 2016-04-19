import constants from './constants';

export function onSelect(event) {
    event.preventDefault();
    return { type: constants.SELECT, ...event };
}

export function onKeyDown(event) {
    event.preventDefault();
    return { type: constants.KEY_DOWN, ...event };
}

export function onFocus(event) {
    return { type: constants.FOCUS };
}

export function onBlur(event) {
    return { type: constants.BLUR };
}