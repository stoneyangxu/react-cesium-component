import React, { Component } from 'react';
import Toolbar from '../components/toolbar';

import './WithSearchbar.css';
import { SearchBar } from '../components/searchBar';

const Cesium = window.Cesium;

class WithSearchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.viewer = new Cesium.Viewer('cesiumContainer', {
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      geocoder: false,
      homeButton: false,
      navigationHelpButton: false,
      sceneModePicker: false,
      timeline: false,
      imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
      }),
    });
  }

  onSelect(key, result) {
    console.log(key, result);
    const { coordinates } = result;
    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(coordinates[0], coordinates[1], 1000.0),
      // orientation: {
      //   heading: Cesium.Math.toRadians(175.0),
      //   pitch: Cesium.Math.toRadians(-35.0),
      //   roll: 0.0,
      // },
    });

    const pinBuilder = new Cesium.PinBuilder();

    this.viewer.entities.removeById('search-result');
    this.viewer.entities.add({
      id: 'search-result',
      name: key,
      position: Cesium.Cartesian3.fromDegrees(coordinates[0], coordinates[1]),
      billboard: {
        image: pinBuilder.fromColor(Cesium.Color.DEEPSKYBLUE, 48).toDataURL(),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    });
  }

  render() {
    return (
      <div className="full">
        <div id="cesiumContainer" className="full" />
        <Toolbar viewer={this.viewer} />
        <SearchBar width="200px" onSelect={this.onSelect} />
      </div>
    );
  }
}

export default WithSearchbar;
