import constants from './constants';

export function onSelect(data) {
    return { type: constants.SELECT, ...data };
}

export function onKeyDown(data) {
    return { type: constants.KEY_DOWN, ...data };
}