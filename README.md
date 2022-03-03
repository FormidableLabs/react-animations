[![Maintenance Status][maintenance-image]](#maintenance-status)

# react-animations


A collection of animations that can be used with any inline style library that supports using objects to define keyframe animations, such as Radium or Aphrodite. React-animations implements all animations from [animate.css](https://daneden.github.io/animate.css/).

[Check out the interactive demo](http://react-animations.herokuapp.com/).

[Explore component collection](https://bit.dev/formidablelabs/react-animations).

<p align="center">
  <a href="https://bit.dev/formidablelabs/react-animations"><img src="https://i.imagesup.co/images2/1934ceb412dc8bf060b488ba037d7302a8a64087.gif"></a>
</p>

### Usage

You can import each animation directly from the main package

```js
import { fadeIn } from 'react-animations'
```

or you can import a specific animation directly

```js
import fadeIn from 'react-animations/lib/fade-in'
```


### Usage with [Radium](https://github.com/FormidableLabs/radium)

```js
import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

class Test extends React.Component {
  render() {
    <StyleRoot>
      <div className="test" style={styles.bounce}>
      </div>
    </StyleRoot>
  }
}

```

### Usage with [Aphrodite](https://github.com/Khan/aphrodite)

```js
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: '1s'
  }
})
```

### Usage with [JSS](https://github.com/cssinjs/react-jss)

```js
import { bounce } from 'react-animations';
import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const {classes} = jss.createStyleSheet({
  '@keyframes bounce': bounce,
  bounce: {
    animationName: 'bounce',
    animationDuration: '1s',
  },
}).attach()
```

### Usage with [`styled-components`](https://github.com/styled-components/styled-components)

```js
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
```

### Usage with [`fela-js`](https://github.com/robinweser/fela)

```js
import React from 'react';
import { render } from 'react-dom';
import { createRenderer } from 'fela';
import { createComponent, Provider } from 'react-fela';
import { bounce } from 'react-animations';

const mapStylesToProps = ({ background, height, width }, renderer) => ({
	animationName: renderer.renderKeyframe(() => bounce, {}),
	animationDuration: '2s',
	background,
	height,
	width,
});

const BouncingDiv = createComponent(mapStylesToProps, 'div');

render(
	<Provider renderer={createRenderer()}>
		<BouncingDiv background="red" height="100px" width="100px" />
	</Provider>,
	document.getElementById('root'),
);
```

## Animations

Below is a list of all available animations

`bounceOut`

`bounce`

`bounceIn`

`bounceInDown`

`bounceInLeft`

`bounceInRight`

`bounceInUp`

`bounceOutDown`

`bounceOutLeft`

`bounceOutRight`

`bounceOutUp`

`fadeIn`

`fadeInDown`

`fadeInDownBig`

`fadeInLeft`

`fadeInLeftBig`

`fadeInRight`

`fadeInRightBig`

`fadeInUp`

`fadeInUpBig`

`fadeOut`

`fadeOutDown`

`fadeOutDownBig`

`fadeOutLeft`

`fadeOutLeftBig`

`fadeOutRight`

`fadeOutRightBig`

`fadeOutUp`

`fadeOutUpBig`

`flash`

`flip`

`flipInX`

`flipInY`

`flipOutX`

`flipOutY`

`headShake`

`hinge`

`jello`

`lightSpeedIn`

`lightSpeedOut`

`pulse`

`rollIn`

`rollOut`

`rotateIn`

`rotateInDownLeft`

`rotateInDownRight`

`rotateInUpLeft`

`rotateInUpRight`

`rotateOut`

`rotateOutDownLeft`

`rotateOutDownRight`

`rotateOutUpLeft`

`rotateOutUpRight`

`rubberBand`

`shake`

`slideInDown`

`slideInLeft`

`slideInRight`

`slideInUp`

`slideOutDown`

`slideOutLeft`

`slideOutRight`

`slideOutUp`

`swing`

`tada`

`wobble`

`zoomIn`

`zoomInDown`

`zoomInLeft`

`zoomInRight`

`zoomInUp`

`zoomOut`

`zoomOutDown`

`zoomOutLeft`

`zoomOutRight`

`zoomOutUp`


## Merge

react-animations also exports a `merge` function that takes two animations and returns a new animation that combines the transforms from both. This is experimental and wont work (well) with animations that have conflicting transforms, such as `fadeIn` and `fadeOut`. The merged animation can be used just like any of the imported animations.


```js

import { merge, tada, flip } from 'react-animations';
const tadaFlip = merge(tada, flip);
```

### Maintenance Status

**Archived:** This project is no longer maintained by Formidable. We are no longer responding to issues or pull requests unless they relate to security concerns. We encourage interested developers to fork this project and make it their own!
