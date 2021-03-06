# @RxMap/basicLib

[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![AUR](https://img.shields.io/aur/license/yaourt.svg)](https://github.com/xlab-tech/RxMap/blob/master/LICENSE)

[<img src="https://avatars0.githubusercontent.com/u/37194013?s=400&u=692377e91a2dab11006abb01d0db33cdb211c9b8&v=4" alt="xlab"  height="64">](https://xlab.tech)

Libreria de acciones y observadores basicas para [RxMap](https://github.com/xlab-tech/RxMap).


## Instalación

### NPM
```
Npm install @rxmap\basiclib —save
```

### CDN
```
<head>
<script type=‘application/javascript’ src=‘https://unpkg.com/@rxmap/basiclib@1.0.0’ defer/>
</head>

```

Nombre de la librearia: RxMapsBasicLib

Soporta las siguientes librerias de Mapas:
- [Google Maps](https://cloud.google.com/maps-platform/)
- [leaflet](https://leafletjs.com)


## Acciones

- create:

  Permite crear un mapa basico, pasandole lat, long y zoom
  ```
    RxMap.create('map', 51.505, -0.09, 13);
  ```

- marker:

  Permite crear un marcador en un punto concreto
  Se le puede pasar el icono y el tamaño del icono a mostrar como marcador
  ```
    RxMap.marker({ lat: 52.1, lng: -0.09 },{},{test:'asfdaf'});

    RxMap.observer('click')
    .marker((data => ({ lat: data.lat, lng: data.lng })))
    .subscribe(data => console.log(data));

  ```

- point:

  Permite añadir un punto ( circulo ) en un punto concreto.
  se le puden pasar los estilos con el que se quiere pintar.
  ```
    RxMap.point({ lat: 52.1, lng: -0.09 },{fillColor:'#ff'});

  ```

- popup:

  Permite añadir un popup a un marker o un point. y mostar la infromación que se quiera.
  ```
    RxMap.marker({ lat: 51.5, lng: -0.09 })
      .popup('adios Mundo');

    RxMap.marker({ lat: 52.1, lng: -0.09 },{},{test:'asfdaf'})
      .popup(props => `<br> Esto es un ejemplo <b>${props.test}</b>`);
  ```

- setCenter:

  Permite mover el mapa a un punto que se quiera.
  ```
    RxMap.observer('gps')
     .pipe(take(1))
     .setCenter(res => ({ lat: res.latitude, lng: res.longitude }))
     .subscribe(data => console.log('GPS', data));

  ```

- addData:

  Permite añadir datos al mapa en lote ( marker, points) con un mismo estilo.
  ```
    RxMap.addData('mar', dataMar);
    RxMap.addData('test', dataTest).popup(props => `<br> Esto es un ejemplo <b>${props.test}</b>`);
 
    RxMap.addData('pre', dataPre)
      .observer('click')
      .subscribe(data => console.log('subscribe CLICK DATA PRE', data));
  ```

## Observadores

- center:

  Permite observar cuando se mueve el mapa.
  ```
    RxMap.observer('center')
      .pipe(take(5))
      .subscribe(data => console.log('subscribe Center', data));

  ```

- click:

  Permite observar cuando se hace click sobre el mapa, o un marker o un point.
  ```
    RxMap.observer('click')
      .marker((data => ({ lat: data.lat, lng: data.lng })))
      .subscribe(data => console.log('subscribe CLICK', data));

    RxMap.addData('pre', dataPre)
      .observer('click')
      .subscribe(data => console.log('subscribe CLICK DATA PRE', data));
  ```

- gps:

  Permite observar el gps del dispositivo.
  ```
    RxMap.observer('gps')
      .pipe(take(1))
      .setCenter(res => ({ lat: res.latitude, lng: res.longitude }))
      .subscribe(data => console.log('GPS', data));

  ```