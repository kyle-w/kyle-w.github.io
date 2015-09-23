import styles from './index.css';

import {ajax} from 'jquery';
import React, {Component} from 'react';
import WebFont from 'webfontloader';

import Hero from '../hero';
import About from '../about';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {loaded: false, data: { links: [], colors: [] }, index: this.getRandomArbitrary(0,5) };
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  changeColors(start) {
    let self = this;
    let delay = 5199;
    if (start) {
      delay = 0;
    }
    setTimeout(function t(){
      self.setState({index: self.getRandomArbitrary(0,5)});
      self.changeColors();
    }, delay);
  }

  componentDidMount() {
    let self = this;
    WebFont.load({
      custom: {
        families: ['NeuzeitSLTStd-Book', 'NeuzeitSLTStd-BookHeavy']
      },
      active: function done() {
        setTimeout(function t() {
          ajax({
            url: 'https://dl.dropboxusercontent.com/s/5aafot8p7zvfehq/data.json',
            dataType: 'json',
            success: function(data) {
              self.setState({loaded: true, data: data});
              // document.querySelector('body').style.backgroundColor = this.state.data.colors.summary;
              setTimeout(function t(){
                self.changeColors(true);
              }, 5199);
            }
          });
        }, 100);
      }
    });
  }

  render() {
    return (
      <div className="root">
        <Hero
          pageLoaded={this.state.loaded}
          index={this.state.index}
          data={this.state.data}
        />
        <About
          pageLoaded={this.state.loaded}
          index={this.state.index}
          data={this.state.data}
        />
      </div>
    );
  }
}
