import './links.css';

import React, {Component} from 'react';
import LinkItem from './link-item';

export default class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {bgColor: null};
  }

  componentDidMount() {
    const obj = this.props.colors[this.props.index];
    this.setState({bgColor: obj.links});
  }

  render() {
    let classNameStr = this.props.pageLoaded ? 'links loaded' : 'links';
    let style = {backgroundColor: this.state.bgColor};
    return (
      <div className={classNameStr} style={style}>
        <div className="links-content">
          <LinkItem
            label="For more information or a portfolio please contact me at:"
            link="hello@kylewheeler.co.uk"
            icon="contact"
          />
          <LinkItem
            label="To find out more about who I’ve worked with"
            link="linkedin.com/pub/kyle.wheeler"
            icon="linkedin"
          />
          <LinkItem
            label="I collect things that interest me and post them here:"
            link="touseforreference.tumblr.com"
            icon="tumblr"
          />
          <LinkItem
            label="A home for pictures I take myself:"
            link="instagram.com/kyle.wheeler"
            icon="instagram"
          />
        </div>
      </div>
    );
  }
}