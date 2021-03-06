
const config = {
  type: 'leaflet',
  options: {
    key: 'AIzaSyCjj-I0sYedbWCAmAoW2LgAr4T2bkPa09Y',
  },
  map: {
    autoCenter: false,
    center: {
      lat: 51.505,
      lng: -0.09,
    },
    zoom: 13,
  },
  dataTypes: [
    {
      id: 'test',
      geomType: 'point',
      style: {
        color: '#F00',
        fillColor: '#F00',
        radius: 10,
        opacity: 1,
        fillOpacity: 0.5,
        weight: 1,
      },
    },
    {
      id: 'pre',
      geomType: 'point',
      style: {
        color: '#0000ff ',
        fillColor: '#0000ff ',
        radius: 5,
        opacity: 1,
        fillOpacity: 0.5,
        weight: 1,
      },
    },
    {
      id: 'mar',
      geomType: 'marker',
      style: {
        icon: 'https://www.freeiconspng.com/uploads/red-location-map-pin-icon-5.png',
        size: { width: 24, height: 34 },
      },
    },
  ],
  layers: [],
};

const dataTest = [
  {
    position: {
      lat: 42,
      lng: 2.4,
    },
    test: '11111',
    otro: 'oooo',
  },
  {
    position: {
      lat: 42.1,
      lng: 2.4,
    },
    properties: {
      test: '222222',
      otro: 'oooo',
    },
  },
];
const dataPre = [
  {
    lat: 42.05,
    lng: 2.4,
    test: 'asf',
    otro: 'oooo',
  },
  {
    position: {
      lat: 42.1,
      lng: 2.42,
    },
    test: 'asf',
    otro: 'oooo',
  },
];

const dataMar = [
  [41.95, 2.4],
];

const positions = [
  { lat: 51.50270552998373, lng: -0.08368492126464844 },
  { lat: 51.53270552998373, lng: -0.08368492126464844 },
  { lat: 1, lng: 2 },
];
console.log(R);
R.registerLib(...RxMapBasicLib);
R.RxMapFromConfig('map', config).then((Map) => {
  console.log(Map);
  Map.marker({ lat: 51.5, lng: -0.09 })
    .popup('adios Mundo');

  Map.observer(positions)
    .marker(res => res)
    .popup('click')
    .subscribe();

  Map.observer('click')
    .marker((data => data))
    .subscribe(data => console.log('subscribe CLICK', data));

  document.getElementById('addData').addEventListener('click', () => {
    Map.addData('test', dataTest).popup(props => `<br> Esto es un ejemplo <b>${props.test}</b>`);
    Map.addData('mar', dataMar);

    Map.addData('pre', dataPre)
      .observer('click')
      .subscribe(data => console.log('subscribe CLICK DATA PRE', data));
  });
});
