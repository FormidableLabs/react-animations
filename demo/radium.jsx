import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style, StyleRoot } from "radium";
import { StyleSheet, css } from 'aphrodite';
import * as animations from '../lib';
import merge from '../lib/merge';


class RadiumDemo extends React.Component {
  render() {
    const {
      styles,
      animation
    } = this.props;
    return (
      <div style={styles.global}>
        <span>Using <a href='https://github.com/FormidableLabs/radium'>Radium</a></span>
        <h1 style={styles[animation]}>Hello, world</h1>
      </div>
    )
  }
}

export default Radium(RadiumDemo);
