
import googlePoint from '../../utils/transformPointGoogle';
import extractProperties from '../../utils/extractProperties';

/**
 * Funcion que permite crear un marcador en el mapa
 *
 * @param {Object} context contexto de la ejeución
 * @param {Object|Array} point Posicion del mapa
 * @param {Object} [options] opcions del Marcador
 * @param {String} [options.icon] icono del Marcador
 * @param {Object} [options.size] tamaño del Marcador
 * @param {Number} [options.size.with] alto del Marcador
 * @param {Number} [options.size.height] ancho del Marcador
 * @param {Object} [properties] propiedades / features del marcador
 * @returns {Object} Marcador
 */
const drawMarker = (context, point, options = {}, properties = {}) => {
  const googleMaps = context.library.maps;
  const map = context.source.getMap();
  const markerOptions = {
    position: googlePoint(point),
    map,
  };
  if (options && options.icon) {
    const image = {
      url: options.icon,
      // This marker is 20 pixels wide by 32 pixels high.
      scaledSize: options.size ? new googleMaps.Size(options.size.width, options.size.height) : null,
      // The origin for this image is (0, 0).
      origin: new googleMaps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      // anchor: new googleMaps.Point(0, 32),
    };
    markerOptions.icon = image;
  }

  const markerMap = new googleMaps.Marker(markerOptions);
  markerMap.properties = extractProperties(properties);
  return markerMap;
};

export default drawMarker;
/**
 * @private
*/
export const name = 'marker';
