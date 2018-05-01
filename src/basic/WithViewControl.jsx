import React, { Component } from 'react';

import ViewControl from '../components/viewControl';
import Toolbar from '../components/toolbar';

import './WithViewControl.css';

const Cesium = window.Cesium;
const FromDegrees = Cesium.HeadingPitchRoll.fromDegrees;

class WithViewControl extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }

  componentDidMount() {
    Cesium.BingMapsApi.defaultKey =
      'AgH8JB-gA1Wo9ZbGL9oCEqfD-4YAkMnMp_XzzoGbynt_CC6l27GFWqN8SJaYm6aC';

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

    this.viewer = new Cesium.Viewer('cesiumContainer', {
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      geocoder: false,
      homeButton: false,
      navigationHelpButton: false,
      sceneModePicker: false,
      timeline: false,
    });

    this.viewer.scene.camera.setView({
      destination: initialPosition,
      orientation: initialOrientation,
      endTransform: Cesium.Matrix4.IDENTITY,
    });

    const tileset = new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(3839) });
    this.viewer.scene.primitives.add(tileset);

    this.viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
      url: '//assets.agi.com/stk-terrain/world',
    });

    this.viewer.extend(Cesium.viewerCesiumNavigationMixin, {});

    this.viewer.camera.defaultRotateAmount = Math.PI / 36000.0;
    this.viewer.camera.defaultZoomAmount = 500.0;
  }

  moveUp() {
    this.viewer.camera.rotateDown();
  }

  moveDown() {
    this.viewer.camera.rotateUp();
  }

  moveLeft() {
    this.viewer.camera.rotateLeft();
  }

  moveRight() {
    this.viewer.camera.rotateRight();
  }

  zoomIn() {
    this.viewer.camera.zoomIn();
  }

  zoomOut() {
    this.viewer.camera.zoomOut();
  }

  render() {
    return (
      <div className="full">
        <div id="cesiumContainer" className="full" />
        <ViewControl
          width="64px"
          onMoveUp={this.moveUp}
          onMoveDown={this.moveDown}
          onMoveLeft={this.moveLeft}
          onMoveRight={this.moveRight}
          onZoomIn={this.zoomIn}
          onZoomOut={this.zoomOut}
        />

        <Toolbar viewer={this.viewer} />
      </div>
    );
  }
}

export default WithViewControl;
