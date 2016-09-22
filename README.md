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

## Animations

Below is a list of all available animations

### `bouceOut`
```js
import bouceOut from 'lib/bouceOut'
```
### `bounce`
```js
import bounce from 'lib/bounce'
```
### `bounceIn`
```js
import bounceIn from 'lib/bounceIn'
```
### `bounceInDown`
```js
import bounceInDown from 'lib/bounceInDown'
```
### `bounceInLeft`
```js
import bounceInLeft from 'lib/bounceInLeft'
```
### `bounceInRight`
```js
import bounceInRight from 'lib/bounceInRight'
```
### `bounceInUp`
```js
import bounceInUp from 'lib/bounceInUp'
```
### `bounceOutDown`
```js
import bounceOutDown from 'lib/bounceOutDown'
```
### `bounceOutLeft`
```js
import bounceOutLeft from 'lib/bounceOutLeft'
```
### `bounceOutRight`
```js
import bounceOutRight from 'lib/bounceOutRight'
```
### `bounceOutUp`
```js
import bounceOutUp from 'lib/bounceOutUp'
```
### `fadeIn`
```js
import fadeIn from 'lib/fadeIn'
```
### `fadeInDown`
```js
import fadeInDown from 'lib/fadeInDown'
```
### `fadeInDownBig`
```js
import fadeInDownBig from 'lib/fadeInDownBig'
```
### `fadeInLeft`
```js
import fadeInLeft from 'lib/fadeInLeft'
```
### `fadeInLeftBig`
```js
import fadeInLeftBig from 'lib/fadeInLeftBig'
```
### `fadeInRight`
```js
import fadeInRight from 'lib/fadeInRight'
```
### `fadeInRightBig`
```js
import fadeInRightBig from 'lib/fadeInRightBig'
```
### `fadeInUp`
```js
import fadeInUp from 'lib/fadeInUp'
```
### `fadeInUpBig`
```js
import fadeInUpBig from 'lib/fadeInUpBig'
```
### `fadeOut`
```js
import fadeOut from 'lib/fadeOut'
```
### `fadeOutDown`
```js
import fadeOutDown from 'lib/fadeOutDown'
```
### `fadeOutDownBig`
```js
import fadeOutDownBig from 'lib/fadeOutDownBig'
```
### `fadeOutLeft`
```js
import fadeOutLeft from 'lib/fadeOutLeft'
```
### `fadeOutLeftBig`
```js
import fadeOutLeftBig from 'lib/fadeOutLeftBig'
```
### `fadeOutRight`
```js
import fadeOutRight from 'lib/fadeOutRight'
```
### `fadeOutRightBig`
```js
import fadeOutRightBig from 'lib/fadeOutRightBig'
```
### `fadeOutUp`
```js
import fadeOutUp from 'lib/fadeOutUp'
```
### `fadeOutUpBig`
```js
import fadeOutUpBig from 'lib/fadeOutUpBig'
```
### `flash`
```js
import flash from 'lib/flash'
```
### `flip`
```js
import flip from 'lib/flip'
```
### `flipInX`
```js
import flipInX from 'lib/flipInX'
```
### `flipInY`
```js
import flipInY from 'lib/flipInY'
```
### `flipOutX`
```js
import flipOutX from 'lib/flipOutX'
```
### `flipOutY`
```js
import flipOutY from 'lib/flipOutY'
```
### `headShake`
```js
import headShake from 'lib/headShake'
```
### `hinge`
```js
import hinge from 'lib/hinge'
```
### `jello`
```js
import jello from 'lib/jello'
```
### `lightSpeedIn`
```js
import lightSpeedIn from 'lib/lightSpeedIn'
```
### `lightSpeedOut`
```js
import lightSpeedOut from 'lib/lightSpeedOut'
```
### `pulse`
```js
import pulse from 'lib/pulse'
```
### `rollIn`
```js
import rollIn from 'lib/rollIn'
```
### `rollOut`
```js
import rollOut from 'lib/rollOut'
```
### `rotateIn`
```js
import rotateIn from 'lib/rotateIn'
```
### `rotateInDownLeft`
```js
import rotateInDownLeft from 'lib/rotateInDownLeft'
```
### `rotateInDownRight`
```js
import rotateInDownRight from 'lib/rotateInDownRight'
```
### `rotateInUpLeft`
```js
import rotateInUpLeft from 'lib/rotateInUpLeft'
```
### `rotateInUpRight`
```js
import rotateInUpRight from 'lib/rotateInUpRight'
```
### `rotateOut`
```js
import rotateOut from 'lib/rotateOut'
```
### `rotateOutDownLeft`
```js
import rotateOutDownLeft from 'lib/rotateOutDownLeft'
```
### `rotateOutDownRight`
```js
import rotateOutDownRight from 'lib/rotateOutDownRight'
```
### `rotateOutUpLeft`
```js
import rotateOutUpLeft from 'lib/rotateOutUpLeft'
```
### `rotateOutUpRight`
```js
import rotateOutUpRight from 'lib/rotateOutUpRight'
```
### `rubberBand`
```js
import rubberBand from 'lib/rubberBand'
```
### `shake`
```js
import shake from 'lib/shake'
```
### `slideInDown`
```js
import slideInDown from 'lib/slideInDown'
```
### `slideInLeft`
```js
import slideInLeft from 'lib/slideInLeft'
```
### `slideInRight`
```js
import slideInRight from 'lib/slideInRight'
```
### `slideInUp`
```js
import slideInUp from 'lib/slideInUp'
```
### `slideOutDown`
```js
import slideOutDown from 'lib/slideOutDown'
```
### `slideOutLeft`
```js
import slideOutLeft from 'lib/slideOutLeft'
```
### `slideOutRight`
```js
import slideOutRight from 'lib/slideOutRight'
```
### `slideOutUp`
```js
import slideOutUp from 'lib/slideOutUp'
```
### `swing`
```js
import swing from 'lib/swing'
```
### `tada`
```js
import tada from 'lib/tada'
```
### `wobble`
```js
import wobble from 'lib/wobble'
```
### `zoomIn`
```js
import zoomIn from 'lib/zoomIn'
```
### `zoomInDown`
```js
import zoomInDown from 'lib/zoomInDown'
```
### `zoomInLeft`
```js
import zoomInLeft from 'lib/zoomInLeft'
```
### `zoomInRight`
```js
import zoomInRight from 'lib/zoomInRight'
```
### `zoomInUp`
```js
import zoomInUp from 'lib/zoomInUp'
```
### `zoomOut`
```js
import zoomOut from 'lib/zoomOut'
```
### `zoomOutDown`
```js
import zoomOutDown from 'lib/zoomOutDown'
```
### `zoomOutLeft`
```js
import zoomOutLeft from 'lib/zoomOutLeft'
```
### `zoomOutRight`
```js
import zoomOutRight from 'lib/zoomOutRight'
```
### `zoomOutUp`
```js
import zoomOutUp from 'lib/zoomOutUp'
```
