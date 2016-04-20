const guid = function() {
    let id = "";
    let random;

    for (let i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;

        if (i === 8 || i === 12 || i === 16 || i === 20) {
            id += "-";
        }

        /*eslint no-nested-ternary:0*/
        id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }

    return id;
};

export default {
    guid: guid
};
