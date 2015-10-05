import './link-item.css';

import React, {Component} from 'react';

export default class LinkItem extends Component {

  handleClick(link, e) {
    e.preventDefault();
    let target = link.match(/mail/) ? '_self' : '_blank';
    window.open(link, target);
  }

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
            <a href="#" onClick={this.handleClick.bind(this, this.props.linkUrl)}>{this.props.link}</a>
          </p>
        </div>
      </div>
    );
  }
}