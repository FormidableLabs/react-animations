/* global document:false */
/* eslint-disable new-cap */
import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style, StyleRoot } from "radium";
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
}

let AnimationDemo = ({ style, animation, selectAnimation }) => (
  <div style={styles.global}>
    <h1 style={style}>Hello, world</h1>
    <select value={animation} onChange={selectAnimation}>
    {animationNames.map(name => (
      <option key={name} value={name}>{name}</option>
    ))}
  </select>
  </div>
)

AnimationDemo = Radium(AnimationDemo);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      animation: 'bounce',
    }
    this.selectAnimation = this.selectAnimation.bind(this);
  }

  selectAnimation(event) {
    console.log('selectAnimation')
    this.setState({ animation: event.target.value })
  }

  render() {
    const { animation } = this.state;
    const style = styles[animation];
    return (
      <StyleRoot>
        <AnimationDemo
          selectAnimation={this.selectAnimation}
          animation={animation}
          style={style} />
      </StyleRoot>
    )
  }
}

const Wrapper = Radium(App);

ReactDOM.render(<Wrapper/>, document.getElementById("content"));
