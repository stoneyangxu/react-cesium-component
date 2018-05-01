import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import { MapType, switchMap } from './switchMap';

import './Toolbar.css';

const SubMenu = Menu.SubMenu;

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { viewer } = this.props;
    return (
      <Menu
        className="toolbar"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="global" />
            </span>
          }
        >
          <Menu.Item key="arcgis">
            <a onClick={() => switchMap(viewer, MapType.ArcGis)}>ArcGis</a>
          </Menu.Item>
          <Menu.Item key="openstreet">
            <a onClick={() => switchMap(viewer, MapType.Openstreet)}>Openstreet</a>
          </Menu.Item>
          <Menu.Item key="mapbox-streets">
            <a onClick={() => switchMap(viewer, MapType.MapboxStreets)}>Mapbox Streets</a>
          </Menu.Item>
          <Menu.Item key="mapbox-satellite">
            <a onClick={() => switchMap(viewer, MapType.MapboxSatellite)}>Mapbox Satellite</a>
          </Menu.Item>
          <Menu.Item key="mapbox-streets-satellite">
            <a onClick={() => switchMap(viewer, MapType.MapboxStreetSatellite)}>
              Mapbox Satellite Streets
            </a>
          </Menu.Item>
          <Menu.Item key="bing-map-road">
            <a onClick={() => switchMap(viewer, MapType.BingMapRoad)}>Bing Map Road</a>
          </Menu.Item>
          <Menu.Item key="bing-map-aerial">
            <a onClick={() => switchMap(viewer, MapType.BingMapAerial)}>Bing Map Aerial</a>
          </Menu.Item>
          <Menu.Item key="bing-map-aerial-with-label">
            <a onClick={() => switchMap(viewer, MapType.BingMapAerialWithLabel)}>
              Bing Map Aerial With Labels
            </a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="setting">
          <Icon type="setting" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Toolbar;
