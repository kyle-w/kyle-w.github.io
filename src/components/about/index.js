import './index.css';

import React, {Component} from 'react';

import Summary from './summary';
import Links from './links';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Summary pageLoaded={this.props.pageLoaded} colors={this.props.colors} index={this.props.index} />
        <Links pageLoaded={this.props.pageLoaded} colors={this.props.colors} index={this.props.index} />
      </div>
    );
  }
}