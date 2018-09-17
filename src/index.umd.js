

/**
 * Recupera el path de una url
 * @param {String} src
 * @private
 */
const getOrigin = (src) => {
    const url = new URL(src);
    return `${url.origin}/`;
};

/**
 * Recupera el Path del script actual
 * @private
 */
const getPath = () => {
    if (document.currentScript) {
        return getOrigin(document.currentScript.src);
    }
    const scripts = document.getElementsByTagName('script');
    return getOrigin(scripts[scripts.length - 1]);
};

// eslint-disable-next-line
__webpack_public_path__ = getPath();


export const name = 'rxmap';
export const actions = ['addData', 'create', 'marker', 'point', 'popup', 'setCenter'];
export const observers = ['gps', 'center', 'click'];
export const func = (type, mapLib, version, key) => import(/* webpackMode: "lazy" */ `./${type}/${mapLib}@${version}/${key}`);

export default [
    name,
    {
        observers,
        actions,
    },
    func,
];