import React, { Component } from 'react';
import { Icon } from 'antd';

import './ViewControl.css';

class ViewControl extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onMoveUp = this.onMoveUp.bind(this);
    this.onMoveDown = this.onMoveDown.bind(this);
    this.onMoveLeft = this.onMoveLeft.bind(this);
    this.onMoveRight = this.onMoveRight.bind(this);

    this.onZoomIn = this.onZoomIn.bind(this);
    this.onZoomOut = this.onZoomOut.bind(this);
  }

  onMoveUp() {
    this.props.onMoveUp();
  }

  onMoveDown() {
    this.props.onMoveDown();
  }

  onMoveLeft() {
    this.props.onMoveLeft();
  }

  onMoveRight() {
    this.props.onMoveRight();
  }

  onZoomIn() {
    this.props.onZoomIn();
  }

  onZoomOut() {
    this.props.onZoomOut();
  }

  render() {
    const width = this.props.width || '80px';

    return (
      <div className="view-control" style={{ width, height: width }}>
        <div className="control-btn move-left" onClick={this.onMoveLeft}>
          <Icon type="left" />
        </div>
        <div className="control-btn move-right" onClick={this.onMoveRight}>
          <Icon type="right" />
        </div>
        <div className="control-btn move-up" onClick={this.onMoveUp}>
          <Icon type="up" />
        </div>
        <div className="control-btn move-down" onClick={this.onMoveDown}>
          <Icon type="down" />
        </div>

        <div className="control-btn zoom-in" onClick={this.onZoomIn}>
          <Icon type="plus" />
        </div>
        <div className="control-btn zoom-out" onClick={this.onZoomOut}>
          <Icon type="minus" />
        </div>
      </div>
    );
  }
}

export default ViewControl;
