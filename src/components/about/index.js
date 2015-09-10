import './index.css';

import React, {Component} from 'react';

import Summary from './summary';
import Links from './links';

export default class About extends Component {
  render() {
    const colors = this.props.data.colors;
    return (
      <div className="about">
        <Summary
          pageLoaded={this.props.pageLoaded}
          colors={colors}
          index={this.props.index}
          data={this.props.data}
        />
        <Links
          pageLoaded={this.props.pageLoaded}
          colors={colors}
          index={this.props.index}
          data={this.props.data}
        />
      </div>
    );
  }
}