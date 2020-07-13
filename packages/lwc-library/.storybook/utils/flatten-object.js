export default function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? `${prefix}.` : '';
        const prop = `${pre}${k}`;
        if (typeof obj[k] === 'object') {
            Object.assign(acc, flattenObject(obj[k], prop));
        } else {
            acc[prop] = obj[k];
        }
        return acc;
    }, {});
};
