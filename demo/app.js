import React from 'react';
import ReactDOM from 'react-dom';
import Radium, { Style, StyleRoot } from 'radium';
import * as animations from '../lib';

import Demo from './demo';

const styles = {
  global: {
    textAlign: 'center',
    paddingTop: 200,
    body: {
      backgroundColor: '#e7e5e3',
      fontFamily: 'Whitney SSm A, Whitney SSm B, Helvetica Neue, Helvetica, Arial, sans-serif',
      lineHeight: 1.5,
      margin: 0,
      transform: 'translate3d(0, 0, 0)',
    },
    p: {
      margin: 0,
      color: '#242121'
    },
    select: {
      border: 'none',
      height: 35,
      fontSize: 15,
      fontFamily: 'inherit',
      width: 155,
      fontWeight: 'bold',
    },
    input: {
      height: 35,
      width: 50,
      border: 'none',
      padding: '0px 5px',
      borderRadius: 6,
      fontFamily: 'inherit'
    },
    button: {
      backgroundColor: 'white',
      outline: 'none',
      height: 35,
      border: 'none',
      padding: '0px 10px',
      borderRadius: 6,
      fontFamily: 'inherit'
    },
    label: {
      color: '#242121',
      position: 'absolute',
      bottom: 0,
      fontSize: 10,
    },
  },
  container: {
    position: 'relative',
    margin: 15,
    height: 60,
    display: 'inline-block',
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
  if (
    key === 'global' ||
    key === 'merge' ||
    key === 'container'
  ) {
    continue;
  }
  animationNames.push(key);
  const animation = animations[key];
  styles[key] = {
    ...styles[key],
    animation: 'x',
    animationName: Radium.keyframes(animation, key),
  };
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      animation: 'bounce',
      library: 'Radium',
    };
    this.duration = 1;
    this.selectAnimation = this.selectAnimation.bind(this);
    this.onDurationChange = this.onDurationChange.bind(this);
    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  selectAnimation({ target }) {
    this.setState({ animation: target.value });
  }

  onDurationChange({ target }) {
    // Track duration outside of state, as we don't
    // want duration changes to trigger a render.
    this.duration = parseFloat(target.value);
  }

  triggerAnimation() {
    const { animation } = this.state;
    this.setState({ animation: '' }, () => {
      this.setState({ animation });
    });
  }

  render() {
    const { animation } = this.state;
    return (
      <StyleRoot>
        <div style={styles.global}>
        <Style rules={styles.global} />
          <Demo
            duration={this.duration}
            animation={animation}
            styles={styles}
          />
        <div style={styles.container}>
        <label htmlFor='animation'>
          Animation
        </label>
        <select
          id='animation'
          value={animation}
          onChange={this.selectAnimation}>
            {animationNames.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
        </select>
        </div>
        <div style={styles.container}>
        <label htmlFor='duration'>
          Duration
        </label>
        <input
          defaultValue='1'
          onChange={this.onDurationChange}
          id='duration'
          style={styles.duration}
          type='number'
          min='1'
          max='10'/>
        </div>
        <div style={styles.container}>
          <button onClick={this.triggerAnimation} >
            Animate
          </button>
        </div>
        </div>
      </StyleRoot>
    );
  }
}

const Wrapper = Radium(App);

ReactDOM.render(<Wrapper/>, document.getElementById('content'));
