import styles from './index.css';

import React, {Component} from 'react';
import WebFont from 'webfontloader';

import Hero from '../hero';
import About from '../about';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {loaded: false, index: this.getRandomArbitrary(0,5) };
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    let self = this;
    WebFont.load({
      custom: {
        families: ['NeuzeitSLTStd-Book', 'NeuzeitSLTStd-BookHeavy']
      },
      active: function done() {
        setTimeout(function t() {
          self.setState({loaded: true});
        }, 300);
      }
    });
  }

  render() {
    return (
      <div className="root">
        <Hero pageLoaded={this.state.loaded} colors={this.props.colors} index={this.state.index} />
        <About pageLoaded={this.state.loaded} colors={this.props.colors} index={this.state.index} />
      </div>
    );
  }
}

App.defaultProps = {
  colors: [
    {hero: '#181B30', summary: '#ddd', links: '#000'},
    {hero: '#0E6AC7', summary: '#F6F5DA', links: '#062C80'},
    {hero: '#203E5F', summary: '#FEE5B1', links: '#1A2634'},
    {hero: '#5639A6', summary: '#FFE087', links: '#20236D'},
    {hero: '#413D65', summary: '#BEF992', links: '#2B1F31'},
    {hero: '#A03271', summary: '#EB92FB', links: '#4B4C7A'}
  ]
};
