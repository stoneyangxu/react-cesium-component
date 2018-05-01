import React, { Component } from 'react';
import Toolbar from '../components/toolbar';

import './WithToolbar.css';

const Cesium = window.Cesium;
const FromDegrees = Cesium.HeadingPitchRoll.fromDegrees;

class WithToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const initialPosition = Cesium.Cartesian3.fromDegrees(
      -74.01881302800248,
      40.69114333714821,
      753,
    );
    const initialOrientation = new FromDegrees(
      21.27879878293835,
      -21.34390550872461,
      0.0716951918898415,
    );

    // Cesium.BingMapsApi.defaultKey =
    //   'AgH8JB-gA1Wo9ZbGL9oCEqfD-4YAkMnMp_XzzoGbynt_CC6l27GFWqN8SJaYm6aC';
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

    this.viewer.scene.camera.setView({
      destination: initialPosition,
      orientation: initialOrientation,
      endTransform: Cesium.Matrix4.IDENTITY,
    });
  }

  render() {
    return (
      <div className="full">
        <div id="cesiumContainer" className="full" />
        <Toolbar viewer={this.viewer} />
      </div>
    );
  }
}

export default WithToolbar;
