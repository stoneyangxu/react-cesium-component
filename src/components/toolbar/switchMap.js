const Cesium = window.Cesium;

export const MapType = {
  ArcGis: 0,
  Openstreet: 1,
  MapboxStreets: 2,
  MapboxSatellite: 3,
  MapboxStreetSatellite: 4,
  BingMapRoad: 5,
  BingMapAerial: 6,
  BingMapAerialWithLabel: 7,
};

function createMapboxProvider(mapId) {
  return new Cesium.MapboxImageryProvider({
    mapId,
    accessToken:
      'pk.eyJ1IjoiaGl0eWFuZ3h1IiwiYSI6ImNqZGt6MnlyajAya20ycm10aWt0dnNtYmkifQ.LKpZrQ1KWpNeyvOpCowGUg',
  });
}

function createBingMapProvider(mapType) {
  return new Cesium.BingMapsImageryProvider({
    url: 'https://dev.virtualearth.net',
    key: 'AtR-aLl_EeX7IwQKA_JDbgSojtgOZHyhhCwgt_7vB-W7BEaowk9TJ2pEgvxk2D0Z',
    mapStyle: mapType,
  });
}

// https://cesiumjs.org/Cesium/Build/Documentation/?classFilter=ImageryProvider

export function switchMap(viewer, mapType) {
  let provider = null;

  switch (mapType) {
    case MapType.ArcGis: {
      provider = new Cesium.ArcGisMapServerImageryProvider({
        url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
      });
      break;
    }
    case MapType.Openstreet: {
      provider = Cesium.createOpenStreetMapImageryProvider({
        url: 'https://a.tile.openstreetmap.org/',
      });
      break;
    }
    case MapType.MapboxStreets: {
      provider = createMapboxProvider('mapbox.streets');
      break;
    }
    case MapType.MapboxSatellite: {
      provider = createMapboxProvider('mapbox.satellite');
      break;
    }
    case MapType.MapboxStreetSatellite: {
      provider = createMapboxProvider('mapbox.streets-satellite');
      break;
    }
    case MapType.BingMapRoad: {
      provider = createBingMapProvider(Cesium.BingMapsStyle.ROAD);
      break;
    }
    case MapType.BingMapAerial: {
      provider = createBingMapProvider(Cesium.BingMapsStyle.AERIAL);
      break;
    }
    case MapType.BingMapAerialWithLabel: {
      provider = createBingMapProvider(Cesium.BingMapsStyle.AERIAL_WITH_LABELS);
      break;
    }
    default:
      break;
  }

  viewer.imageryLayers.removeAll();
  viewer.imageryLayers.addImageryProvider(provider);
}
