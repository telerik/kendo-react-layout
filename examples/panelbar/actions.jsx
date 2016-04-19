import constants from './constants';

export function onSelect(event) {
    return { ...event, type: constants.SELECT};
}

export function onKeyDown(event) {
    return { ...event, type: constants.KEY_DOWN };
}

export function onFocus(event) {
    return { type: constants.FOCUS };
}

export function onBlur(event) {
    return { type: constants.BLUR };
}