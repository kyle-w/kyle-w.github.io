import './index.css';

import React, {Component} from 'react';

export default class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {bgColor: null};
  }
 
  componentDidMount() {
    const obj = this.props.colors[this.props.index];
    this.setState({bgColor: obj.hero});
  }

  render() {
    let classNameStr = this.props.pageLoaded ? 'hero animate' : 'hero';
    let style = {backgroundColor: this.state.bgColor};
    return (
      <div className={classNameStr} style={style}>
        <div className="hero-content">
          <h1 className="hero-title">Kyle Wheeler</h1>
          <h3 className="hero-headline">Design &amp; Art Direction</h3>
        </div>
      </div>
    );
  }
}