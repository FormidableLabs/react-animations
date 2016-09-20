#### !!! Work in progress !!!

# react-effects

A collection of animations for CSS-in-JS libraries.

## Usage

These animations can be used with Radium or Aphrodite.


### Radium

```js
import { bounce } from 'react-effects';
import Radium from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}
```

### Aphrodite

```js
import { bounce } from 'react-effects';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: '1s'
  }
})
```
