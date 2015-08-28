import './link-item.css';

import React, {Component} from 'react';

export default class LinkItem extends Component {

  render() {
    let iconClassName = 'icon ' + this.props.icon;
    return (
      <div className="linkItem">
        <div className="linkItem-icon">
          <i className={iconClassName}></i>
        </div>
        <div className="linkItem-info">
          <h5>{this.props.label}</h5>
          <p>
            <a href="#">{this.props.link}</a>
          </p>
        </div>
      </div>
    );
  }
}