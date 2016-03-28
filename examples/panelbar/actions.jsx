import constants from './constants';

export function onSelect(data) {
    return { type: constants.SELECT, ...data };
}