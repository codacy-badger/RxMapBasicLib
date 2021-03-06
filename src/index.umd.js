import * as lib from './index';

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


export const {
  name,
  actions,
  observers,
  func,
} = lib;

export default [
  name,
  {
    observers,
    actions,
  },
  func,
];
