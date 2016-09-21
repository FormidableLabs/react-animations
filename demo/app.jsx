/* global document:false */
/* eslint-disable new-cap */
import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style, StyleRoot } from "radium";
import { StyleSheet, css } from 'aphrodite';
import * as animations from '../lib';


const styles = {
  global: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    paddingTop: 200,
  },
  swing: {
    transformOrigin: 'top center'
  },
  flip: {
    backfaceVisibilty: 'visible',
  },
};

let aphroditeStyle = {
  global: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    paddingTop: 200,
  },
  swing: {
    transformOrigin: 'top center'
  },
  flip: {
    backfaceVisibilty: 'visible',
  },
}


const animationNames = [];

for (let key in animations) {
  if (key === 'global') {
    continue;
  }
  animationNames.push(key);
  const animation = animations[key];
  styles[key] = {
    ...styles[key],
    animation: 'x 1s ease',
    animationName: Radium.keyframes(animation, key),
  };
  aphroditeStyle[key] = {
    ...aphroditeStyle[key],
    animationName: animation,
    animationDuration: '1s',
    animationTimingFunction: 'ease',
  };
}

aphroditeStyle = StyleSheet.create(aphroditeStyle)

let AnimationRadiumDemo = ({ style, animation, selectAnimation }) => (
  <div style={styles.global}>
    <span>Using Radium</span>
    <h1 style={style}>Hello, world</h1>
    <select value={animation} onChange={selectAnimation}>
    {animationNames.map(name => (
      <option key={name} value={name}>{name}</option>
    ))}
  </select>
  </div>
)

AnimationRadiumDemo = Radium(AnimationRadiumDemo);


let AnimationAphroditeDemo = ({ style, animation, selectAnimation }) => (
  <div className={css(style.global)}>
    <span>Using Aphrodite</span>
    <h1 className={css(style[animation])}>Hello, world</h1>
    <select value={animation} onChange={selectAnimation}>
    {animationNames.map(name => (
      <option key={name} value={name}>{name}</option>
    ))}
  </select>
  </div>
)

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      animation: 'bounce',
      library: 'Radium',
    }
    this.selectAnimation = this.selectAnimation.bind(this);
  }

  selectAnimation(event) {
    console.log('selectAnimation')
    this.setState({ animation: event.target.value })
  }

  onLibraryChange(library) {
    console.log(library)
    this.setState({ library })
  }

  render() {
    const { animation, library } = this.state;
    const style = styles[animation];
    console.log(animation, aphroditeStyle);
    let demo;
    if (library === 'Aphrodite') {
      demo = (
        <div>
          <AnimationAphroditeDemo
            selectAnimation={this.selectAnimation}
            animation={animation}
            style={aphroditeStyle}
          />
        </div>
      )
    } else {
      demo = (
        <StyleRoot>
          <AnimationRadiumDemo
            selectAnimation={this.selectAnimation}
            animation={animation}
            style={style} />
        </StyleRoot>
      )
    }
    return (
      <div>
        {demo}
        <button
          onClick={this.onLibraryChange.bind(this, 'Radium')}>
            Use Radium
        </button>
        <button
          onClick={this.onLibraryChange.bind(this, 'Aphrodite')}>
            Use Aphrodite
        </button>
      </div>
    )
  }
}

const Wrapper = Radium(App);

ReactDOM.render(<Wrapper/>, document.getElementById("content"));
