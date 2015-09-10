import './index.css';

import React, {Component} from 'react';

export default class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {bgColor: null};
  }

  render() {
    let self = this;
    let classNameStr = this.props.pageLoaded ? 'hero animate' : 'hero';
    let style = {backgroundColor: this.state.bgColor};
    let data = this.props.data;
    let heroClassNameStr = this.props.data.title ? 'hero-content is-visible' : 'hero-content';
    setTimeout(function(){
      const obj = self.props.data.colors[self.props.index];
      if (obj) {
        self.setState({bgColor: obj.hero});
      }
    }, 50);
    return (
      <div className={classNameStr} style={style}>
        <div className={heroClassNameStr}>
          <h1 className="hero-title">{data.title}</h1>
          <h3 className="hero-headline">{data.headline}</h3>
        </div>
      </div>
    );
  }
}