import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style } from "radium";


const Demo = ({ styles, duration, animation }) => {
  const headerStyle = {
    ...(styles[animation]),
    animationDuration: `${duration}s`,
    width: 500,
    fontSize: 60,
    margin: '30px auto',
    color: '#c43a31'
  };
  const descriptionStyle = {
    ...styles.fadeInUp,
    animationDuration: '2s',
    fontSize: 16,
  }

  // Render a bunch of empty spans so that each keyframe
  // will be available in the DOM.
  let dummies = Object.keys(styles).map(
    key => <span key={key} style={styles[key]} />
  );

  return (
    <div>
    {dummies}
    <h1 key={animation} style={headerStyle}>react-animations</h1>
    <p style={descriptionStyle}>A collection of animations for CSS-in-JS libraries </p>
    <a href='https://github.com/FormidableLabs/react-animations'>View on Github</a>
    </div>
  )
}

export default Radium(Demo);
