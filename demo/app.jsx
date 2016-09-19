/* global document:false */
/* eslint-disable new-cap */
import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style, StyleRoot } from "radium";
import {
  bounce,
  flash,
  pulse,
  jello
} from '../lib';


const styles = {
  bounce: {
    animation: 'x 1s ease',
    animationName: Radium.keyframes(bounce, 'bounce'),
    transformOrigin: 'center bottom'
  },
  flash: {
    animation: 'x 1s ease',
    animationName: Radium.keyframes(flash, 'flash'),
  },
  pulse: {
    animation: 'x 1s ease',
    animationName: Radium.keyframes(pulse, 'pulse'),
  },
  jello: {
    animation: 'x 1s ease',
    animationName: Radium.keyframes(jello, 'jello'),
  },
}

let AnimationDemo = ({ style, animation, selectAnimation }) => (
  <div>
    <h1 style={style}>Hello, world</h1>
    <select value={animation} onChange={selectAnimation}>
    <option value='bounce'>Bounce</option>
    <option value='flash'>Flash</option>
    <option value='pulse'>Pulse</option>
    <option value='jello'>Jello</option>
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
