import './summary.css';

import React, {Component} from 'react';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {bgColor: null};
  }

  componentDidMount() {
    const obj = this.props.colors[this.props.index];
    this.setState({bgColor: obj.summary});
  }

  render() {
    let classNameStr = this.props.pageLoaded ? 'summary loaded' : 'summary';
    let style = {backgroundColor: this.state.bgColor};
    return (
      <div className={classNameStr} style={style}>
        <p>
          Hello, I’m Kyle. For the past eight years I’ve been working as a
          designer in the fields of brand identity, wayfinding, digital and
          editorial design for studios such as Pentagram, Bureau for Visual
          Affairs and SAS in London. I’m currently working for The Times and
          Sunday Times as the lead designer of their new responsive website
        </p>
      </div>
    );
  }
}