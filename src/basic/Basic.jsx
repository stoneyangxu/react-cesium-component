import React, { Component } from 'react';

const Cesium = window.Cesium;

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Cesium.BingMapsApi.defaultKey =
      'AgH8JB-gA1Wo9ZbGL9oCEqfD-4YAkMnMp_XzzoGbynt_CC6l27GFWqN8SJaYm6aC';
    const viewer = new Cesium.Viewer('cesiumContainer');
    viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
      url: '//assets.agi.com/stk-terrain/world',
    });
  }

  render() {
    return <div id="cesiumContainer" className="full" />;
  }
}

export default Basic;
