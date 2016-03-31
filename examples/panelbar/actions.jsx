import constants from './constants';

export function onSelect(data) {
    return { type: constants.SELECT, ...data };
}

export function onKeyDown(data) {
    return { type: constants.KEY_DOWN, ...data };
}

export function onFocus(data) {
    return { type: constants.FOCUS };
}

export function onBlur(data) {
    return { type: constants.BLUR };
}