import React, { Component } from 'react';
import { Icon, Input, AutoComplete } from 'antd';

import formatMapboxResult from './resultFormatting';

import './SearchBar.css';

const MapboxClient = window.MapboxClient;
const Option = AutoComplete.Option;

const renderOption = item => {
  return (
    <Option {...item}>
      <a title={item.text}>{item.text}</a>
    </Option>
  );
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };

    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);

    this.client = new MapboxClient(
      'pk.eyJ1IjoiaGl0eWFuZ3h1IiwiYSI6ImNqZGt6MnlyajAya20ycm10aWt0dnNtYmkifQ.LKpZrQ1KWpNeyvOpCowGUg',
    );
  }

  onSelect(key, option) {
    this.props.onSelect(key, option.props);
  }

  onChange(value) {
    if (!value || value.trim() === '') {
      this.setState({
        dataSource: [],
      });
    } else {
      this.client.geocodeForward(value).then(res => {
        this.setState({
          dataSource: formatMapboxResult(res),
        });
      });
    }
  }

  render() {
    return (
      <div className="location-search">
        <AutoComplete
          allowClear
          style={{ width: '100%' }}
          dataSource={this.state.dataSource.map(renderOption)}
          onSelect={this.onSelect}
          onChange={this.onChange}
          optionLabelProp="text"
        >
          <Input placeholder="input" prefix={<Icon type="search" />} />
        </AutoComplete>
      </div>
    );
  }
}

export default SearchBar;
