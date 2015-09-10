import './links.css';

import React, {Component} from 'react';
import LinkItem from './link-item';

export default class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {bgColor: null};
  }

  render() {
    let self = this;
    let classNameStr = this.props.pageLoaded ? 'links loaded' : 'links';
    let style = {backgroundColor: this.state.bgColor};
    let data = this.props.data;
    let links = this.props.data.links.map( function(item, i) {
      return (
        <LinkItem
          label={item.label}
          link={item.link}
          icon={item.icon}
          key={i}
        />
      )
    });

    setTimeout(function(){
      const obj = self.props.colors[self.props.index];
      if (obj) {
        self.setState({bgColor: obj.links});
      }
    }, 50);

    return (
      <div className={classNameStr} style={style}>
        <div className="links-content">
          {links}
        </div>
      </div>
    );
  }
}