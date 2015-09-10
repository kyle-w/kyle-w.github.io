import './summary.css';

import React, {Component} from 'react';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {bgColor: null};
  }

  render() {
    let self = this;
    let classNameStr = this.props.pageLoaded ? 'summary loaded' : 'summary';
    let style = {backgroundColor: this.state.bgColor};
    let summary = this.props.data.summary ? this.props.data.summary : '';

    setTimeout(function(){
      const obj = self.props.colors[self.props.index];
      if (obj){
        self.setState({bgColor: obj.summary});
      }
    }, 50);

    return (
      <div className={classNameStr} style={style}>
        <p>{summary}</p>
      </div>
    );
  }
}